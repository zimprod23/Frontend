import { PlusOutlined } from '@ant-design/icons'
import { Button, Col, Row } from 'antd'
import React from 'react'
import MakeAProj from '../StartupPage/MakeAProj'
import ProjectCard from '../Utils/ProjectCard'

let x = [1,2,3]

function Projects() {
    return (
        <>
             <div className="Project-wrapper_1">
             <Button type="primary" shape="round" icon={<PlusOutlined />} size={"large"} >
                        Create New Project
                </Button>
             </div>
        <div className="Project-wrapper">
            <div>
            <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                
                {x.map((item,index) => {
                    return (
                      <Col >
                        <ProjectCard key={index}/>
                      </Col>
                    )
                })}
          </Row>
            </div>

        </div>
        </>
    )
}

export default Projects
