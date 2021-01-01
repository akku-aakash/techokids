import React, { useState } from "react";
import missionImg from "../../../images/about_us/mission.png";
import vissionImg from "../../../images/about_us/vision.png";
import sdImg from "../../../images/about_us/sonveer_desc.png";
import sImg from "../../../images/about_us/sonveer.png";
import ptdImg from "../../../images/about_us/prakash_desc.png";
import ptImg from "../../../images/about_us/Abhinav sir.png";
import pcdImg from "../../../images/about_us/pallav_desc.png";
import pcImg from "../../../images/about_us/pallav.png";
import ksdImg from "../../../images/about_us/kunal_desc.png";
import ksImg from "../../../images/about_us/kunal.png";
import kkdImg from "../../../images/about_us/karan_desc.png";
import kkImg from "../../../images/about_us/karan.png";
import ngdImg from "../../../images/about_us/nimish_desc.png";
import ngImg from "../../../images/about_us/nimish.png";
import gndImg from "../../../images/about_us/gaurav_desc.png";
import gnImg from "../../../images/about_us/gaurav.png";
import awdImg from "../../../images/about_us/abhi_desc.png";
import awImg from "../../../images/about_us/abhinav.png";
import rsdImg from "../../../images/about_us/ronak_desc.png";
import rsImg from "../../../images/about_us/ronak.png";

import robotImg from "../../../images/about_us/robot.png";
import batteryImg from "../../../images/about_us/battery.png";
import connectorLeftImg from "../../../images/about_us/connector_left.png";
import connectorRightImg from "../../../images/about_us/connector_right.png";

import { RadioGroup, SelectBox, TextBox } from "devextreme-react";
import { Button } from "devextreme-react/button";
import Base from "../../base/Base";

