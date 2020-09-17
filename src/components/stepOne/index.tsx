import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as yup from "yup";
import { savedValues } from "../index";
import TextField from "@material-ui/core/TextField";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";

interface props {
  savedValues: [savedValues, React.Dispatch<React.SetStateAction<savedValues>>];
  handleNext: () => void;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    wrapper: {
      display: "flex",
      flexDirection: "column",
      flexWrap: "wrap",
      width: "40vh",
      margin: "0 auto",
      padding: "4vh",
      borderStyle: "solid",
      borderColor: "grey",
    },
    fields: {
      marginBottom: "2vh",
    },
    button: {
      backgroundColor: "black",
      width: "10vh",
      fontSize: "2vh",
      color: "white",
      margin: "0 auto",
      marginTop: "3vh",

      "&:hover": {
        backgroundColor: "darkGrey",
      },
    },
  })
);

const StepOne: React.FC<props> = ({ savedValues, handleNext }) => {
  const classes = useStyles();
  return (
    <Formik
      initialValues={{
        firstName: savedValues[0].firstName,
        lastName: savedValues[0].lastName,
        email: savedValues[0].email,
      }}
      validationSchema={yup.object({
        firstName: yup
          .string()
          .required("This field is required")
          .max(20, "Name should not be more than 20 characters"),
        lastName: yup
          .string()
          .required("This field is required")
          .max(20, "Name should not be more than 20 characters"),
        email: yup
          .string()
          .email("Invalid email address")
          .required("This field is required"),
      })}
      onSubmit={(values) => {
        savedValues[1]({
          ...savedValues[0],
          firstName: values.firstName,
          lastName: values.lastName,
          email: values.email,
        });
        handleNext();
      }}
    >
      {(formik) => {
        console.log(formik.errors.lastName);
        return (
          <Form className={classes.wrapper} autoComplete="off">
            <Field
              error={formik.errors.firstName && formik.touched.firstName}
              className={classes.fields}
              name="firstName"
              as={TextField}
              label="First Name"
              helperText={<ErrorMessage name="firstName" />}
            />
            <Field
              error={formik.errors.lastName && formik.touched.lastName}
              className={classes.fields}
              name="lastName"
              as={TextField}
              label="Last Name"
              helperText={<ErrorMessage name="lastName" />}
            />
            <Field
              error={formik.errors.email && formik.touched.email}
              className={classes.fields}
              name="email"
              as={TextField}
              label="Email"
              helperText={<ErrorMessage name="email" />}
            />
            <button className={classes.button} type="submit">
              Next
            </button>
          </Form>
        );
      }}
    </Formik>
  );
};

export default StepOne;
