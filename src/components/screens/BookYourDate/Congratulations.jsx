import { Popup } from 'devextreme-react';
import React, { useEffect, useState } from 'react'
import './Congratulations.scss';
import congrates from "../../../images/Congratulations.gif";
import cross from '../../../images/Cross_black.jpeg'
import Modal from "react-modal";
import notify from 'devextreme/ui/notify';
const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    width: "1000px",
    height: "500px",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    border: "4px solid #989898",
    borderRadius: "40px",
    backgroundColor: "#fff",
  },
};
Modal.setAppElement("#root");
function Congratulations({modalIsOpen, setModalIsOpen}) {
  Modal.defaultStyles.overlay.backgroundColor = "#05A1FF";

  const [token, setToken] = useState("");
    useEffect(() => {
      setToken(localStorage.getItem("token"))
      
    },[])
  const closeModal = () => {
    setModalIsOpen(false);
    
    window.location.href = `https://student.techokids.com/?token=` + token;
    // window.location.href = `http://localhost:3001/?token=` + token;
  };
  if (modalIsOpen) {
    setTimeout(function () {
      closeModal();
    }, 4000);
  }
    return (
      <div>
        <Modal isOpen={modalIsOpen} onRequestClose={modalIsOpen} style={customStyles}>
          <div className="cross-modal">
            <img src={cross} alt="cross" />
          </div>

          <div className="congrates-gif">
            <img src={congrates} alt="" />
          </div>
          <h1 className="congrates-title">Congratulations!</h1>
          <h4 className="congrates-desc">
            Your first coding class is booked. Happy Learning
          </h4>
        </Modal>
      </div>
    );
}

export default Congratulations;
