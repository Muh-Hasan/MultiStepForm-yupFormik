import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import StepOne from './stepOne/index'
import StepTwo from './stepTwo/index'
import FinalStep from './finalStep/index'


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
  wrapper: {
    textAlign: "center"
  },
  mainHeading: {
    fontSize: "5vh",
    textShadow : "5px 10px 10px grey",
    marginBottom:"8vh"
  },
  formWrapper:{
  display: "flex",
  flexDirection: "column",
  flexWrap: "wrap",
  margin: "0 auto",
  padding: "3vh"
  },
 
  }),
);

export interface savedValues {
  firstName: string,
  lastName: string,
  email: string,
  phoneNumber: number,
  city: string
  occupation: string,
  cnicNo: number,

}

function getSteps() {
  return ['User Information', 'Personal Details', 'Review your Information'];
}


export default function MultiStep() {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const steps = getSteps();

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };


  
  const savedValues = React.useState({firstName:'', lastName: '', email: '', phone: '', city: '', area: '', package: "5 Mbps", amount: 0})
  console.log(savedValues[0]);


  function getStepContent(stepIndex: number) {
    switch (stepIndex) {
      case 0:
        return <StepOne savedValues = {savedValues} handleNext = {handleNext}></StepOne>
      case 1:
        return <StepTwo savedValues = {savedValues} handleNext = {handleNext} handleBack = {handleBack} ></StepTwo>
      case 2:
        return <FinalStep savedValues = {savedValues} handleBack = {handleBack} ></FinalStep>
      default:
        return 'ERROR';
    }
  }



  return (
    <div className ={classes.wrapper} >
      <h1 className = {classes.mainHeading}>Buy an Internet Plan</h1>

      <Stepper activeStep={activeStep} alternativeLabel>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
    
      <div  className = {classes.formWrapper} >
        
          <div>
            {getStepContent(activeStep)}
          </div>
      </div>
     
    </div>
  
  );
}
