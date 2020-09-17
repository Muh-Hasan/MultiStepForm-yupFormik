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
      borderColor: "grey",
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

const StepTwo: React.FC<props> = ({ savedValues, handleNext, handleBack }) => {
  const classes = useStyles();

  return (
    <Formik
      initialValues={{
        phoneNumber: savedValues[0].phoneNumber,
        cnicNo: savedValues[0].cnicNo,
        occupation: savedValues[0].occupation,
        city: savedValues[0].city,
      }}
      validationSchema={yup.object({
        phoneNumber: yup
          .string()
          .required("This field is required")
          .matches(
            /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/,
            "Number is not valid"
          ),
        CnicNo: yup
          .string()
          .required("This field is required")
          .min(14, "Phone number should not be more than 11 characters")
          .max(14, "Phone number should not be more than 11 characters"),
        city: yup.string().required("This field is required"),
        occupation: yup.string().required("This field is required"),
      })}
      onSubmit={(values) => {
        console.log(values)
        // savedValues[1]({
        //   ...savedValues[0],
        //   phoneNumber: values.phoneNumber,
        //   cnicNo: values.cnicNo,
        //   occupation: values.occupation,
        //   city: values.city,
        // });
        handleNext();
      }}
    >
      {(formik) => (
        <Form className={classes.wrapper}>
          <Field
            error={formik.errors.phoneNumber && formik.touched.phoneNumber}
            className={classes.fields}
            name="phoneNumber"
            as={TextField}
            label="Phone Number"
            helperText={<ErrorMessage name="phoneNumber" />}
          />
          <Field
            error={formik.errors.cnicNo && formik.touched.cnicNo}
            className={classes.fields}
            name="cnicNo"
            as={TextField}
            label="CNIC Number"
            helperText={<ErrorMessage name="cnicNo" />}
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
