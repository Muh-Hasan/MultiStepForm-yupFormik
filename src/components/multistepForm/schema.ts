import * as yup from "yup";

export const schema = yup.object({
    firstName: yup
      .string()
      .required("This field is required")
      .max(20, "Name should not be more than 20 characters"),
    lastName: yup
      .string()
      .required("This field is required")
      .max(20, "Name should not be more than 20 characters"),
    phoneNumber: yup
      .number()
      .required("This field is required")
      .min(11, "Phone number should not be more than 11 characters")
      .max(11, "Phone number should not be more than 11 characters"),
    CnicNo: yup
      .number()
      .required("This field is required")
      .min(14, "Phone number should not be more than 11 characters")
      .max(14, "Phone number should not be more than 11 characters"),
    city: yup.string().required("This field is required"),
    occupation: yup.string().required("This field is required"),
    email: yup
      .string()
      .email("Invalid email address")
      .required("This field is required"),
  });