import React from 'react';
import queryString from "query-string";
import { Breadcrumb, Col, Row, Tooltip,Avatar, Space, Button, Progress, Anchor } from 'antd';
import { HomeOutlined, ProjectOutlined,ArrowRightOutlined, PlusOutlined } from '@ant-design/icons';
import { Typography } from 'antd'
import TaskCard from '../Section/TaskCard';
import styled from 'styled-components';

const StepsContainer = styled.div`
    display: flex;
    padding: 25px;
    flex-wrap: wrap;
    width: 90vw;
    margin: 20px;
    background-color: #fdcb6e;
    align-items: center;
    over-flow: hidden;
`;


const { Title,Text } = Typography

function RenderAnchorLabels(){
    return(
        <>
        <Anchor>
            <Anchor.Link href="#Backlog_Items" title="Backlog Items" />
            <Anchor.Link href="#In_Progress" title="In progress" />
            <Anchor.Link href="#Done" title="Done" />
            <Anchor.Link href="#Cancelled" title="Cancelled" />
        </Anchor>
        </>
    );
}

function RenderAvaGroup(){
    return(
        <>
        <Space size={30} align="center" direction="horizontal">
        <Avatar.Group>
        <div>
        <Tooltip placement="top" title="conception">
        <Avatar style={{backgroundColor : "#55efc4" }} size="large">
            {14}
        </Avatar>
        </Tooltip>
        </div>
        <div>    
        <Tooltip placement="top" title="Codage">
        <Avatar style={{backgroundColor : "#fdcb6e" }} size="large">
            {19}
        </Avatar>
        </Tooltip>
        </div>
        <div>
        <Tooltip placement="top" title="test">
        <Avatar style={{backgroundColor : "#74b9ff" }} size="large">
            {6}
        </Avatar>
        </Tooltip>
        </div>
        <div>
        <Tooltip placement="top" title="test">
        <Avatar style={{backgroundColor : "#74b9ff" }} size="large">
            {6}
        </Avatar>
        </Tooltip>
        </div>
</Avatar.Group>
</Space>
</>    
    );
}

function RenderBreadCumbs({proj}){
   
    return(
        <Breadcrumb>
            <Breadcrumb.Item href="/admin">
            <HomeOutlined />
            </Breadcrumb.Item>
            <Breadcrumb.Item href="/admin/employees">
            <ProjectOutlined />
            <span>Projects</span>
            </Breadcrumb.Item>
            <Breadcrumb.Item>
            <ArrowRightOutlined />
            <span>{proj}</span>
            </Breadcrumb.Item>
      </Breadcrumb>
    );
}

function ProjectDetail(props) {
    const query = queryString.parse(props.location.search);
    const proj = props.match.params.project_ID;
    return (
        <div className="Add-Proj">
            <div>
            <RenderBreadCumbs proj={proj}/>
            </div>
            <div style={{padding:"8vh",display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"center"}}>
                <Row justify="center">
                    <Col span={4}>
                        <div>
                            <RenderAnchorLabels />
                        </div>
                    </Col>
                    <Col span={14}>
                        <div>
                            <Title>{proj}</Title>
                            <div className="Text-Desc" style={{marginTop:"3vh"}}>
                                <Text>
                                    {`
                                       jfiewjfewf ewfniewhfiew fewfewhfewf ewhf90ewhfehwfew
                                       fewoifhewifheiwohfew fewifhewiofe wfewoifhewiofhioewf
                                       fewofewfhewsoajfepwf ewfopwejfepw  jewiofnew qjpofew
                                    `}
                                </Text>
                            </div>
                            <div style={{padding:"5vh",}}>
                                 <RenderAvaGroup />
                            </div>
                        </div>
                    </Col>
                    <Col span={6}>
                        <Row justify="end">
                        <Space size={30} align="center" direction="vertical">
                            <Col span={24}>
                                <div>
                                <Button type="primary" icon={<PlusOutlined />} size={"large"} >
                                    Add New Task
                                </Button>
                              </div>
                            </Col>
                            <Col span={24}>
                                <div>
                                   <Progress type="circle" percent={75} width={80}/>
                               </div>
                            </Col>
                            </Space>
                        </Row>
                    </Col>
                </Row>
                
            </div>
            <div className="Steps-Container">
                    <Row justify="center">
                         <div id="Backlog_Items">
                             <Title level={3}>#Backlog Items</Title>
                              <StepsContainer>
                                  <TaskCard proj={proj} step={'backlog'}/>
                                  <TaskCard proj={proj} step={'backlog'}/>
                                  <TaskCard proj={proj} step={'backlog'}/>
                                  <TaskCard proj={proj} step={'backlog'}/>
                                  <TaskCard proj={proj} step={'backlog'}/>
                                  <TaskCard proj={proj} step={'backlog'}/>
                              </StepsContainer>
                         </div>
                         <div id="In_Progress">
                         <Title level={3}>#In Progress</Title>
                              <StepsContainer>
                                  <TaskCard proj={proj} step={'inprogress'}/>
                                  <TaskCard proj={proj} step={'inprogress'}/>
                                  <TaskCard proj={proj} step={'inprogress'}/>
                              </StepsContainer>
                         </div>
                         <div id="Done">
                         <Title level={3}>#Done</Title>
                              <StepsContainer >
                                  <TaskCard proj={proj} step={'done'}/>
                              </StepsContainer>
                         </div>
                         <div id="Cancelled">
                         <Title level={3}>#Cancelled</Title>
                              <StepsContainer>
                                  <TaskCard proj={proj} step={'cancelled'}/>
                              </StepsContainer>
                         </div>
                    </Row> 
                </div>
        </div>
    )
}

/***
 * <div style={{padding:"40px",marginTop:"10vh",width:"100vw",height:"100vh",backgroundColor:"salmon"}}></div>
 */

export default ProjectDetail
