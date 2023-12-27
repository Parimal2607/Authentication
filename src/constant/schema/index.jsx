// Importing Yup for form validation
import * as Yup from "yup";
import {
  FIRST_NAME_MAX_CHARACTER,
  FIRST_NAME_MIN_CHARACTER,
  LAST_NAME_MAX_CHARACTER,
  LAST_NAME_MIN_CHARACTER,
  MOBILE_NUMBER_MIN_CHARACTER,
  PASSWORD_MIN_CHARACTER,
} from "../Contant";
import { validationMessages } from "../messages";
// Validation schema for user registration
export const RegisterSchema = Yup.object().shape({
  fname: Yup.string()
    .min(FIRST_NAME_MIN_CHARACTER, "Too Short!")
    .max(FIRST_NAME_MAX_CHARACTER, "Too Long!")
    .required(validationMessages.firstNameRequired),
  lname: Yup.string()
    .min(LAST_NAME_MIN_CHARACTER, "Too Short!")
    .max(LAST_NAME_MAX_CHARACTER, "Too Long!")
    .required(validationMessages.lastNameRequired),
  email: Yup.string()
    .email(validationMessages.emailValid)
    .required(validationMessages.emailRequired),
  mobile: Yup.string()
    .required("")
    .matches(/^(\+?\d{1,15})?$/, validationMessages.invalidMobile)
    .min(MOBILE_NUMBER_MIN_CHARACTER, validationMessages.mobileValid),
  password: Yup.string()
    .required(validationMessages.passwordRequired)
    .min(PASSWORD_MIN_CHARACTER, validationMessages.passwordMinCharacter)
    .matches(/[a-zA-Z]/, validationMessages.passwordValid),
  cpassword: Yup.string()
    .oneOf([Yup.ref("password"), null], validationMessages.confirmPasswordValid)
    .required(validationMessages.confirmPasswordRequired),
});

// Validation schema for user login
export const LoginSchema = Yup.object().shape({
  loginEmail: Yup.string()
    .email(validationMessages.emailValid)
    .required(validationMessages.emailRequired),
  loginPassword: Yup.string()
    .required(validationMessages.passwordRequired)
    .min(8, validationMessages.passwordMinCharacter)
    .matches(/[a-zA-Z]/, validationMessages.passwordValid),
});

// Validation schema for updating user password
export const UpdatePasswordSchema = Yup.object().shape({
  currentPassword: Yup.string().required(
    validationMessages.currentPasswordRequired
  ),
  newPassword: Yup.string()
    .min(8, validationMessages.passwordMinCharacter)
    .required(validationMessages.newPasswordRequired),
  confirmNewPassword: Yup.string()
    .oneOf(
      [Yup.ref("newPassword"), null],
      validationMessages.confirmPasswordValid
    )
    .required("Required"),
});

// Validation schema for updating user profile information
export const UpdateProfileSchema = Yup.object().shape({
  fname: Yup.string()
    .min(FIRST_NAME_MIN_CHARACTER, "Too Short!")
    .max(FIRST_NAME_MAX_CHARACTER, "Too Long!")
    .required(validationMessages.firstNameRequired),
  lname: Yup.string()
    .min(LAST_NAME_MIN_CHARACTER, "Too Short!")
    .max(LAST_NAME_MAX_CHARACTER, "Too Long!")
    .required(validationMessages.lastNameRequired),
  email: Yup.string()
    .email(validationMessages.emailValid)
    .required(validationMessages.emailRequired),
  mobile: Yup.string()
    .required("")
    .matches(/^(\+?\d{1,15})?$/, validationMessages.invalidMobile)
    .min(MOBILE_NUMBER_MIN_CHARACTER, validationMessages.mobileValid),
});
