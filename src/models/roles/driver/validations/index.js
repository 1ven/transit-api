import * as yup from "yup";
import { difference } from "ramda";

export const create = db =>
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
