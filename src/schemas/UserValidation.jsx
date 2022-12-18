import * as yup from "yup";

const registerSchema = yup.object().shape({
  name: yup.string().min(3).max(25).required("Name is required..."),
  email: yup.string().email().required("Email address is required..."),
  password: yup.string().min(8).max(20).required("Password is required..."),
  gender: yup.string().required("Gender is required..."),
});

const loginSchema = yup.object().shape({
  email: yup.string().email().required("Email address is required..."),
  password: yup.string().min(8).max(20).required("Password is required..."),
});

export default registerSchema;
export { loginSchema };
