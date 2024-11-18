import * as yup from "yup";
const FormSchema = yup.object({
  firstName: yup.string().required("first name is required"),
  lastName: yup.string().required("last name is required"),
  email: yup
    .string()
    .required("email  is required")
    .matches(/^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/, "email is not valid"),
  contactNumber: yup
    .string()
    .required("contact number is required")
    .min(6, "contact number must be at least 6 characters")
    .max(24, "contact number must be at most 24 characters"),
  Address1: yup.string().required("Address 1 is required"),
  Address2: yup.string().required("Address 2 is required"),
});

export default FormSchema;
