import React from "react";
import { Menu } from "antd";
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;
const server = "https://cefolim-web-app.herokuapp.com/uploads/";
function LeftMenu(props) {
  return (
    <Menu mode={props.mode}>
      {/* <Menu.Item key="home">
        <a href="/">
          <span>Home</span>
        </a>
      </Menu.Item> */}
      <Menu.Item key="github" style={{
 
   
        paddingTop:"15px"
      }}>
          <a href="https://github.com/zimprod23/Frontend.git">
            GitHub
          </a>
      </Menu.Item>
      <Menu.Item key="me">
        {/* <a href={`${server}CV.pdf`} download>
          <span>About me</span>
        </a> */}
      </Menu.Item>
      {/* <SubMenu title={<span>Blogs</span>}>
        <MenuItemGroup title="Item 1">
          <Menu.Item key="setting:1">Option 1</Menu.Item>
          <Menu.Item key="setting:2">Option 2</Menu.Item>
        </MenuItemGroup>
        <MenuItemGroup title="Item 2">
          <Menu.Item key="setting:3">Option 3</Menu.Item>
          <Menu.Item key="setting:4">Option 4</Menu.Item>
        </MenuItemGroup>
      </SubMenu> */}
    </Menu>
  );
}

export default LeftMenu;
