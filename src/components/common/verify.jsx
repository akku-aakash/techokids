import { Button, TextBox, Validator } from "devextreme-react";

import React, { useState } from "react";
import { Popup } from "devextreme-react/popup";
import { RequiredRule } from "devextreme-react/validator";
import { connect } from "react-redux";
import axiosInstance from "../../utils/interceptors";
import { useHistory } from "react-router-dom";
import { beginAjaxCall, endAjaxCall } from "../../store/loading/action";
import notify from "devextreme/ui/notify";
import { clearForm } from "../../store/register/action";
import cross from "../../images/Cross_black.jpeg";
const Verify = ({
  bookingDetails,
  visible,
  setVisible,
  token,
  beginAjax,
  endAjax,
  clearForm,
}) => {
  const [OTP, setOTP] = useState(null);

  const history = useHistory();

  const { parentPhone } = bookingDetails;

  const OnVerify = (e) => {
    e.preventDefault();
    e.stopPropagation();
    let modifiedBookingDetails = {
      // ...bookingDetails,
      // parentPhone: {
      //   number: parseInt(parentPhone.split("-")[1]),
      //   countryCode: parseInt(parentPhone.split("-")[0].substring(2, 4)),
      // },
      otp: parseInt(OTP),
      token: token,
      role: "student",
    };

    let config = {
      headers: {
        token: token,
      },
    };

    beginAjax();
    console.log("Verify", modifiedBookingDetails);
    axiosInstance
      .post("/register/verify", modifiedBookingDetails, config)
      .then((res) => {
        const {
          status,
          data: { message, token },
        } = res;
        if (status === 200) {
          endAjax();
          notify({ type: "success", message: "Booking done Sucessfully" });
          clearForm();
          history.push("/book-your-date");
        } else {
          endAjax();
          notify({ type: "error", message: message });
        }
      });
  };
  return (
    <>
      <Popup
        visible={visible}
        className="verify__popup"
        onHidden={() => setVisible(false)}
        dragEnabled={false}
        showTitle={false}
        width="70%"
        height="70%"
        showCloseButton={true}
        closeOnOutsideClick={true}
      >
        <form onSubmit={OnVerify}>
          <div className="verify_popup">
            <img
              src={cross}
              onClick={() => setVisible(false)}
              className="cross"
              alt="cross"
            />
            <h5 className="header">Login with OTP </h5>
            <p className="sub_header">
              We sent an SMS with OTP to +91xxxxxxxxxx.
            </p>

            <TextBox
              className="otp_button"
              id="otp"
              placeholder="Enter your 6 digit OTP here"
              value={OTP}
              onValueChanged={(e) => setOTP(e.value)}
            >
              <Validator>
                <RequiredRule message="OTP is required" />
              </Validator>
            </TextBox>
            <div className="submit__section">
              <Button
                useSubmitBehavior={true}
                className="verify_button"
                type="success"
              >
                Submit
              </Button>
              <div className="resend">Resend in 5 sec</div>
            </div>
          </div>
        </form>
      </Popup>
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
    beginAjax: () => {
      dispatch(beginAjaxCall());
    },
    endAjax: () => {
      dispatch(endAjaxCall());
    },
    clearForm: () => {
      dispatch(clearForm());
    },
  })
);

export default connector(Verify);
