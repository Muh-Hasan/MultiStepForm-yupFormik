import React from "react";

interface props {
  savedValues: [savedValues, React.Dispatch<React.SetStateAction<savedValues>>];
  handleNext: () => void;
  handleBack: () => void;
}

const StepTwo: React.FC<props> = ({ savedValues, handleNext, handleBack }) => {
  return (
    <div>
      <h1>StepTwo</h1>
    </div>
  );
};
export default StepTwo;
