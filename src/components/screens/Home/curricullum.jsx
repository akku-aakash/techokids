import { Button, Tabs, TextBox } from "devextreme-react";
import HomeImg from "../../../images/home_screen.png";
import BeginnerImgFirst from "../../../images/curriculum/Beginner_first.png";
import AdvanceImgFirst from "../../../images/curriculum/Advance_first.png";
import MasterImgFirst from "../../../images/curriculum/Master_first.png";
import BeginnerImgSecond from "../../../images/curriculum/Beginner_second.png";
import AdvanceImgSecond from "../../../images/curriculum/Advance_second.png";
import MasterImgSecond from "../../../images/curriculum/Master_second.png";
import BeginnerImgThird from "../../../images/curriculum/Beginner_third.png";
import AdvanceImgThird from "../../../images/curriculum/Advance_third.png";
import MasterImgThird from "../../../images/curriculum/Master_third.png";
import begBuildImgFirst from "../../../images/curriculum/begBuild_first.png";
import advbuild1ImgFirst from "../../../images/curriculum/advbuild1_first.png";
import advbuild2ImgFirst from "../../../images/curriculum/advbuild2_first.png";
import masbuild1ImgFirst from "../../../images/curriculum/masbuild1_first.png";
import masbuild2ImgFirst from "../../../images/curriculum/masbuild2_first.png";
import begBuildImgSecond from "../../../images/curriculum/begBuild_second.png";
import advbuild1ImgSecond from "../../../images/curriculum/advbuild1_second.png";
import advbuild2ImgSecond from "../../../images/curriculum/advbuild2_second.png";
import masbuild1ImgSecond from "../../../images/curriculum/masbuild1_second.png";
import masbuild2ImgSecond from "../../../images/curriculum/masbuild2_second.png";
import begBuildImgThird from "../../../images/curriculum/begBuild_third.png";
import advbuild1ImgThird  from "../../../images/curriculum/advbuild1_third.png";
import advbuild2ImgThird  from "../../../images/curriculum/advbuild2_third.png";
import masbuild1ImgThird  from "../../../images/curriculum/masbuild1_third.png";
import masbuild2ImgThird  from "../../../images/curriculum/masbuild2_third.png";

import achBegImg from "../../../images/curriculum/achBeg.png";
import achAdvnImg from "../../../images/curriculum/achAdvn.png";
import achMast1Img from "../../../images/curriculum/achMast1.png";
import achMast2Img from "../../../images/curriculum/achMast2.png";
import downloadIcon from "../../../images/curriculum/download_icon.png";

import React, { useEffect, useState } from "react";
import BookTrailPopup from "../../common/Popup";
import { updateForm } from "../../../store/register/action";
import { connect } from "react-redux";
import Axios from "axios";
import { beginAjaxCall, endAjaxCall } from "../../../store/loading/action";
import sortBy from "lodash/sortBy";
import { Link, useHistory } from "react-router-dom";

export const tabs = [
  {
    id: 0,
    text: "Grade 1-3",
    icon: "",
  },
  {
    id: 1,
    text: "Grade 4-7",
    icon: "",
  },
  {
    id: 2,
    text: "Grade 8-12",
    icon: "find",
  },
];

const cardFields = {
  classCount: 48,
  build: "Hello world",
  programHighlights: "",
  benefits: "",
  outcome: "",
  achievements: "",
  price: 3456,
  country: "India",
  countryCode: "IN",
  discount: "7",
  curriculamLink: "",
  _id: "5fa680991fe1f60a37a8bc75",
  category: "Advance",
};

const images = {
  0: [
    {
      category: "Beginner",
      Build: {
        img1: begBuildImgFirst,
      },
      mainImg: BeginnerImgFirst,
      Achievements: {
        img1: achBegImg,
      },
    },
    {
      category: "Advance",
      Build: {
        img1: advbuild1ImgFirst,
        img2: advbuild2ImgFirst,
      },
      mainImg: AdvanceImgFirst,
      Achievements: {
        img1: achAdvnImg,
      },
    },
    {
      category: "Master",
      Build: {
        img1: masbuild1ImgFirst,
        img2: masbuild2ImgFirst,
      },
      Achievements: {
        img1: achMast1Img,
        img2: achMast2Img,
      },
      mainImg: MasterImgFirst,
    },
  ],
  1: [
    {
      category: "Beginner",
      Build: {
        img1: begBuildImgSecond,
      },
      mainImg: BeginnerImgSecond,
      Achievements: {
        img1: achBegImg,
      },
    },
    {
      category: "Advance",
      Build: {
        img1: advbuild1ImgSecond,
        img2: advbuild2ImgSecond,
      },
      mainImg: AdvanceImgSecond,
      Achievements: {
        img1: achAdvnImg,
      },
    },
    {
      category: "Master",
      Build: {
        img1: masbuild1ImgSecond,
        img2: masbuild2ImgSecond,
      },
      Achievements: {
        img1: achMast1Img,
        img2: achMast2Img,
      },
      mainImg: MasterImgSecond,
    },
  ],
  2: [
    {
      category: "Beginner",
      Build: {
        img1: begBuildImgThird,
      },
      mainImg: BeginnerImgThird,
      Achievements: {
        img1: achBegImg,
      },
    },
    {
      category: "Advance",
      Build: {
        img1: advbuild1ImgThird,
        img2: advbuild2ImgThird,
      },
      mainImg: AdvanceImgThird,
      Achievements: {
        img1: achAdvnImg,
      },
    },
    {
      category: "Master",
      Build: {
        img1: masbuild1ImgThird,
        img2: masbuild2ImgThird,
      },
      Achievements: {
        img1: achMast1Img,
        img2: achMast2Img,
      },
      mainImg: MasterImgThird,
    },
  ],
};