const 
ABOUTUS = () => {
  document.title = "About Us | TechoKids";
  return (
    <Base>
      <div className="aboutus__page">
        <div className="about__us" />

        <div className="technokids__description">
          <h5>Welcome to TechoKids!</h5>
          <p>
            TechoKids is an online learning platform for kids of 6 to 18 years.
            21st-century new-age tech skills like Coding, Artificial
            Intelligence, Robotics, Web development are in great demand. Kids
            need to learn these practical skills early on to prepare for future
            jobs.
          </p>
          <p>
            We offer live classes via 1:1 online sessions connecting leading
            expert teachers to kids across the globe. We want students to become
            future programmers, tech entrepreneurs who can build amazing games,
            apps, websites, and more.
          </p>
          <p>
            TechoKids offers an engaging, fun, and enjoyable tech curriculum,
            with self-paced online courses from the comfort of the home. The
            company is founded by alumni from Google, Facebook, IIT, IIM, MSU.
          </p>
          <p>
            Our courses are designed in such a way that the kid not only learns
            how to design or code but thoroughly understands the concepts to
            develop practical projects which enhances their critical thinking,
            problem solving, creativity and computational thinking.
          </p>
          <div className="our__belief">
            <h5 className="title">Our Beliefs</h5>
            <p>
              Our focus is to provide world-class learning to kids and nurture
              their hidden potential talent for the future. Our product,
              curriculum and teaching experience is crafted to complement school
              learning and fuel students growth and expand their natural
              abilities.
            </p>
            <p>
              In this 21st century, we want kids to get trained on the desired
              skills of the next generation, seek an extra edge in this
              competitive world. We envisage kids to be the next generation
              technology leaders, innovators, artists, entrepreneurs and
              scientists.
            </p>
            <div className="misson__vision">
              <div className="mission__section">
                <img src={missionImg} />
                <div className="mission__description">
                  <h5 className="header">Our Mission</h5>
                  <div className="desc">
                    Make students learn 21st century tech skills in their native
                    language with ease.
                  </div>
                </div>
              </div>
              <div className="vision__section">
                <img src={vissionImg} />
                <div className="vision__description">
                  <h5 className="header">Our Vision</h5>
                  <div className="desc">
                    To provide affordable e-learning platform for every student.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="our__team">
          <div className="slogan">
            <h5 className="our__team-battery">Is your learning battery low?</h5>
            <h5 className="our__team-recharge">Recharge with Our Team</h5>
          </div>
          <img className="robot" src={robotImg} />
          <img className="battery" src={batteryImg} />
        </div>
        <div className="team_members">
          <div className="left__section">
            <div className="memeber__profile">
              <img src={sdImg}></img>
              <img className="profile__pic" src={sImg}></img>
              <div className="title">
                <h5>SONVEER SINGH</h5>
                <div>Co-Founder</div>
              </div>
              <div className="description">
                <p>
                  Serial entrepreneur with past success (Hirequest recruiting
                  platform). 4+ yrs ed-tech experience in sales & marketing.
                  B.S.C from MSU, Baroda
                </p>
              </div>
            </div>
            <div className="memeber__profile">
              <img src={ptdImg}></img>
              <img className="profile__pic" src={ptImg}></img>
              <div className="title">
                <h5>ABHINAV KANAGAT</h5>
                <div>Head Teacher Community</div>
              </div>
              <div className="description">
                <p>
                  10+ yrs of teaching, content development & professional
                  training. Founder of August Educare. MBA from IBS Hyderabad
                </p>
              </div>
            </div>
            <div className="memeber__profile">
              <img src={pcdImg}></img>
              <img className="profile__pic" src={pcImg}></img>
              <div className="title">
                <h5>PALLAV CHUDHARI</h5>
                <div>Strategies & Growth</div>
              </div>
              <div className="description">
                <p>
                  Experience in Consulting & working with startups. B.Tech from
                  IIT Bombay & MBA from IIM Ahmedabad
                </p>
              </div>
            </div>
            <div className="memeber__profile">
              <img src={ksdImg}></img>
              <img className="profile__pic" src={ksImg}></img>
              <div className="title">
                <h5>KUNAL SINGH</h5>
                <div>Tech Team</div>
              </div>
              <div className="description">
                <p>
                  6+ years experience in building tech products. Previously @
                  Postergully, iDecorama, Ragecoffee. B.Tech from NIT Patna
                </p>
              </div>
            </div>
            <div className="memeber__profile">
              <img src={kkdImg}></img>
              <img className="profile__pic" src={kkImg}></img>
              <div className="title">
                <h5>KARAN KAHAR</h5>
                <div>Design</div>
              </div>
              <div className="description">
                <p>
                  2+ years experience in design, exfounder of branding startup.
                  Passionate about building UI UX for web.
                </p>
              </div>
            </div>
          </div>
          <div className="right__section">
            <div className="memeber__profile">
              <img src={ngdImg}></img>
              <img className="profile__pic" src={ngImg}></img>
              <div className="title">
                <h5>NIMISH GOPAL</h5>
                <div>Co-Founder</div>
              </div>
              <div className="description">
                <p>
                  Serial entrepreneur with past success (CareerNaksha)
                  Counselled 10000+ students. 10+yrs experience in sales & biz
                  dev. B.Tech from IIT Roorkee & MBS from KGI, USA.{" "}
                </p>
              </div>
            </div>
            <div className="memeber__profile">
              <img src={gndImg}></img>
              <img className="profile__pic" src={gnImg}></img>
              <div className="title">
                <h5>GAURAV NEMADE</h5>
                <div>Curriculum</div>
              </div>
              <div className="description">
                <p>
                  8+ yrs technical & product management experience, working at
                  Google AI. Ex-Cofounder of Novus Mind. B.Tech from IIT
                  Roorkee.
                </p>
              </div>
            </div>
            <div className="memeber__profile">
              <img src={awdImg}></img>
              <img className="profile__pic" src={awImg}></img>
              <div className="title">
                <h5>ABHINAV WALIA</h5>
                <div>Tech Team</div>
              </div>
              <div className="description">
                <p>
                  5+ yrs of technical experience building web products. UI UX
                  developer. Experiece at Global Logic, DeCurtis, Infosys
                </p>
              </div>
            </div>
            <div className="memeber__profile">
              <img src={rsdImg}></img>
              <img className="profile__pic" src={rsImg}></img>
              <div className="title">
                <h5>RONAK SONI</h5>
                <div>Sales Lead</div>
              </div>
              <div className="description">
                <p>
                  Ex-founder of ed-tech startup Fortune Education. 3+ years
                  experience in ed-tech sales B.E. from ITM{" "}
                </p>
              </div>
            </div>
          </div>
          <img className="connector__left" src={connectorLeftImg}></img>
          <img className="connector__right" src={connectorRightImg}></img>
        </div>
      </div>
    </Base>
  );
};

export default ABOUTUS;
