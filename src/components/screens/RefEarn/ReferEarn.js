import React, { useState } from 'react'
import banner from '../../../images/ref_earn/Banner_laptop.png'
import bannerMobile from '../../../images/ref_earn/Banner_mobile.png'
import gift from '../../../images/ref_earn/Gift.png';
import share from "../../../images/ref_earn/Share.png";
import macBook from "../../../images/ref_earn/Laptop_Apple.png";
import cash from "../../../images/ref_earn/earn_dollar.png";
import './Referearn.css'
import TnC from './TnC'
import Faq from './Faq'
import { Link } from 'react-router-dom';
import Base from '../../base/Base';
import Footer from '../../base/Footer'
import Header from '../../base/Header';

const ReferEarn = () => {
  let [tnc, setDiv] = useState(true);

  const howWorks = [
    {
      img: share,
      head: "Share your referral code",
      info: "Invite Friends & Family (by sharing your unique link)"
    },
    {
      img: cash,
      head: "Earn cash rewards",
      info: "They enrol, you start getting rewards"
    },
    {
      img: macBook,
      head: "Win MacBook",
      info: "Accumulate upto 10 referrals & Win Macbook Pro"
    },
  ]

  const toggle = (e) => {
    setDiv( tnc= (!tnc) )
    if (e.target.id = "tc") {
      document.getElementById("tc").style.backgroundColor = "#00b4db";
      document.getElementById("tc").style.color = "white";
      document.getElementById("faq").style.backgroundColor = "inherit";
      document.getElementById("faq").style.color = "black";
    } else {
      document.getElementById("tc").style.backgroundColor = "inherit";
      document.getElementById("tc").style.color = "black";
      document.getElementById("faq").style.backgroundColor = "#00b4db";
      document.getElementById("faq").style.color = "white";
    }
  }

  return (
    <>
      <div className="home">
        <div className="home-header">
          Refer and Earn
        </div>
        <img src={ window.innerWidth <= 600 ? bannerMobile : banner } width="100%" style={{padding: "3%"}} />
        <div className="content">
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
              howWorks.map( (item, index) => {
                return (
                  <div className="works-list">
                    <img src={item.img} style={{width: "150px", marginRight: "2em"}} />
                    <div>
                      <h2> {item.head} </h2>
                      <p style={{fontSize: "22px"}}> {item.info} </p>
                    </div>
                  </div>
                )
              })
            }
          </div>
          <div id="tnc">
            <div className="button-group">
              <button id="tc" onClick={e => toggle(e)}><h3>T&C</h3></button><button id="faq" onClick={e => toggle(e)}><h3>FAQs</h3></button>
            </div>
            { tnc ? <TnC /> : <Faq /> }
          </div>
        </div>
        <Footer />
      </div>
    </>
  )
}

export default ReferEarn;