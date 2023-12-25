import * as Yup from 'yup';

export const RegisterSchema = Yup.object().shape({
  fname: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  lname: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  mobile: Yup.string()
    .matches(/^(\+?\d{1,15})?$/, "Invalid mobile number")
    .min(10, "Too Short! Must be at least 10 digits"),
  password: Yup.string()
    .required("No password provided.")
    .min(8, "Password is too short - should be 8 chars minimum.")
    .matches(/[a-zA-Z]/, "Password can only contain Latin letters."),
  cpassword: Yup.string()
    .oneOf([Yup.ref('password'), null], 'Passwords must match')
    .required('Please confirm your password'),
});

export const LoginSchema = Yup.object().shape({
  loginEmail: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  loginPassword: Yup.string()
    .required("No password provided.")
    .min(8, "Password is too short - should be 8 chars minimum.")
    .matches(/[a-zA-Z]/, "Password can only contain Latin letters."),
});

export const UpdatePasswordSchema = Yup.object().shape({
  currentPassword: Yup.string().required("Required"),
  newPassword: Yup.string().min(8, "Must be at least 8 characters").required("Required"),
  confirmNewPassword: Yup.string().oneOf([Yup.ref("newPassword"), null], "Passwords must match").required("Required"),
});
export const UpdateProfileSchema = Yup.object().shape({
  fname: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  lname: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  mobile: Yup.string()
    .matches(/^(\+?\d{1,15})?$/, "Invalid mobile number")
    .min(10, "Too Short! Must be at least 10 digits"),
  
});
