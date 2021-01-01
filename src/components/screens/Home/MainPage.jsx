import React, { useState } from "react";
import CorePhilosphyPage from "./CorePhilosophy";
import FeedBack from "./feedback";
import Home from "./HomeScreen";
import SpecializedCourses from "./specializedTitles";
import StartJourneyPage from "./startJourney";
import StepPage from "./Steps";
import SucessFullCodersPage from "./successfullCoders";
import WhyLearnPage from "./whyLearn";
import Curricullum from "./curricullum";
import rsImg from "../../../images/registeredStudents.png";
import ccImg from "../../../images/classesConducted.png";
import refundImg from "../../../images/Refund.png";
import FreeCourse from "./FreeCourse";
import BroughtToYou from "./BroughtToYou";
import Base from "../../base/Base";

const MainScreen = () => {
  let mql = window.matchMedia("(max-width: 425px)");

  return (
    <Base>
      <div className="main__screen">
        <Home />
        <SpecializedCourses />
        <StartJourneyPage />
        <CorePhilosphyPage />
        <Curricullum />
        {/* <FreeCourse /> */}
        {!mql.matches ? (
          <div className="refund__policy">
            <img src={refundImg}></img>
            <span>100% refund on unused classes if you’re not satisfied.</span>
          </div>
        ) : (
          ""
        )}
        <SucessFullCodersPage />
        <WhyLearnPage />
        <StepPage />
        <FeedBack />
        <BroughtToYou />
        <div className="registered tabs">
          <div className="student__section">
            <img src={rsImg} />
            <div className="students__count">
              <h5>5,000+</h5>
              <div className="text">Registered Students</div>
            </div>
          </div>
          <div className="classes_section">
            <img src={ccImg} />
            <div className="classes__count">
              <h5>60,000+</h5>
              <div className="text">Classes Conducted</div>
            </div>
          </div>
        </div>
      </div>
    </Base>
  );
};

export default MainScreen;
