import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as yup from "yup";
import { savedValues } from "../index";
import TextField from "@material-ui/core/TextField";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";

interface props {
  savedValues: [savedValues, React.Dispatch<React.SetStateAction<savedValues>>];
  handleNext: () => void;
  handleBack: () => void;
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
    },
    innerWrapper: {
      margin: "0 auto",
    },

    buttonsWrapper: {
      display: "flex",
      flexDirection: "row",
      marginRight: "2vh",
      marginLeft: "2vh",
    },

    fields: {
      marginBottom: "2vh",
    },
    buttons: {
      backgroundColor: "black",
      width: "100px",
      fontSize: "14px",
      color: "white",
      margin: "0 auto",
      marginTop: "3vh",
      height: "30px",
      letterSpacing: "2px",
      fontWeight: 500,
      border: "none",
      textTransform: "uppercase",
      cursor: "pointer",
    },
  })
);

const StepTwo: React.FC<props> = ({ savedValues, handleNext, handleBack }) => {
  const classes = useStyles();

  return (
    <Formik
      initialValues={{
        phoneNumber: savedValues[0].phoneNumber,
        occupation: savedValues[0].occupation,
        city: savedValues[0].city,
      }}
      validationSchema={yup.object({
        phoneNumber: yup
          .string()
          .required("This field is required")
          .max(11, "Phone number should not be more than 11 characters"),
        city: yup.string().required("This field is required"),
        occupation: yup.string().required("This field is required"),
      })}
      onSubmit={(values) => {
        console.log(values);
        savedValues[1]({
          ...savedValues[0],
          phoneNumber: values.phoneNumber,
          occupation: values.occupation,
          city: values.city,
        });
        handleNext();
      }}
    >
      {(formik) => (
        <Form className={classes.wrapper} autoComplete="off">
          <Field
            error={formik.errors.phoneNumber && formik.touched.phoneNumber}
            className={classes.fields}
            name="phoneNumber"
            as={TextField}
            label="Phone Number"
            helperText={<ErrorMessage name="phoneNumber" />}
          />
          <Field
            error={formik.errors.occupation && formik.touched.occupation}
            className={classes.fields}
            name="occupation"
            as={TextField}
            label="Occupation"
            helperText={<ErrorMessage name="occupation" />}
          />
          <Field
            error={formik.errors.city && formik.touched.city}
            className={classes.fields}
            name="city"
            as={TextField}
            label="City"
            helperText={<ErrorMessage name="city" />}
          />
          <div className={classes.buttonsWrapper}>
            <button
              className={classes.buttons}
              type="button"
              onClick={handleBack}
            >
              Back
            </button>

            <button className={classes.buttons} type="submit">
              Next
            </button>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default StepTwo;
