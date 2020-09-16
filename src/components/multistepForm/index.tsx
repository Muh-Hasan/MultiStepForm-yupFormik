import React , { useState } from "react";
import * as yup from "yup";
import { Formik, Form, Field, FormikValues , FormikConfig } from "formik";
import { TextField, Checkbox, FormControlLabel, Button } from "@material-ui/core";

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

interface Value{
    firstName: string,
    lastName: string,
    phoneNumber: number,
    CnicNo: number,
    agreeTrems: boolean,
    city: string,
    occupation: string,
    email: string,

}
let initialValues:Value ={
    firstName: "",
    lastName: "",
    phoneNumber: 0,
    CnicNo: 0,
    agreeTrems: false,
    city: "",
    occupation: "",
    email: "",
  }

export function MultiForm() {
  
  return (
    <div>
      <FormStepper
        initialValues={initialValues}
        validationSchema={schema}
        onSubmit={() => {}}
      >
        {/* {({ }) => ( */}
        {/* //   <Form autoComplete="off">  */}
            <div>
              <div>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
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
            <Field
              name="firstName"
              as={TextField}
              label="First Name"
            //   error={!!errors.firstName && touched.firstName}
            //   helperText={
                // errors.firstName && touched.firstName ? errors.firstName : null
            //   }
            />
            <Field
              name="lastName"
              as={TextField}
              label="Last Name"
            //   error={!!errors.lastName && touched.lastName}
            //   helperText={
                // errors.lastName && touched.lastName ? errors.lastName : null
            //   }
            />
            <Field
              name="email"
              as={TextField}
              label="Email"
            //   error={!!errors.email && touched.email}
            //   helperText={errors.email && touched.email ? errors.email : null}
            />
            <Field
              name="phoneNumber"
              as={TextField}
              label="Phone Number"
            //   error={!!errors.phoneNumber && touched.phoneNumber}
            //   helperText={
                // errors.phoneNumber && touched.phoneNumber
                //   ? errors.phoneNumber
                //   : null
            //   }
            />
            <div>
            <Field
              name="CnicNo"
              as={TextField}
              label="CNIC Number"
            //   error={!!errors.CnicNo && touched.CnicNo}
            //   helperText={
                // errors.CnicNo && touched.CnicNo ? errors.CnicNo : null
            //   }
            />
            <Field
              name="occupation"
              as={TextField}
              label="Occupation"
            //   error={!!errors.occupation && touched.occupation}
            //   helperText={errors.occupation && touched.occupation ? errors.occupation : null}
            />
            <Field
              name="city"
              as={TextField}
              label="City"
            //   error={!!errors.city && touched.city}
            //   helperText={
            //     errors.city && touched.city
            //       ? errors.city
            //       : null
            //   }
            />  
            </div>
          {/* </Form> */}
         {/* )}  */}
      </FormStepper>
    </div>
  );
}

export default function FormStepper({children ,...props} : FormikConfig<FormikValues>){
    console.log(props);
    
    const childrenArray = React.Children.toArray(children)
    const [step , setStep] = useState(0)
    const currentChild = childrenArray[step]
    return(
        <Formik
        {...props}
        onSubmit={async (values , helpers) => {
            if(step === childrenArray.length - 1){
                await props.onSubmit(values ,helpers)
            }else{
                setStep(s => s + 1)
            }
        }}
      >
        {({ errors, touched }) => (
          <Form autoComplete="off">
              {currentChild}
        <div>
        {step > 0 ? <Button onClick={() => setStep(s => s - 1)}>Back</Button> : null}
        <Button type='submit' >{ step === childrenArray.length - 1 ?  'Submit' : 'Next'}</Button>
        </div>
          </Form>
        )} 
       </Formik>   
    )
}