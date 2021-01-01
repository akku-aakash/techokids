import markImg from "../../../images/home_screen/mark.png";
import billImg from "../../../images/home_screen/bill.png";
import ellonImg from "../../../images/home_screen/ellon.png";
import messageImg from "../../../images/message.png";

import React, { useState } from "react";
import Gallery from "devextreme-react/gallery";

const startedYoungData = [billImg, markImg, ellonImg];

const quote = [
  "I think it's fair to say that personal computers have become the most empowering tool we've ever created. They're tools of communication, they're tools of creativity, and they can be shaped by their user.",
  "All of my friends who have younger siblings who are going to college or high school - my number one piece of advice is: You should learn how to program.",
  "I taught myself how to program computers when I was a kid, bought my first computer when I was 10, and sold my first commercial program when I was 12.",
];

const SucessFullCodersPage = () => {
  const [currentText, setCurrentText] = useState(quote[0]);
  const onoption = (e) => {
    const { name, value } = e;
    if (name === "selectedIndex") {
      setCurrentText(quote[value]);
    }
  };


  let mql = window.matchMedia("(max-width: 425px)");

  return (
    <>
      <div className="suceessfull__coders">
        <h5>Successful coders <br/> who started young</h5>
        <div className="details">
          <div className="message__section">
            <img src={messageImg}></img>
            <h5 className="text_message">{currentText}</h5>
          </div>

          <div className="gallery__section">
            <div className="name"></div>
            <Gallery
              id="gallery"
              slideshowDelay={4000}
              dataSource={startedYoungData}
              loop={true}
              showIndicator={true}
              onOptionChanged={onoption}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default SucessFullCodersPage;
