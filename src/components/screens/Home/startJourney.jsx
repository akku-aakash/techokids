import mKImg from "../../../images/mobile_kid.png";

import BookTrailPopup from "../../common/Popup";
import React, { useState } from "react";
import { Button } from "devextreme-react/button";
import { Link } from "react-router-dom";

const StartJourneyPage = () => {
  const [showPopup, setPopup] = useState(false);

  let mql = window.matchMedia("(max-width: 425px)");

  return (
    <>
      <div className="start__Journey">
        <div className="mobile__kid">
          <img src={mKImg} />
        </div>
        <div className="start__young_section">
          <h5>Why coding is important for young minds?</h5>
          {!mql.matches ? (
            <p>
              Coding is just a set of instructions given to a computer to do
              what we want it to do. It is used to create games, websites, apps,
              etc. In today’s digital world, every single digital application or
              website we use runs on coding functionalities. Coding for kids has
              become very necessary in the 21st Century.
            </p>
          ) : (
            <p>
              Coding is another language. Language teaches children how to
              communicate and teaches logical thinking.
            </p>
          )}
          <Link to="/book-trial" className="startJourneybtn" target="_blank">
            Start Your Journey
          </Link>
          {/* <Button className="startJourneybtn" onClick={() => setPopup(true)}>
            
          </Button> */}
        </div>
      </div>
    </>
  );
};

export default StartJourneyPage;
