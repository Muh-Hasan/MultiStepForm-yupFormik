import React, { useState } from "react";
import * as yup from "yup";
import { Formik, Form, Field, FormikValues, FormikConfig } from "formik";
import { Checkbox, FormControlLabel } from "@material-ui/core";
import Container from "@material-ui/core/Container";
import CssBaseline from "@material-ui/core/CssBaseline";
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));


let schema = yup.object({
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
});

interface Value {
  firstName: string;
  lastName: string;
  phoneNumber: number;
  CnicNo: number;
  agreeTrems: boolean;
  city: string;
  occupation: string;
  email: string;
}
let initialValues: Value = {
  firstName: "",
  lastName: "",
  phoneNumber: 0,
  CnicNo: 0,
  agreeTrems: false,
  city: "",
  occupation: "",
  email: "",
};

export default function StepOne() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <CssBaseline />
      <Container>
        <Formik
          initialValues={initialValues}
          validationSchema={schema}
          onSubmit={() => {}}
        >
          {({ errors, touched }) => (
            <Form>
              <div>
                <div>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book. It has survived not only five centuries,
                    but also the leap into electronic typesetting, remaining
                    essentially unchanged. It was popularised in the 1960s with
                    the release of Letraset sheets containing Lorem Ipsum
                    passages, and more recently with desktop publishing software
                    like Aldus PageMaker including versions of Lorem Ipsum.
                  </p>
                </div>
                <div>
                  <FormControlLabel
                    control={
                      <Field as={Checkbox} type="checkbox" name="agreeTrems" />
                    }
                    label="I accept Terms and condtion"
                  />
                </div>
              </div>
            </Form>
          )}
        </Formik>
      </Container>
    </div>
  );
}
