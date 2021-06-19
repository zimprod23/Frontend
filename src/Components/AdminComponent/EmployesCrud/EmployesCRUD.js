import { PlusOutlined, SettingOutlined } from '@ant-design/icons'
import { Button, Col, Collapse, message, Row,Typography } from 'antd'
import Search from 'antd/lib/input/Search'
import React, {useState,useEffect} from 'react'
import EmployeCard from '../Utils/EmployeCard';
import ProjectCard from '../Utils/ProjectCard';
import NewEmpProvider from '../Utils/NewEmpProvider';
import {Link} from 'react-router-dom'
import axios from 'axios';
import {useSelector} from 'react-redux'

const {Panel} = Collapse;
const { Title } = Typography

function EmployesCRUD() {
  
  const auth = useSelector(state => state.auth)
  const [allemps, setallemps] = useState([])
  const [sverb, setsverb] = useState("");
  const [employees, setemployees] = useState(null)
  useEffect(() => {
    //`http://127.0.0.1:8000/profile/${auth.user.id}/All`
    auth.user && 
    axios.get(`http://127.0.0.1:8000/profile/All`).then(res => {
      setallemps(res.data)
}).catch(err => {
  //message.loading(<PlusOutlined />)
})
  }, [auth.user])
  useEffect(() => {
       axios.get(`http://127.0.0.1:8000/profile/${sverb}`).then(res => {
             setemployees(res.data)
       }).catch(err => {
         //message.loading(<PlusOutlined />)
       })
       console.log(employees)
  }, [sverb])

  useEffect(() => {
    console.log(employees)
  }, [employees])

    return (
        <div className={"EmployeCRUD"}>
            <div>
            <Link to={'/admin/employee/add_emp'}>
                <Button type="primary" icon={<PlusOutlined />} size={"large"} >
                        Add New Employee
                </Button>
            </Link>
            </div>
            <div>
                <Row justify="center" style={{width:"60vw"}}>
                    <Col span={24}>
                       <Search placeholder="input search text"  size={"large"} onSearch={() => alert("YAbhsa")} enterButton value={sverb} onChange={(e) => setsverb(e.target.value)}/></Col>
                </Row>
            </div>
            <div>
            <Row justify="center"  gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
            {
                sverb.length < 1 &&
                allemps && allemps.length > 0 && typeof allemps != "string" ? allemps.map((item,index) => {
                  return (
                    <Col>
                        <EmployeCard emp={item}/>
                    </Col>
                  )
                  }):
                  employees &&  typeof employees != "string" ? <Col><EmployeCard emp={employees}/></Col>
                  :<Title level={4} style={{margin:"10px"}}>Employee not Found</Title>
              }
             </Row>
            </div>
        </div>
     
    )
}
 
export default EmployesCRUD
