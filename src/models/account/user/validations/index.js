import * as yup from "yup";
import isEmailUnique from "../isEmailUnique";

export const signUp = db =>
  yup.object().shape({
    email: yup
      .string()
      .email("Incorrect email format")
      .test("unique-email", "Email already exists", async email =>
        isEmailUnique(email, db)
      )
      .required("Email is required"),
    password: yup
      .string()
      .min(8, "Password should be at least 8 digits")
      .required("Password is required"),
    confirmation: yup
      .string()
      .oneOf([yup.ref("password")], "Passwords are not matching")
      .required("Password confirmation is required"),
    role: yup
      .string()
      .oneOf(["driver", "customer"], "Role should be either driver or customer")
      .required("Role is required")
  });
