import React from "react";

interface props {
  savedValues: [savedValues, React.Dispatch<React.SetStateAction<savedValues>>];
  handleNext: () => void;
}

const StepOne: React.FC<props> = ({ savedValues, handleNext }) => {
  return (
    <div>
      <h1>stepOne</h1>
    </div>
  );
};
export default StepOne;
