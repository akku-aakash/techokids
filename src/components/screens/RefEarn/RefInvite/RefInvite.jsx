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
      <div>
        <div className="container-fluid2">
            <div className="login1">
                <h1>Invite your friends to TechoKids and Win Cash Rewards & MacBook!</h1>
            </div>

            <div className="login3">
              <div className="extra">
                <h3>Login to generate your unique referral link</h3>
                <Link to="/login"><button className="button button4">Login</button></Link>
              </div>
              <img className="image2" src={gift} alt="Image-2"/>
            </div>

        </div>

        <div className="container-fluid3">
            <div className="about">
          <h1>How it works</h1>
          <div className="skills-grid">
          {works.map((work) => (
            <div className="skill-row">
                      <img className="image3" src={work.img} alt="Image-3"/>
                      <div className="info">
                        <h2>{work.title}</h2>
                        <p>{work.desc}</p>
                      </div>
                  </div>
          ))}
          </div>
        </div>
      </div>
      </div>
    );
}

export default RefInvite;
