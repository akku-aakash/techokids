import {
  Button,
  TextBox,
  Validator
} from "devextreme-react";
import {
  PatternRule,
  RequiredRule,
} from "devextreme-react/form";
import HomeImg from "../../../images/home_screen.png";
import homeBG from "../../../images/home_screen/home_background.png";
import homeBGMobile from "../../../images/home_screen/Bg.png";
import React, { createRef, useEffect, useState } from "react";
import { updateForm } from "../../../store/register/action";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import { countries } from "../../../utils/countries";

const HomeScreen = ({ updateBookingDetails, bookingDetails }) => {
  const [showPopup, setPopup] = useState(false);

  const [showDropdown, setdropdown] = useState(false);

  const multiSelectRef = createRef();

  const history = useHistory();

  const { parentNumber,parentCountryCode } = bookingDetails;

  const updateBooking = (e) => {
    const {
      element: { id },
    } = e;
    let tele = e.event && e.event.target.value;
    updateBookingDetails(id, tele);
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        multiSelectRef.current &&
        !multiSelectRef.current.contains(e.target)
      ) {
        setdropdown(false)
      }
    };
    document.addEventListener("mousedown", handleClickOutside);

    document.title = "Best Live Online Coding Classes For Kids | TechoKids";
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [multiSelectRef]);

  const onBooking = (e) => {
    e.preventDefault();
    history.push("/book-trial");
  };

  let mql = window.matchMedia("(max-width: 425px)");



  return (
    <>
      <form onSubmit={onBooking}>
        <div className="home__screen_page">
          <div className="homeimg__div">
            <img
              className="home__screen"
              src={mql.matches ? homeBGMobile : homeBG}
            ></img>

            <div className="home__div">
              <div className="home_details">
                <div className="details">
                  <h2>
                      Live Coding Classes <br />
                      for Grade 1-12
                  </h2>
                  <p className="title">
                    Become the Next Generation Techpreneur
                  </p>

                  <div className="percentage__section">
                    <div className="teacher_percentage">Age 6-18</div>
                    <div className="home__message">Top 1% Teacher</div>
                  </div>
                </div>
                <div className="message">Book a Free Trial Class</div>
                <div className="book__freeTrail">
                  <div
                    ref={multiSelectRef}
                    className="countries_dropdown"
                    onClick={() => setdropdown(!showDropdown)}
                  >
                    <img
                      className="flag"
                      src={parentCountryCode && parentCountryCode.flag}
                    ></img>

                    <div
                      className={`dropdown_menu ${
                        showDropdown ? "show" : "hide"
                      }`}
                    >
                      {countries.map((country) => {
                        return (
                          <div
                            className="menu__item"
                            onClick={() =>
                              updateBooking({
                                element: {
                                  id: "parentCountryCode",
                                },
                                event: {
                                  target: {
                                    value: country,
                                  },
                                },
                              })
                            }
                          >
                            <img className="flag_menu" src={country.flag}></img>
                            <div className="name">{country.name}</div>
                            <div className="code">{country.code}</div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                  <div className="country__code">{parentCountryCode.code}</div>
                  <TextBox
                    id="parentNumber"
                    maxLength="10"
                    value={parentNumber}
                    onChange={updateBooking}
                  >
                    <Validator>
                      <PatternRule
                        message="Not a valid number"
                        pattern={/^[0-9]+$/}
                      />
                      <RequiredRule message="Parent's Contact is required" />
                    </Validator>
                  </TextBox>

                  <Button useSubmitBehavior={true} className={`book_now `}>
                    Book now
                  </Button>
                </div>
              </div>

              <div className="intro__image">
                <img src={HomeImg}></img>
              </div>
            </div>
          </div>
        </div>
      </form>
    </>
  );
};

const connector = connect(
  (state) => {
    return {
      bookingDetails: state.user.details,
    };
  },
  (dispatch) => ({
    updateBookingDetails: (id, value) => {
      dispatch(updateForm(id, value));
    },
  })
);

export default connector(HomeScreen);
