import React from 'react'
import Formular from './Sections/Formular';
import { Col, Typography,Breadcrumb, Row } from "antd";
import UploadPic from '../Utils/Upload';
import UploadPicture from '../Utils/UploadImage';
import { HomeOutlined, PlusOutlined, UserOutlined } from '@ant-design/icons';

const {Title} = Typography;

function RenderBreadCumbs(){
    return(
        <Breadcrumb>
            <Breadcrumb.Item href="/Admin">
            <HomeOutlined />
            </Breadcrumb.Item>
            <Breadcrumb.Item href="/Admin/Employees">
            <UserOutlined />
            <span>Employees</span>
            </Breadcrumb.Item>
            <Breadcrumb.Item>
            <PlusOutlined />
            <span>Add Employee</span>
            </Breadcrumb.Item>
      </Breadcrumb>
    );
}

function AddEmployee() {
    return (
        <div className="Add-Formular">
            <Row>
                    <Col span={9}>
                    <div id="Upload">
                        <div>
                            <RenderBreadCumbs />
                        </div>
                        <Col span={24}>
                            <Title level={3}>Upload A picture</Title>
                             <UploadPicture />
                        </Col> 
                         <Col span={24}>
                         <Title level={3}>Upload Resume</Title>
                             <UploadPic />
                         </Col>
                    </div>  
                    </Col>
                    <Col span={15}>
                    <div id="Form">
                        <Formular />
                    </div>
                    </Col>
            </Row>
        </div>
    )
}

export default AddEmployee
