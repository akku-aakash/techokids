import amazonImg from "../../../images/university/Amazon.png";
import googleImg from "../../../images/university/Google.png";
import IIMImg from "../../../images/university/IIM.png";
import IIMBomImg from "../../../images/university/IIT_Bom.png";
import MITImg from "../../../images/university/MIT.png";
import MSUImg from "../../../images/university/MSU.png";
import IITRoorkeeImg from "../../../images/university/IIT_Roorkee.png";
import IITMadImg from "../../../images/university/IIT_Madras.png";
import React from "react";

const BroughtToYou = () => {
  return (
    <>
      <div className="brought__you">
        <h1>Brought to you by experience Team from</h1>
        <div className="university_section">
          <div className="university">
            <img src={googleImg}></img>
          </div>
          <div className="university">
            <img src={amazonImg}></img>
          </div>
          <div className="university">
            <img src={MITImg}></img>
          </div>
          <div className="university">
            <img src={IITMadImg}></img>
          </div>
          <div className="university">
            <img src={IITRoorkeeImg}></img>
          </div>

          <div className="university">
            <img src={IIMImg}></img>
          </div>
          <div className="university">
            <img src={IIMBomImg}></img>
          </div>
          <div className="university">
            <img src={MSUImg}></img>
          </div>
        </div>
      </div>
    </>
  );
};

export default BroughtToYou;
