import notify from 'devextreme/ui/notify';
import React, { useEffect, useState } from 'react'
import congrates from "../../../images/Congratulations.png";
import './BookYourDate.scss';
import Congratulations from './Congratulations';

function BookYourDate() {
    const dates = [
      {
        date: "Sat Dec 26, 2020",
        dateValue: "Sat Dec 26, 2020",
      },
      {
        date: "Sun Dec 27, 2020",
        dateValue: "Sun Dec 27, 2020",
      },
      {
        date: "Mon Dec 28, 2020",
        dateValue: "Mon Dec 28, 2020",
      },
    ];
    const times = [
      {
        time: " 10:00AM ",
        timeValue: "10:00AM",
      },
      {
        time: " 11:00AM ",
        timeValue: "11:00AM",
      },
      {
        time: " 12:00AM ",
        timeValue: "12:00AM",
      },
      {
        time: " 01:00PM ",
        timeValue: "01:00PM",
      },
      {
        time: "02:00PM",
        timeValue: "02:00PM",
      },
      {
        time: "03:00PM",
        timeValue: "03:00PM",
      },
      {
        time: "04:00PM",
        timeValue: "04:00PM",
      },
      {
        time: "05:00PM",
        timeValue: "05:00PM",
      },
      {
        time: "06:00PM",
        timeValue: "06:00PM",
      },
      {
        time: "07:00PM",
        timeValue: "07:00PM",
      },
      {
        time: "08:00PM",
        timeValue: "08:00PM",
      },
      {
        time: "09:00PM",
        timeValue: "09:00PM",
      },
    ];
    const [dateValue, setDateValue] = useState();
    const [timeValue, setTimeValue] = useState();
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [token, setToken] = useState("");
    useEffect(() => {
      setToken(localStorage.getItem("token"))
      
    },[])
    console.log("Token=",token);
    const handleTime = (e) => {
      setTimeValue(e.target.value)
      e.preventDefault();

    }
    const handleOption = (e) => {
      setDateValue(e.target.value);
      e.preventDefault();
    }
    const handleBooking = (e) => {
      const bookingDateTime = {
        bookingDate: dateValue,
        bookingTime: timeValue,
        studentName: "Abhishek Kushwaha",
        studentEmail: "kushwaha.27@gmail.com",
        studentId: "",
        slot: 2,
      };
      fetch("https://techokids.herokuapp.com/booking/scheduleTrail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "bearer-token": `${token}`,
        },
        body: JSON.stringify(bookingDateTime),
      })
        .then((res) => res.json())
        .then((data) => {
          if(data) {
            setModalIsOpen(true);
            notify({
              type: "success",
              message: "Please wait, you are redirecting to dashboard.....",
            });
          }
        });
        e.preventDefault();
    }
    const bookingDateTime = {};
    return (
      <>
        <div className="row" style={{paddingTop: "120px"}}>
          <div className="col-5">
            <div className="congrates-img">
              <img src={congrates} alt="congrates" />
            </div>
          </div>
          <div className="col-7">
            <h1 className="book-your-title">Book your FREE Trial Class</h1>
            <form>
              <div className="select-date">
                <h6 className="select-text">Select a date</h6>
                {dates.map((date) => {
                  return (
                    <button
                      id="date"
                      className={`date-options ${
                        date.date == dateValue ? "selected" : ""
                      }`}
                      value={date.dateValue}
                      onClick={handleOption}
                    >
                      {date.date}
                    </button>
                  );
                })}
              </div>
              <div className="select-time">
                <h6 className="select-text">Select a time(Asia, Calcutta)</h6>
                {times.map((tm) => (
                  <button
                    id="time"
                    className={`time-options ${
                      tm.timeValue == timeValue ? "selected" : ""
                    }`}
                    value={tm.timeValue}
                    onClick={handleTime}
                  >
                    {tm.time}
                  </button>
                ))}
              </div>
              <input onClick={handleBooking} type="submit" className="book-now-btn" value="BOOK NOW" />
            </form>
          </div>
        </div>
        <Congratulations modalIsOpen={modalIsOpen} setModalIsOpen={setModalIsOpen}></Congratulations>
      </>
    );
}

export default BookYourDate;
