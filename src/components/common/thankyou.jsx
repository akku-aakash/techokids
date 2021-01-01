import React from "react";
import { LoadIndicator } from "devextreme-react/load-indicator";
import { connect } from "react-redux";
import { Player, ControlBar } from "video-react";

import thankyouAnimation from "../../videos/thank_you.mp4";
import animationBooking from "../../videos/book_trail.mp4";
const connector = connect((state) => {
  return {
    isLoading: state.isLoading > 0,
  };
});

const ThankYou = (props) => {
  return (
    <div className="thank__you">
      <Player autoPlay={true}>
        <ControlBar disableCompletely={true}></ControlBar>
        <source src={thankyouAnimation} />
      </Player>
    </div>
  );
};


export default connector(ThankYou);