const Curricullum = ({
  updateBookingDetails,
  bookingDetails,
  beginAjaxCall,
  endAjaxCall,
}) => {
  const [gradeDetails, setGradeDetails] = useState();
  const [selectedGrade, setSelectedGrade] = useState(0);
  const [selectedCurricullum, setCurricullum] = useState("Beginner");

  const [seemore, setSeeMore] = useState(false);

  const history = useHistory();

  useEffect(() => {
    beginAjaxCall();
    Axios.get(
      `https://techokids.herokuapp.com/curriculum/getCurriculum/${selectedGrade}`
    ).then((res) => {
      const { data } = res;
      setGradeDetails(data);
      endAjaxCall();
    });
  }, [selectedGrade]);

  useEffect(() => {
    let mainImg = document.getElementsByClassName("main__img");

    if (seemore && mainImg.length > 0) {
      for (let i = 0; i < mainImg.length; i++) {
        mainImg[i].style.top = "-6%";
      }
    } else if (!seemore && mainImg.length > 0) {
      for (let i = 0; i < mainImg.length; i++) {
        mainImg[i].style.top = "-15%";
      }
    }
  }, [seemore]);

  const updateTabIndex = (e) => {
    if (e.fullName === "selectedIndex") {
      setSelectedGrade(e.value);
    }
  };

  let mql = window.matchMedia("(max-width: 425px)");

  return (
    <>
      <div className="curricullum">
        <h1>{"Curriculum & Pricing"}</h1>
        <div className="tabs">
          <Tabs
            dataSource={tabs}
            selectedIndex={selectedGrade}
            onOptionChanged={updateTabIndex}
          />
        </div>
        <div className="cards">
          {gradeDetails &&
            sortBy(gradeDetails.content, ["price"]).map((categorydetails) => {
              const {
                classCount,
                price,
                country,
                countryCode,
                discount,
                curriculamLink,
                build,
                programHighlights,
                benefits,
                outcome,
                achievements,
                category,
              } = categorydetails;
              const categoryBlocks = [
                { key: "Build", value: build },
                { key: "Program Highlights", value: programHighlights },
                { key: "Benefits", value: benefits },
                { key: "Outcome", value: outcome },
                { key: "Achievements", value: achievements },
              ];

              return (
                <div
                  className={`card_details ${
                    selectedCurricullum === category
                      ? `${category}_selected`
                      : ""
                  }`}
                  onClick={() => setCurricullum(category)}
                >
                  <img
                    className="main__img"
                    src={
                      images[selectedGrade].filter(
                        (i) => i.category === category
                      )[0].mainImg
                    }
                  ></img>
                  <div className="card__padding">
                    <div className={`category_count ${category}`}>
                      <div className="category">{category}</div>
                      <div className="classes">{`${classCount} Classes`}</div>
                    </div>
                    <div className="blocks">
                      {categoryBlocks.map((block) => {
                        const { key, value } = block;
                        let selectedBlockImges = images[selectedGrade].filter(
                          (o) => o.category === category
                        )[0][key];
                        return (
                          <div
                            className={`grade__block ${
                              key !== "Build" &&
                              mql.matches &&
                              seemore === false
                                ? "hide"
                                : "flex"
                            }`}
                          >
                            <div className="header">{key}</div>
                            {selectedBlockImges && (
                              <div className="img__section">
                                <img src={selectedBlockImges.img1}></img>
                                {(category === "Advance" && key === "Build") ||
                                (category === "Master" &&
                                  (key === "Build" ||
                                    key == "Achievements")) ? (
                                  <img src={selectedBlockImges.img2}></img>
                                ) : (
                                  ""
                                )}
                              </div>
                            )}
                            <p>{value}</p>
                          </div>
                        );
                      })}
                      {mql.matches ? (
                        <div
                          className={`see__more ${category}`}
                          onClick={() => setSeeMore(!seemore)}
                        >
                          {!seemore ? "See more" : "See less"}
                        </div>
                      ) : (
                        ""
                      )}
                    </div>
                    <div className="price__details">
                      <div className={`price ${category}`}>
                        <span>&#8377;</span>
                        {price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                      </div>
                      <div className="cancelled_Price">
                        <span>&#8377;</span>
                        {parseInt(price + (price * parseInt(discount)) / 100)
                          .toString()
                          .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                      </div>
                      <div className="discount">{`${discount}% off`}</div>
                    </div>
                    <div className="per__session">
                      <span>&#8377;</span>
                      {`${parseInt(price / classCount)} per session`}
                    </div>
                  </div>
                  <div className="curricullum_section">
                    <img className="donwloadIcon" src={downloadIcon}></img>
                    <div>Download Curriculum</div>
                  </div>
                  <Link
                    className={`Buy_now ${
                      selectedCurricullum === category
                        ? `${category} selected`
                        : category
                    }`}
                    to={"book-trial"}
                    target="_blank"
                  >
                    <div>Buy now</div>
                  </Link>
                </div>
              );
            })}
        </div>
      </div>
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
    updateBookingDetails: (id, value) => {
      dispatch(updateForm(id, value));
    },
    beginAjaxCall: () => {
      dispatch(beginAjaxCall());
    },
    endAjaxCall: () => {
      dispatch(endAjaxCall());
    },
  })
);

export default connector(Curricullum);
