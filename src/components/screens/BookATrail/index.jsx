import React, { createRef, useEffect, useState } from "react";
import { RadioGroup, SelectBox, TextBox, Validator } from "devextreme-react";
import bTImg1 from "../../../images/bookatrail/diploma.png";
import bTImg2 from "../../../images/bookatrail/smart-home.png";
import bTImg3 from "../../../images/bookatrail/customer-service.png";
import bTImg4 from "../../../images/bookatrail/team.png";
import bTBg from "../../../images/bookatrail_bg.png";
import { Button } from "devextreme-react/button";
import {
  EmailRule,
  RequiredRule,
  PatternRule,
} from "devextreme-react/validator";
import Axios from "axios";
import { updateForm } from "../../../store/register/action";
import { connect } from "react-redux";
import { beginAjaxCall, endAjaxCall } from "../../../store/loading/action";
import Verify from "../../common/verify";
import { Player, ControlBar } from "video-react";
import animationBooking from "../../../videos/book_trail.mp4";
import axiosInstance from "../../../utils/interceptors";
import notify from "devextreme/ui/notify";
import logo from "../../../images/logo.png";
import { useHistory } from "react-router-dom";
import { countries } from "../../../utils/countries";

const hasLaptopItems = [
  { id: true, value: "Yes" },
  { value: "No", id: false },
];

