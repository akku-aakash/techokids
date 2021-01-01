import React, { useEffect, useState } from "react";
import "./Login.scss";
import brand from "../../../images/Login/Brand.png";
import arrow from "../../../images/Login/Arrow.png";
import students from "../../../images/Login/Students.png";
import teachers from "../../../images/Login/Teacher.png";
import { Link } from "react-router-dom";
import Modal from "react-modal";
import { useForm } from "react-hook-form";
import Verify from "./Verify";
import axiosInstance from "../../../utils/interceptors";
import { beginAjaxCall, endAjaxCall } from "../../../store/loading/action";
import notify from "devextreme/ui/notify";
const customStyles = {
    marginLeft: "50%",
    marginRight: "50%",
    width: "966px",
    height: "460px",
    bottom: "auto",
    border: "none",
    borderRadius: "40px",
    backgroundColor: "red",
    display: "inline-block"
};
Modal.defaultStyles.overlay.backgroundColor = "rgba(13, 114, 236, .3)";
Modal.setAppElement("#root");
function Login() {
  const { handleSubmit, register, errors } = useForm();
  const handleLogin = () => {
    document.getElementById("lCard").style.display = "none";
    document.getElementById("loginModal").style.display = "block";
  }
  const [visible, setVisible] = useState(false);
  const [value, setValue] = useState(null);
  const onEmail = (e) => {
    e.preventDefault();
    let email = {
      email: value,
    };
    
    axiosInstance
      .post("auth/send", email)
      .then((res) => {
        const {
          status,
          data: { message, token },
        } = res;

        if (status === 200) {
          notify({ type: "success", message: message });
          localStorage.setItem("token", token);
        } else {
          notify({ type: "error", message: message });
        }
      });
  };
  
  return (
    <>
      <div className="login" id="login">
        <div className="l-top">
          <Link to="/">
            <div className="d-flex" style={{ cursor: "pointer" }}>
              <div>
                <img src={arrow} alt="" />
              </div>
              <p className="back-home">Back to home</p>
            </div>
          </Link>

          <div>
            <Link to="/">
              <img src={brand} alt="" />
            </Link>
          </div>
        </div>

        <h1 className="l-title">Welcome To Techokids</h1>
        <div className="login-modal" id="loginModal">
          <h2 className="l-m-heading">Sign In to your account</h2>
          <div className="l-m-form">
            <form onSubmit={onEmail}>
              <input
                type="text"
                ref={register({ required: true })}
                name="email"
                value={value}
                onBlur={(e) => setValue(e.target.value)}
                placeholder="Email address"
                className="form-control"
              />
              {errors.email && (
                <span style={{ color: "red", fontSize: "15px" }}>
                  This field is required
                </span>
              )}
              <input
                type="submit"
                name="submit"
                onClick={() => setVisible(true)}
                className="btn btn-primary btn-lg l-m-s-btn"
              />
            </form>
            <h4 className="l-m-desc">
              Don't have a account
              <Link to="/book-trial">
                <span>Create an account</span>
              </Link>
            </h4>
          </div>
        </div>
        <Verify visible={visible} setVisible={setVisible}></Verify>
        {/* <hr
          style={{
            width: "40rem",
            paddingTop: "20rem",
            paddingBottom: "-20rem",
          }}
        ></hr> */}
        <div className="l-card" id="lCard">
          <div className="row">
            
            <div className="col-md-4 offset-2">
              {/* <hr></hr> */}
              <div className="students d-flex">
                <div className="l-c-student-img">
                  <img src={students} alt="" />
                </div>
                <div className="l-c-text">
                  <h4 className="l-c-title">Student's</h4>
                  <button
                  onClick={handleLogin}
                  className="l-c-btn">Login here</button>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="teachers d-flex">
                <div className="l-c-teacher-img">
                  <img src={teachers} alt="" />
                </div>
                <div className="l-c-text">
                  <h4 className="l-c-title">Teacher's</h4>
                  <button className="l-c-btn">Login here</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
