import React from "react";
import * as yup from "yup";
import { Formik, Form, Field } from "formik";

export function MultiForm() {
  let schema = yup.object({
    firstName: yup
      .string()
      .required("This field is required")
      .max(20, "Name should not be more than 20 characters"),
    lastName: yup
      .string()
      .required("This field is required")
      .max(20, "Name should not be more than 20 characters"),
    address: yup
      .string()
      .required("This field is required")
      .max(100, "Address should not be more than 100 characters"),
    phoneNumber: yup
      .number()
      .required("This field is required")
      .min(11, "Phone number should not be more than 11 characters")
      .max(11, "Phone number should not be more than 11 characters"),
    CnicNo: yup
      .number()
      .required("This field is required")
      .min(11, "Phone number should not be more than 11 characters")
      .max(11, "Phone number should not be more than 11 characters"),
    city: yup.string().required("This field is required"),
    occupation: yup.string().required("This field is required"),
    email: yup
      .string()
      .email("Invalid email address")
      .required("This field is required"),
  });
  return (
    <div>
      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          address: "",
          phoneNumber: "",
          CnicNo: "",
          agreeTrems: false,
          city: "",
          occupation: "",
          email: "",
        }}
        onSubmit={() => {}}
      >
        <Form autoComplete="off"></Form>
      </Formik>
    </div>
  );
}
