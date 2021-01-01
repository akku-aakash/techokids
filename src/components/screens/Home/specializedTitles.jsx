import ADImg from "../../../images/specializedCourses/app_development.png";
import ARVRImg from "../../../images/specializedCourses/Ar_Vr.png";
import AIImg from "../../../images/specializedCourses/artificial_Intelligence.png";
import GPImg from "../../../images/specializedCourses/game_programming.png";
import PPImg from "../../../images/specializedCourses/python_Programming.png";
import WDImg from "../../../images/specializedCourses/web_development.png";
import BookTrailPopup from "../../common/Popup";
import React, { useState } from "react";
import { Button } from "devextreme-react/button";
import CourseSideImg from "../../../images/home_screen/courses_sideImg.png";
import { Link } from "react-router-dom";

const specializedCoursesData = [
  {
    CourseImg: ADImg,
    courseName: "App Development",
  },
  {
    CourseImg: AIImg,
    courseName: "Artificial Intelligence",
  },
  {
    CourseImg: PPImg,
    courseName: "Python Programming",
  },
  {
    CourseImg: ARVRImg,
    courseName: "AR & VR",
  },
  {
    CourseImg: GPImg,
    courseName: "Game Programming",
  },
  {
    CourseImg: WDImg,
    courseName: "Web Development",
  },
];

const SpecializedCourses = () => {
  const [showPopup, setPopup] = useState(false);
  const [selectedTile, setSelectedTile] = useState("Artificial Intelligence");
  const getCourseTitle = (CourseImg, courseName) => {
    return (
      <div className={`course_title ${selectedTile === courseName ? 'selected_course':''}`}>
        <img src={CourseImg}></img>
        <div>{courseName}</div>
      </div>
    );
  };

  let mql = window.matchMedia("(max-width: 425px)");

  return (
    <>
      <div className="special_courses">
        <h2>
          Start your success with our
          <div>Specialized courses designed by Experts</div>
        </h2>
        <div className="courses">
          {specializedCoursesData.map((sc) => {
            const { CourseImg, courseName } = sc;
            return getCourseTitle(CourseImg, courseName);
          })}
        </div>
        <Link to="/book-trial" className="enrollbtn" target="_blank">Enroll now</Link>
        {/* <Button  onClick={() => setPopup(true)}>
          
        </Button> */}
      
        {!mql.matches? <img className="course__sideimg" src={CourseSideImg} />:""}
      </div>
    </>
  );
};

export default SpecializedCourses;
