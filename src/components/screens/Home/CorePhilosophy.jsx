import collaborationImg from "../../../images/philosophy/collaboration.png";
import AlgImg from "../../../images/philosophy/alogorithm.png";
import bulbImg from "../../../images/philosophy/problemsolving.png";
import DsImg from "../../../images/philosophy/DesignSkills.png";
import LRImg from "../../../images/philosophy/LogicalReasoning.png";
import practicalImg from "../../../images/philosophy/practical.png";
import React from "react";

const CorePhilosphyPage = () => {
  return (
    <>
      <div className="core__philosophy">
        <h5>
          Nurturing Original Thinking Is
          <div>Our Core Philosophy Your Child Will Develop</div>
        </h5>

        <div className="philosphy__items">
          <div className="item">
            <img src={AlgImg} />
            <div>Algorithm thinking</div>
          </div>
          <div className="item">
            <img src={LRImg} />
            <div>Logical Reasoning</div>
          </div>
          <div className="item">
            <img src={DsImg} />
            <div>Design skills</div>
          </div>
          <div className="item">
            <img src={bulbImg} />
            <div>Problem Solving Skills</div>
          </div>
          <div className="item">
            <img src={practicalImg} />
            <div>Pratically Experience</div>
          </div>
          <div className="item">
            <img src={collaborationImg} />
            <div>Collaboration</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CorePhilosphyPage;