const BOOKATRAIL = ({ bookingDetails, updateForm, beginAjax, endAjax }) => {
  const [verify, setVerify] = useState(false);

  const [showDropdown, setdropdown] = useState(false);

  const [token, settoken] = useState("");

  const multiSelectRef = createRef();

  const history = useHistory();

  const studentGrades = [];
  for (let i = 1; i <= 12; i++) {
    studentGrades.push({
      gradeName: i,
      gradeValue: `${i}`,
    });
  }

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        multiSelectRef.current &&
        !multiSelectRef.current.contains(e.target)
      ) {
        setdropdown(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [multiSelectRef]);

  const updateBookingDetails = (e, gradeValue) => {
    let value, id;
    if (e.target && e.target.id === "studentGrade") {
      value = gradeValue;
      id = e.target.id;
    } else if (
      (e.event.target && e.element.id === "parentNumber") ||
      e.element.id === "parentCountryCode"
    ) {
      id = e.element.id;
      value = e.event.target.value;
    } else {
      id = e.element.id;
      value = e.value;
    }

    updateForm(id, value);
  };

  const {
    parentName,
    email,
    studentName,
    hasLaptop,
    parentNumber,
    parentCountryCode,
    studentGrade,
  } = bookingDetails;

  const onBooking = (e) => {
    try {
      e.preventDefault();
      let modifiedBookingDetails = {
        ...bookingDetails,
        parentPhone: {
          number: parentNumber,
          countryCode: parentCountryCode,
        },
      };
      e.preventDefault();
      beginAjax();
      console.log("Modified Book", modifiedBookingDetails);

      const finalPayload = {
        name: modifiedBookingDetails.studentName,
        parentName: modifiedBookingDetails.parentName,
        parentPhone: {
          countryCode: modifiedBookingDetails.parentPhone.countryCode.code,
          number: modifiedBookingDetails.parentPhone.number,
        },
        hasLaptop: modifiedBookingDetails.hasLaptop,
        grade: modifiedBookingDetails.studentGrade,
        email: modifiedBookingDetails.email,
        role: "student",
      };

      

      axiosInstance
        .post("https://techokids.herokuapp.com/register/new ", finalPayload)
        .then((res) => {
          const {
            status,
            data: { message, token },
          } = res;
          if (status === 200) {
            endAjax();
            notify({ type: "success", message: message });
            settoken(token);
            localStorage.setItem("token", token);
            setVerify(true);
          } else {
            endAjax();
            notify({ type: "error", message: message });
          }
        });
    } catch (ex) {
      throw ex;
    }
  };

  let mql = window.matchMedia("(max-width: 425px)");
  document.title = "Book A Free Coding Demo Class Today | TechoKids";
  return (
    <>
      <form onSubmit={onBooking}>
        <div className="book_trail__route">
          <div className="logo">
            <img src={logo} onClick={() => history.push("/")}></img>
          </div>
          <div className="bookatrail__popover">
            <h5>Book your FREE Trial Class</h5>
            <div className="bookatrail__body">
              {!mql.matches ? (
                <div className="bookatrail__animation">
                  <Player autoPlay={true} style={{ backgorundColor: "#fff" }}>
                    <ControlBar disableCompletely={true}></ControlBar>
                    <source src={animationBooking} />
                  </Player>
                </div>
              ) : (
                ""
              )}

              <div className="details_section">
                <div className="booking_details">
                  <div className="field__value">
                    <div className="label">Parent’s Name*</div>
                    <TextBox
                      className="parent_Name"
                      id="parentName"
                      placeholder="Enter Parent's Name"
                      value={parentName}
                      onValueChanged={updateBookingDetails}
                    >
                      <Validator>
                        <RequiredRule message="Parent Name is required" />
                      </Validator>
                    </TextBox>
                  </div>
                  <div className="field__value">
                    <div className="label">Parent’s Email Id*</div>{" "}
                    <TextBox
                      id="email"
                      placeholder="Enter Parent's Email Id"
                      value={email}
                      onValueChanged={updateBookingDetails}
                    >
                      <Validator>
                        <RequiredRule message="Parent's Email is required" />
                        <EmailRule message="Parent's Email is invalid" />
                      </Validator>
                    </TextBox>
                  </div>
                  <div className="field__value">
                    <div className="label">Parent’s Contact*</div>
                    <div className="contact__div">
                      <div
                        ref={multiSelectRef}
                        className="countries_dropdown"
                        onClick={() => setdropdown(!showDropdown)}
                      >
                        <img
                          className="flag"
                          src={parentCountryCode && parentCountryCode.flag}
                        ></img>

                        <div>{parentCountryCode.code}</div>

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
                                  updateBookingDetails({
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
                                <img
                                  className="flag_menu"
                                  src={country.flag}
                                ></img>
                                <div className="name">{country.name}</div>
                                <div className="code">{country.code}</div>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                      <TextBox
                        id="parentNumber"
                        placeholder="Enter Parent's Contact"
                        value={parentNumber}
                        onChange={updateBookingDetails}
                        maxLength="10"
                      >
                        <Validator>
                          <RequiredRule message="Parent's Contact is required" />
                        </Validator>
                      </TextBox>
                    </div>
                    <div className="field__value">
                      <div className="label">Student Name*</div>
                      <TextBox
                        id="studentName"
                        placeholder="Enter Student Name"
                        value={studentName}
                        onValueChanged={updateBookingDetails}
                      >
                        {" "}
                        <Validator>
                          <RequiredRule message="Student Name is required" />
                        </Validator>
                      </TextBox>
                    </div>
                  </div>
                  <div className="field__value">
                    <div className="label">Student grade*</div>
                    <div className="students__grades">
                      {studentGrades.map((grade) => {
                        const { gradeValue } = grade;
                        return (
                          <div
                            id="studentGrade"
                            className={`grade ${
                              gradeValue === studentGrade ? "selected" : ""
                            }`}
                            onClick={(e) => updateBookingDetails(e, gradeValue)}
                          >
                            {`${grade.gradeValue}`}
                            <span>th</span>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
                <div className="laptop__section">
                  <div className="have__laptop">
                    <p className="label">
                      Do you have laptop/PC at home for class?
                    </p>
                    <RadioGroup
                      id="hasLaptop"
                      displayExpr="value"
                      valueExpr="id"
                      value={hasLaptop}
                      defaultValue={hasLaptopItems[0].id}
                      items={hasLaptopItems}
                      layout="horizontal"
                      onValueChanged={updateBookingDetails}
                    />
                  </div>
                  <p>Hurry, Last few Slots Left</p>
                  <Button
                    useSubmitBehavior={true}
                    className="schedule_button"
                    type="success"
                  >
                    SCHEDULE A FREE CLASS!
                  </Button>

                  <p>
                    By scheduling a free class, you agree to our Terms of Use
                    and our Privacy Policy
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="description_part">
          <h5>Improve Concentration by 300%</h5>
          <div className="description__section">
            <div className="img__section">
              <img src={bTImg2}></img>
              <div className="description">
                <h5 className="popover__title">
                  100% Kid-Safety. Learn from Home
                </h5>
                <p>Live 1:1 interactive coding classes</p>
              </div>
            </div>

            <div className="img__section">
              <img src={bTImg1}></img>
              <div className="description">
                <h5>Project Completion Certificate</h5>
                <p>Build your own Games/ Chatbot.</p>
              </div>
            </div>
            <div className="img__section">
              <img src={bTImg4}></img>
              <div className="description">
                <h5>World class Teachers</h5>
                <p>Trained teachers with adequate experience</p>
              </div>
            </div>
            <div className="img__section">
              <img src={bTImg3}></img>
              <div className="description">
                <h5>Contact us Anytime.</h5>
                <p>We are available 24×7 at support@techokids.com</p>
              </div>
            </div>
          </div>
        </div>

        {verify ? (
          <Verify token={token} visible={verify} setVisible={setVerify} />
        ) : (
          ""
        )}
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
    updateForm: (id, value) => {
      dispatch(updateForm(id, value));
    },
    beginAjax: () => {
      dispatch(beginAjaxCall());
    },
    endAjax: () => {
      dispatch(endAjaxCall());
    },
  })
);
export default connector(BOOKATRAIL);
