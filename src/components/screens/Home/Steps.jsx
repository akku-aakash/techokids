import stepImg from "../../../images/steps.png";


import React, { useState } from "react";

const StepPage = () => {
  return (
    <>
      <div className="steps">
        <h5 className="title">How to start your coding journey</h5>
        <img src={stepImg}></img>
      </div>
    </>
  );
};

export default StepPage;
