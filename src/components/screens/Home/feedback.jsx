import fd1 from "../../../images/feedback/feedback1.png";
import fd2 from "../../../images/feedback/feedback2.png";
import Gallery from "devextreme-react/gallery";
import React, { useState } from "react";

const startedYoungData = [fd1, fd2];

const dynamicText = [ {parent:"Father",message:`My 2 boys have been on the programming course for the past
few months and i can say they have learnt a lot of new stuff
like using HTML and CSS to create a basic website which is
very impressive. The boys love Priya who is their Tutor as
she very friendly and knows how to get them interested in
the course. I will definately recomend Techokids for anyone
who wants to expose their Kids to programming.`,name:"Adeola Ajiboye"},{parent:"Mom",message:`My son recently joined the class and it’s helping him a lot
as during pandemic it was a tough time to learn from offline
mode. Techokids has helped him in his learning from home and
the support from the staff n all teachers is commendable.
Kudos to the team!`,name:"Patricia cassatt"}]

const FeedBack = () => {
  let mql = window.matchMedia("(max-width: 425px)");

  const [currentObj, setCurrentObj] = useState(dynamicText[0]);

  const onoption = (e) => {
    const { name, value } = e;
    if (name === "selectedIndex") {
      setCurrentObj(dynamicText[value]);
    }
  };

  return (
    <>
      <div className="feedback">
        <h5 className="title">What Parents Say About Techokids</h5>
        <div className="feedback__section">
          {!mql.matches ? (
            <>
              <div className="feedback_images">
                <div className="feeback_image">
                  <img src={fd1}></img>
                  <p className="message">
                    My 2 boys have been on the programming course for the past
                    few months and i can say they have learnt a lot of new stuff
                    like using HTML and CSS to create a basic website which is
                    very impressive. The boys love Priya who is their Tutor as
                    she very friendly and knows how to get them interested in
                    the course. I will definately recomend Techokids for anyone
                    who wants to expose their Kids to programming.
                  </p>
                </div>

                <div>Adeola Ajiboye </div>
                <span>Father</span>
              </div>
              <div className="feedback_images">
                <div className="feeback_image">
                  <img src={fd2}></img>
                  <p className="message">
                    My son recently joined the class and it’s helping him a lot
                    as during pandemic it was a tough time to learn from offline
                    mode. Techokids has helped him in his learning from home and
                    the support from the staff n all teachers is commendable.
                    Kudos to the team!
                  </p>
                </div>

                <div>Patricia cassatt</div>
                <span>Mom</span>
              </div>
            </>
          ) : (
            <div className="gallery__section">
              <Gallery
                id="gallery"
                slideshowDelay={4000}
                dataSource={startedYoungData}
                loop={true}
                showIndicator={true}
                onOptionChanged={onoption}
              />
              <div className="message__mobile">{currentObj.message}</div>
              <div className="parent__mobile">
                <div className="name" >{currentObj.name}</div>
                <span>{currentObj.parent}</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default FeedBack;
