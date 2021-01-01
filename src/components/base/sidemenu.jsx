import Footer from "./Footer";
import Header from "./Header";
import React, { useEffect, useRef, useState } from "react";
import Box, { Item } from "devextreme-react/box";
import { Link, RouteProps, useHistory, useLocation } from "react-router-dom";
import BookTrailPopup from "../common/Popup";
import stImg from "../../images/booknow.png";
import { Button } from "devextreme-react/button";
import Loader from "../common/Loader";
import { Menu } from "devextreme-react";
import CrossIcon from "../../images/Cross_icon.png";

const HeaderMenu = [
  {
    id: "1",
    name: "CURRICULUM",
  },
  {
    id: "2",
    name: "COURSES",
  },
  {
    id: "3",
    name: "ABOUT US",
  },
  {
    id: "4",
    name: "PROJECTS",
  },
];

const Sidemenu = (props) => {
  const {setsidemenu} = props;
  const [showPopup, setPopup] = useState(false);

  const history = useHistory();

  const onitemClick = (e) => {
    const {
      itemData: { id },
    } = e;
    if (id === "3") {
      history.push("/aboutus");
      setsidemenu(false);
    }
  };

  return (
    <div
      className="mobile__menu"
    >
      <div className="cross_iconDiv">
        <img className="crossicon" src={CrossIcon} onClick={()=>setsidemenu(false)}></img>
      </div>
      <Menu
        dataSource={HeaderMenu}
        displayExpr="name"
        orientation={"vertical"}
        submenuDirection={"auto"}
        hideSubmenuOnMouseLeave={true}
        onItemClick={onitemClick}
      />
    </div>
  );
};

export default Sidemenu;
