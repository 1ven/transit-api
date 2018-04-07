import { prop, propEq } from "ramda";
import { pluckIf } from "core/packages/fp";

export default async db => {
  const drivers = await db.select("*").from("drivers");
  const parcelTypes = await getDriversParcelTypes(drivers, db);

  return drivers.map(d => ({
    ...d,
    parcel_types: pluckIf(propEq("driver_id", d.id), "parcel_type", parcelTypes)
  }));
};

const getDriversParcelTypes = async (drivers, db) =>
  await db
    .select("*")
    .from("drivers_parcel_types")
    .whereIn("driver_id", drivers.map(prop("id")));
