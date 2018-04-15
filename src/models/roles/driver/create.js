import Boom from "boom";
import * as yup from "yup";
import * as userModel from "models/account/user";
import { prop, pick, difference } from "ramda";
import { validate } from "core/conceptions/models/validation";
import readByUserId from "./readByUserId";

export default async (props, userId, db) => {
  const { role } = await userModel.readById(userId, db);

  if (role !== "driver") {
    throw Boom.forbidden("User should have a driver role");
  }

  if (await readByUserId(userId, db)) {
    throw Boom.conflict("User is already having a driver");
  }

  const { first_name, last_name, photo, price, parcel_types } = await validate(
    props,
    createSchema(db)
  );

  const driver = (await db
    .insert({ first_name, last_name, photo, price, user_id: userId })
    .into("drivers")
    .returning("*"))[0];

  const parcelTypes = await db
    .insert(parcel_types.map(p => ({ driver_id: driver.id, parcel_type: p })))
    .into("drivers_parcel_types")
    .returning("*");

  return {
    ...pick(["id", "first_name", "last_name", "photo", "price"], driver),
    parcel_types: parcelTypes.map(prop("parcel_type"))
  };
};

const createSchema = db =>
  yup.object().shape({
    first_name: yup.string().required("First name is required"),
    last_name: yup.string().required("Last name is required"),
    price: yup.number().required("Price is required"),
    parcel_types: yup
      .array()
      .test(
        "is-parcel-types",
        'Parcel types should contain these values - "small", "medium", "large"',
        async arr =>
          arr && difference(arr, ["small", "medium", "large"]).length === 0
      )
      .required("Parcel types is required"),
    photo: yup.string()
  });
