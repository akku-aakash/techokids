import Footer from "./Footer";
import Header from "./Header";
import React, { useEffect, useRef, useState } from "react";
import Box, { Item } from "devextreme-react/box";
import { Link, RouteProps, useHistory, useLocation } from "react-router-dom";
import BookTrailPopup from "../common/Popup";
import stImg from "../../images/booknow.png";
import { Button } from "devextreme-react/button";
import Loader from "../common/Loader";

const Base = (props) => {
  const [showPopup, setPopup] = useState(false);

  const location = useLocation();

  const { pathname } = location;

  const [isSticky, setSticky] = useState(false);
  const ref = useRef(null);
  const handleScroll = () => {
    if (ref.current) {
      setSticky(ref.current.getBoundingClientRect().top <= -80);
    }
  };

  const history = useHistory();

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", () => handleScroll);
    };
  }, []);

  useEffect(() => {
    const unlisten = history.listen(() => {
      window.scrollTo(0, 0);
    });
    return () => {
      unlisten();
    };
  }, []);

  return (
    <div
      className={`root sticky-wrapper${isSticky ? " sticky" : ""}`}
      ref={ref}
    >
      {pathname !== "/book-trial" ? <Header issticky={isSticky} /> : ""}

      <div className="base">{props.children}</div>
      {pathname !== "/book-trial" ? (<div className="start_coding_today">
        <div className="start__today">
          <h5>Is your child ready <br/>for Future?</h5>
          <p>Start Coding Today!</p>
          <Link to="/book-trial" className="book_now_coding" target="_blank">
            Book now
          </Link>
        </div>
        <div className="img__section">
          <img src={stImg}></img>
        </div>
      </div>):""}
      {pathname !== "/book-trial" ? <Footer /> : ""}
    </div>
  );
};

export default Base;
