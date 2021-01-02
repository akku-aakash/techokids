import React from 'react';
import './RefInvite.css';
import gift from '../../../../images/ref_earn/Gift.png';
import share from "../../../../images/ref_earn/Share.png";
import macBook from "../../../../images/ref_earn/Laptop_Apple.png";
import cash from "../../../../images/ref_earn/earn_dollar.png";
import { Link } from 'react-router-dom';
function RefInvite() {
    const works = [
      {
        img: share,
        title: "Share your referral code",
        desc: "Invite Friends & Family (by sharing your unique link)",
      },
      {
        img: cash,
        title: "Earn cash rewards",
        desc: "They enrol, you start getting rewards",
      },
      {
        img: macBook,
        title: "Win MacBook",
        desc: "Accumulate upto 10 referral & Win MacBook Pro",
      },
    ];
    return (
      <>
        <div className="content-info" style={{display: "flex", justifyContent: "space-between", alignItems: "flex-end", flexWrap: "wrap"}}>
          <div id="invite-login-div">
            <h1>Invite your friends to TechoKids and <br />Win Cash Rewards & MacBook!</h1>
            <p style={{fontSize: "1.25em", marginBottom: "2em"}}>Login to generate your unique referral link</p>
            <Link to="/login"><button id="login">Login</button></Link>
          </div>
          <img id ="gift" src={gift} style={{float: "right"}} width="auto" height="200px" style={{margin: "1em"}} />
        </div>
        <div className="content-info">
          <h1>How it works?</h1>
          {
            works.map( (item, index) => {
              return (
                <div className="works-list">
                  <img src={item.img} style={{width: "150px", marginRight: "2em"}} />
                  <div>
                    <h2> {item.title} </h2>
                    <p style={{fontSize: "22px"}}> {item.desc} </p>
                  </div>
                </div>
              )
            })
          }
        </div>
      </>
      
    );
}

export default RefInvite;
