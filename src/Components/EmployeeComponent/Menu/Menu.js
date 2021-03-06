import React,{useState} from 'react'
import { Menu,Row } from 'antd'
import { MailOutlined, LogoutOutlined, DashboardOutlined,ProfileOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom'
import {useDispatch} from 'react-redux'
import { logout } from '../../../actions/authAction'

function MenuHeader() {

    const dispatch = useDispatch()
    const [current, setcurrent] = useState('Prophile')
    const  handleClick = (e) => {
         console.log(e.key);
         setcurrent(e.key)
      };

    const handleLogout = () => {
      dispatch(logout())
      window.location.replace('/')
    }

    return (
        <div style={{padding : "12px",margin:"8px"}}>
       <Row justify="center">
       <Menu onClick={handleClick} selectedKeys={[current]} mode="horizontal">
       
        <Menu.Item key="Prophile"  icon={<ProfileOutlined />}>
         <Link to={`/emp`}>Prophile</Link>
        </Menu.Item>
        <Menu.Item key="Dashboard" icon={<DashboardOutlined />} >
          <Link to={`/emp/dashboard`}>Dashboard</Link>
        </Menu.Item>
        <Menu.Item key="Logout" icon={<LogoutOutlined />} onClick={handleLogout}>
          Logout
        </Menu.Item>
      </Menu>
       </Row>
        </div>
    )
}

export default MenuHeader
