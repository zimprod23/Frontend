import { HomeOutlined, PlusOutlined,ProjectOutlined } from '@ant-design/icons';
import { Breadcrumb, Col, Row } from 'antd';
import React from 'react'
import AddProjFormular from './Section/AddProjFormular';
import {Link} from 'react-router-dom'




function RenderBreadCumbs(){
    return(
        <Breadcrumb>
            <Breadcrumb.Item href="/admin">
            <HomeOutlined />
            </Breadcrumb.Item>
            <Link to={'/admin/projects'}>
            <Breadcrumb.Item >
            <ProjectOutlined />
            <span>Projects</span>
            </Breadcrumb.Item>
            </Link>
            <Breadcrumb.Item>
            <PlusOutlined />
            <span>Add Project</span>
            </Breadcrumb.Item>
      </Breadcrumb>
    );
}

function AddProject() {
    return (
        <div className="Add-Proj">
            <RenderBreadCumbs />
            
            <Row justify={"center"}>
                <div style={{ width:"100vw",padding: "12px",display: "block",justifyContent:"center",alignItems:"center",margin:"5vh"}}>
                    <Col span={24}>
                        <AddProjFormular />
                    </Col>
                </div>
            </Row>
        </div>
    )
}

export default AddProject
