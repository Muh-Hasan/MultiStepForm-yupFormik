import React from "react";

interface props {
  savedValues: [savedValues, React.Dispatch<React.SetStateAction<savedValues>>];
  handleBack: () => void;
}

const FinalStep = ({ savedValues, handleBack }) => {
  return (
    <div>
      <h1>FinalStep</h1>
    </div>
  );
};
export default FinalStep;
