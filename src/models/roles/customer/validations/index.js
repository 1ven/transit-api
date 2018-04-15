import * as yup from "yup";

export const create = db =>
  yup.object().shape({
    first_name: yup.string().required("First name is required"),
    last_name: yup.string().required("Last name is required")
  });
