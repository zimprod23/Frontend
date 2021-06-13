import React,{useState} from 'react'
import { Menu,Row } from 'antd'
import { MailOutlined, AppstoreOutlined, SettingOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom'

function MenuHeader() {

    
    const [current, setcurrent] = useState('Prophile')
    const  handleClick = (e) => {
         console.log(e.key);
         setcurrent(e.key)
      };

    return (
        <div style={{padding : "12px",margin:"8px"}}>
       <Row justify="center">
       <Menu onClick={handleClick} selectedKeys={[current]} mode="horizontal">
       
        <Menu.Item key="Prophile"  icon={<AppstoreOutlined />}>
          Navigation Two
        </Menu.Item>
        <Menu.Item key="Dashboard" icon={<MailOutlined />} >
          <Link to={`/emp/dashboard`}>Dashboard</Link>
        </Menu.Item>
        <Menu.Item key="Logout" icon={<MailOutlined />}>
          Navigation three
        </Menu.Item>
      </Menu>
       </Row>
        </div>
    )
}

export default MenuHeader
