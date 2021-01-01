import {
  Button,
  NumberBox,
  RadioGroup,
  SelectBox,
  TextBox,
  Validator,
} from "devextreme-react";

import React, { useState } from "react";
import { Popup } from "devextreme-react/popup";
import { EmailRule, RequiredRule } from "devextreme-react/validator";
import { registerUsers } from "../../store/register/action";
import { connect } from "react-redux";
import axiosInstance from "../../utils/interceptors";
import Axios from "axios";

const BookTrailPopup = ({ setPopup, visible, registerUser }) => {
  const [BookingDetails, setBookingDetails] = useState({
    parentName: "",
    parentEmail: "",
    parentPhone: "",
    studentName: "",
    studentGrade: "",
    hasLaptop: true,
  });

  const studentGrades = [];
  for (let i = 0; i <= 10; i++) {
    studentGrades.push({
      gradeName: `${i}`,
      gradeValue:`${i}`,
    });
  }

  const updateBookingDetails = (e) => {
    const {
      element: { id },
    } = e;

    let value;
  
     if (id === "hasLaptop" || id === "studentGrade" ) {
      value = e.value;
    }
    else {
      value = e.event.target.value;
    }

    setBookingDetails({
      ...BookingDetails,
      [id]: value,
    });
  };

  const {
    parentName,
    parentEmail,
    studentName,
    hasLaptop,
    parentPhone,
    studentGrade,
  } = BookingDetails;

  const onBooking = (e) => {
    let modifiedBookingDetails = {
      ...BookingDetails,
      parentPhone: {
        number: parseInt(parentPhone.split("-")[1]),
        countryCode: parseInt(parentPhone.split("-")[0].substring(2, 4)),
      },
    };
    
    e.preventDefault();
    Axios.post(
      "https://techokids.herokuapp.com/auth/verify",
      modifiedBookingDetails
    );
  };

  return (
    <>
      <Popup
        visible={visible}
        onHidden={() => setPopup(false)}
        dragEnabled={false}
        showTitle={false}
        title="Settings"
        width={730}
        height="95%"
        showCloseButton={true}
        closeOnOutsideClick={true}
      >
        <form onSubmit={onBooking}>
          <div className="booking_popup">
            <h5 className="header">BOOK A FREE CLASS NOW</h5>
            <p className="sub_header">
              Kids learn computational thinking, logic, Problem-solving,
              algorithmic and structural thinking.
            </p>
            <div className="booking_details">
              <TextBox
                className="parent_Name"
                id="parentName"
                placeholder="Parent's Name"
                value={parentName}
                onChange={updateBookingDetails}
              >
                <Validator>
                  <RequiredRule message="Parent Name is required" />
                </Validator>
              </TextBox>
              <TextBox
                id="parentEmail"
                placeholder="Parent's Email Id"
                value={parentEmail}
                onChange={updateBookingDetails}
              >
                <Validator>
                  <RequiredRule message="Parent's Email is required" />
                  <EmailRule message="Parent's Email is invalid" />
                </Validator>
              </TextBox>
              <TextBox
                id="parentPhone"
                mask="+XX 0000000000"
                maskRules={{ X: /[0-9]/ }}
                placeholder="Parent's Contact"
                value={parentPhone}
                onChange={updateBookingDetails}
              >
                <Validator>
                  <RequiredRule message="Parent's Contact is required" />
                </Validator>
              </TextBox>
              <TextBox
                id="studentName"
                placeholder="Student Name"
                value={studentName}
                onChange={updateBookingDetails}
              >
                <Validator>
                  <RequiredRule message="Student Name is required" />
                </Validator>
              </TextBox>
              <SelectBox
                displayExpr={"gradeName"}
                valueExpr={"gradeName"}
                id="studentGrade"
                placeholder="Student Grade"
                items={studentGrades}
                value={studentGrade}
                onValueChanged={updateBookingDetails}
              >
                <Validator>
                  <RequiredRule message="Student Grade is required" />
                </Validator>
              </SelectBox>
            </div>
            <div className="have__laptop">
              <p>Do you have laptop/PC at home for class?</p>
              <RadioGroup
                id="hasLaptop"
                displayExpr="value"
                valueExpr="id"
                
                value={hasLaptop}
                items={[{id:true,value:"Yes"},{value:"No",id:false}]}
                layout="horizontal"
                onValueChanged={updateBookingDetails}
              >
                {/* <Validator>
                  <RequiredRule message=" is required" />
                </Validator> */}
              </RadioGroup>
            </div>
            <p>
              By scheduling a free class, you agree to our Terms of Use and our
              Privacy Policy
            </p>
            <Button
              useSubmitBehavior={true}
              className="schedule_button"
              type="success"
            >
              SCHEDULE A FREE CLASS!
            </Button>
          </div>
        </form>
      </Popup>
    </>
  );
};

const connector = connect(
  (state) => {
    return {};
  },
  (dispatch) => ({
    registerUser: (payload) => {
      dispatch(registerUsers(payload));
    },
  })
);

export default connector(BookTrailPopup);
