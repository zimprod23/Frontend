import React from "react";
import { Menu, Badge } from "antd";
import { Link } from "react-router-dom";
// import { UserOutlined } from "@ant-design/icons";
import { useSelector, useDispatch } from "react-redux";
import { logout } from '../../../../actions/authAction'

function RightMenu(props) {
  const user = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const logoutHandler = () => {
    dispatch(logout());
  };

  // if (user && !user.isAuth) {
  //   //alert(user.user.email);
  //   return (
  //     <Menu mode={props.mode}>
  //       <Menu.Item key="mail">
  //         <a href="/Login">Signin</a>
  //       </Menu.Item>
  //       <Menu.Item key="app">
  //         <a href="/Register">Signup</a>
  //       </Menu.Item>
  //     </Menu>
  //   );
  // } else {
    return (
      <Menu mode={props.mode}>
        {/* <Menu.Item key="chat">
          <a href="/Chat">ChatBox</a>
        </Menu.Item> */}

        {/*<Menu.Item key="upload">
          <a href="/product/upload">Upload</a>
    </Menu.Item>*/}

        <Menu.Item key="user" style={{ paddingBottom: 3 }}>
          {/* <Badge dot>
             <a
              href={
                user.user.user && user.user.user.role === 1
                  ? "/Admin"
                  : "/Account"
              }
              style={{ marginRight: -22, color: "#667777" }}
            >
              <UserOutlined />
            </a> 
          </Badge> */}
        </Menu.Item>
        
        <Menu.Item  key="BI">
          <Link to={`/admin/bi`}>
              BI
          </Link>
          </Menu.Item >
          <Menu.Item  key="Proj">
            <Link to={'/admin/projects'}>
                Project
            </Link>
          </Menu.Item>
          <Menu.Item  key="Emp">
            <Link to={'/admin/employees'}> 
                  Employes
            </Link>
          </Menu.Item>
        
        <Menu.Item key="logout">
          <a onClick={logoutHandler}>Logout</a>
        </Menu.Item>
      
      </Menu>
    );
  // }
}

export default RightMenu;
