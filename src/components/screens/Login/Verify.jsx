import { Popup, TextBox, Validator } from "devextreme-react";
import "./Login.scss";
import { Button } from "devextreme-react";
import { RequiredRule } from "devextreme-react/data-grid";
import React, { useEffect, useState } from "react";
import notify from "devextreme/ui/notify";
import axiosInstance from "../../../utils/interceptors";
import { constant } from "lodash";
import { useHistory } from "react-router-dom";

function Verify({ visible, setVisible }) {
  const history = useHistory();
  const [token, setToken] = useState("");
  // console.log(localStorage.getItem("token"));
  useEffect(() => {
    setToken(localStorage.getItem("token"));
  }, []);
  console.log(token);
  const [OTP, setOTP] = useState(null);
  const OnVerify = (e) => {
    e.preventDefault();
    const data = {
      token: localStorage.getItem("token"),
      otp: parseInt(OTP),
    };

    axiosInstance.post("auth/verify", data).then((res) => {
      const {
        status,
        data: { message, token },
      } = res;

      if (status === 200) {
        notify({ type: "success", message: message });
        // window.location.href = `https://student.techokids.com/?token=` + token;
        window.location.href = `http://localhost:3001/?token=` + token;
      } else {
        notify({ type: "error", message: message });
      }
    });
  };
  return (
    <>
      <Popup
        visible={visible}
        className="verify__popup"
        // onHidden={true}
        dragEnabled={false}
        showTitle={false}
        closeOnOutsideClick={true}
        width="70%"
        height="70%"
        showCloseButton={true}
        closeOnOutsideClick={false}
      >
        <form onSubmit={OnVerify}>
          <div className="verify_popup">
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
                onClick={() => setVisible(false)}
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
}
export default Verify;
