import wLImg from "../../../images/why_learn.png";
import wLImg1 from "../../../images/learnwithus1.png";
import wLImg2 from "../../../images/learnwithus2.png";
import wLImg3 from "../../../images/learnwithus3.png";
import wLImg4 from "../../../images/learnwithus4.png";
import wLImg5 from "../../../images/learnwithus5.png";

import React, { useState } from "react";

const WhyLearnPage = () => {
  return (
    <>
      <div className="why__learn">
        <h5 className="title">Why learn with us?</h5>
        <p className="message">
          Kids learn fundamentals of coding – logic, structure, sequence and
          develop algorithmic thinking to generate creative outcomes
        </p>
        <div className="main__section">
          <img className="main_img" src={wLImg} />
          <div className="description">
            <div className="img__section">
              <img src={wLImg1}></img>
              <div>
                <h5>Live 1:1 Classes</h5>
                <p>
                  Create your own personalised schedule. <br />
                  All classes will be taught live 1:1
                </p>
              </div>
            </div>
            <div className="img__section">
              <img src={wLImg2}></img>
              <div>
                <h5>Expert Teachers</h5>
                <p>
                  Our teachers undergo extensive training
                  <br />
                  and have adequate experience.
                </p>
              </div>
            </div>
            <div className="img__section">
              <img src={wLImg3}></img>
              <div>
                <h5>Self Paced</h5>
                <p>
                  There is a dedicated teacher. The student is much
                  <br />
                  comfortable in asking doubts/questions.
                </p>
              </div>
            </div>
            <div className="img__section">
              <img src={wLImg4}></img>
              <div>
                <h5>Curriculum</h5>
                <p>
                  Our Specialized Curriculum designed by
                  <br />
                  world-class technical experts.
                </p>
              </div>
            </div>
            <div className="img__section">
              <img src={wLImg5}></img>
              <div>
                <h5>Live Project</h5>
                <p>
                  Kids will create live working projects from
                  <br />
                  the knowledge acquired by the course.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WhyLearnPage;
