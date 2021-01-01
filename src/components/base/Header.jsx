import { Button } from "devextreme-react/button";
import React, { useEffect, useState } from "react";
import logo from "../../images/logo.png";
import menuImg from "../../images/menu.png";
import stickylogo from "../../images/logo_sticky.png";
import Menu from "devextreme-react/menu";
import BookTrailPopup from "../common/Popup";
import { Link, useHistory } from "react-router-dom";
import Sidemenu from "./sidemenu";

const HeaderMenu = [
  {
    id: "1",
    name: "CURRICULUM",
  },
  {
    id: "2",
    name: "ABOUT US",
    
  },
  {
    id: "3",
    name: "PROJECTS",
  },
  {
    id: "4",
    name: "REFER AND EARN",
  },
];

const Header = ({ issticky }) => {
  const [showPopup, setPopup] = useState(false);

  const history = useHistory();

  const [showSideMenu,sidemenu] = useState(false);

  const onitemClick = (e) => {
    const {
      itemData: { id },
    } = e;
    if (id === "2") {
      history.push("/aboutus");
    }
    else if(id === "1") {
      history.push("/curriculum")
    }
    else if (id === "4") {
      history.push("/refer-and-earn");
    }

  };

  let mql = window.matchMedia("(max-width: 425px)");

  return (
    <>
      {!mql.matches ? (
        <div className="header_panel sticky-inner">
          <div className="header_leftPanel">
            <div className="logo">
              <img
                src={issticky ? stickylogo : logo}
                onClick={() => history.push("/")}
              ></img>
            </div>
          </div>
          <div className="header_middlePanel">
            <Menu
              dataSource={HeaderMenu}
              displayExpr="name"
              orientation="horizontal"
              submenuDirection={"auto"}
              hideSubmenuOnMouseLeave={true}
              onItemClick={onitemClick}
            />
          </div>
          <div className="header_rightPanel">
            <Link to='/login'>
              <Button type="normal" className="login_btn">
                LOGIN
              </Button>
            </Link>

            <Link to="/book-trial" target="_blank">
              <Button type="success" onClick={() => setPopup(true)} className="book-free-trial">
                BOOK FREE TRIAL NOW
              </Button>
            </Link>
          </div>
        </div>
      ) : (
        <div className="header__mobile">
          <div className="threedotmenu">
            <img
              src={menuImg}
              onMouseDown={() => {
                sidemenu(true);
              }}
            ></img>
          </div>
          <div className="logo_mobile">
            <img src={logo} onMouseDown={() => history.push("/")}></img>
          </div>
        </div>
      )}
      {showSideMenu ? <Sidemenu setsidemenu={sidemenu} /> : ""}
    </>
  );
};
export default Header;
