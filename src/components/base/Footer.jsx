import logo from "../../images/logo.png";
import Map from "../../images/map.png";
import fbImg from "../../images/socialmedia/facebook.png";
import instaImg from "../../images/socialmedia/insta.png";
import linkImg from "../../images/socialmedia/link.png";
import twitterImg from "../../images/socialmedia/twitter.png";
import PhoneImg from "../../images/socialmedia/Call.png";
import MailImg from "../../images/socialmedia/Mail.png";
import heart from "../../images/heart.png";
import React from "react";
import { Link, useHistory } from "react-router-dom";

const social_icons = [
  {
    key: "fb",
    img: fbImg,
    url: "https://www.facebook.com/TechoKids",
  },
  {
    key: "insta",
    img: instaImg,
    url: "https://www.instagram.com/techokids",
  },
  {
    key: "twitter",
    img: twitterImg,
    url: "https://www.twitter.com/techokids",
  },
  {
    key: "linkedin",
    img: linkImg,
    url: "https://www.linkedin.com/company/techokids",
  },
];

const More = [
  {
    key: "Terms & Condition",
    link: "/terms-conditions",
  },
  {
    key: "Privacy Policy",
    link: "/privacy-policy",
  },
  {
    key: "Student Login",
    link: "/login",
  },
  {
    key: "Teacher Login",
    link: "/login",
  },
];

const companies = [
  {
    key: "About us",
    link: "https://www.techokids.com/#/aboutus",
    route: "/aboutus",
  },
  {
    key: "Blog",
    link: "http://blog.techokids.com/",
    route: "",
  },
  {
    key: "Teach with us",
    link: "https://forms.gle/9kG1wb7HsHka1mnQ9",
    route: "",
  },
  {
    key: "Refer and Earn",
    link: "",
    route: "",
  },
  {
    key: "Help & FAQ",
    link: "https://www.techokids.com/#/help-faq",
    route: "/help-faq",
  },
];

const Footer = () => {

  const history = useHistory();
  return (
    <React.Fragment>
      <div className="footer">
        <div className="contactus__section">
          <div className="any__query">
            <span>Any query?</span>
            <span>Contact us 24*7</span>
          </div>
          <div className="call_n_email">
            <div className="email">
              <div className="callus__div">Send us an email</div>
              <a className="mail">
                <img src={MailImg}></img>hello@techokids.com
              </a>
            </div>
            <div className="callus">
              <div className="callus__div">Call us</div>
              <div className="number">
                <div className="phone">
                  <img src={PhoneImg}></img>+91 8896518896
                </div>
                <div className="phone">
                  <img src={PhoneImg}></img>+91 265 3561742
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="map__section">
          <div className="footer_firstPanel">
            <img className="logo" src={logo}></img>
            <div className="social_icons">
              {social_icons.map((social) => {
                return (
                  <a href={social.url} target="_blank">
                    <img src={social.img} className={`social_${social.key}`} />
                  </a>
                );
              })}
            </div>
          </div>

          <div className="courses">
            <h4 className="courses_title">COMPANY</h4>
            <div className="courses_content">
              {companies.map((course) => {
                return (
                  <a
                    href={course.link}
                    // onClick={() => history.push(`${course.route}`)}
                    className={`courses_${course.key}`}
                  >
                    {course.key}
                  </a>
                );
              })}
            </div>
          </div>

          <div className="company">
            <h4 className="compnay_title">MORE</h4>
            <div className="more">
              {More.map((company) => {
                return (
                  <div
                    onClick={() => history.push(`${company.link}`)}
                    className={`company_${company.key}`}
                  >
                    {company.key}
                  </div>
                );
              })}
            </div>
          </div>
          <div className="map">
            <img src={Map}></img>
          </div>
        </div>
      </div>
      <p className="f-bottom">
        ©️ 2020 Techokids Pvt. Ltd. Made with love <img src={heart} alt="" /> in
        India
      </p>
    </React.Fragment>
  );
};

export default Footer;
