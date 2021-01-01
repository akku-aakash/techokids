import buildImg from "../../../images/philosophy/build.png";
import achivementImg from "../../../images/philosophy/achievement.png";
import React from "react";
import { Button } from "devextreme-react/button";
import { useHistory } from "react-router-dom";

const FreeCourse = () => {


  const history = useHistory();

  return (
    <>
      <div className="free__course">
        <h5>Free Course<br/> 3 Classes</h5>

        <div className="details">
          <div className="items">
            <div className="header">Build</div>
            <img src={buildImg} />
            <div>Puzzle, Game, Chatbot</div>
          </div>
          <div className="items">
            <div className="header">Outcome</div>
            <div>
              Students problem-solving ability and creatively is boosted
            </div>
          </div>
          <div className="items">
            <div className="header">Achievements</div>
            <img src={achivementImg} />
            <div>Certificate</div>
          </div>
          <div className="items free">
            <div className="free__text">FREE</div>
            <div className="price">
              <span>&#8377;</span>
              {"2000".toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
            </div>
            <Button className="freecoursebtn" onClick={()=>{history.push('/book-trial')}}>START NOW</Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default FreeCourse;
