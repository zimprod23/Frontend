import React, { useState } from "react";
import LeftMenu from "./Sections/LeftMenu";
import RightMenu from "./Sections/RightMenu";
import { Drawer, Button, Affix } from "antd";
import { AlibabaOutlined } from "@ant-design/icons";
import "./Sections/Navbar.css";


function NavBar() {
  const [visible, setVisible] = useState(false);

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  return (
    <Affix offsetTop={0}>
      <nav
        className="menu"
        style={{ /*position:"fixed",*/ zIndex: 5, width: "100%" }}
      >
        <div className="menu__logo">
          <a href="/"> Projecy </a>
        </div>
        <div id="blocker"></div>
        <div className="menu__container">
          <div className="menu_left">
            <LeftMenu mode="horizontal" />
          </div>
          <div className="menu_rigth">
            <RightMenu mode="horizontal" />
          </div>
          <Button
            className="menu__mobile-button"
            type="primary"
            onClick={showDrawer}
          >
            <AlibabaOutlined />
          </Button>
          <Drawer
            title="Basic Drawer"
            placement="right"
            className="menu_drawer"
            closable={false}
            onClose={onClose}
            visible={visible}
          >
            <LeftMenu mode="inline" />
            <RightMenu mode="inline" />
          </Drawer>
        </div>
      </nav>
    </Affix>
  );
}

export default NavBar;
