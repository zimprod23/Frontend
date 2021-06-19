import React,{useEffect} from 'react';
import { Breadcrumb, Col, Row, Tooltip,Avatar, Space, Button, Progress, Anchor, message,Modal } from 'antd';
import { HomeOutlined, ProjectOutlined,ArrowRightOutlined, PlusOutlined,ExclamationCircleOutlined } from '@ant-design/icons';
import { Typography } from 'antd'
import TaskCard from '../Section/TaskCard';
import styled from 'styled-components';
import { getProjectById } from '../../../../actions/projectAction'
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import AddtaskDrawer from '../TaskDetails/AddtaskDrawer'

const {confirm} = Modal
const StepsContainer = styled.div`
    display: flex;
    padding: 25px;
    flex-wrap: wrap;
    width: 90vw;
    margin: 20px;
    background-color: #74b9ff;
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

function EmptyTask(){
    return(
        <div>
             <Title level={3} type="danger">
                  There are in no active tasks in this section...
             </Title>
        </div>
    )
}

function RenderAvaGroup({proj}){
    return(
        <>
        <Space size={30} align="center" direction="horizontal">
        <Avatar.Group>
        <div>
        <Tooltip placement="top" title="conception">
        <Avatar style={{backgroundColor : "#55efc4" }} size="large">
            {proj && proj.count_Done_tasks}
        </Avatar>
        </Tooltip>
        </div>
        <div>    
        <Tooltip placement="top" title="Codage">
        <Avatar style={{backgroundColor : "#fdcb6e" }} size="large">
            {proj && proj.count_Inprogress_tasks}
        </Avatar>
        </Tooltip>
        </div>
        <div>
        <Tooltip placement="top" title="test">
        <Avatar style={{backgroundColor : "#74b9ff" }} size="large">
            {proj && proj.count_Canceled_tasks}
        </Avatar>
        </Tooltip>
        </div>
        <div>
        <Tooltip placement="top" title="test">
        <Avatar style={{backgroundColor : "#74b9ff" }} size="large">
            {proj && proj.count_affected_tasks}
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
            <Breadcrumb.Item href="/admin/projects">
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
    const dispatch = useDispatch();
    const project = useSelector(state => state.project)
    const progress = project.spProj && project.spProj.count_Done_tasks ? ((project.spProj.count_Done_tasks * 100) / (project.spProj.count_all_tasks)):0
    //project.spProj && ((project.spProj.count_Done_tasks / project.spProj.count_all_tasks)*100)
    //const query = queryString.parse(props.location.search);
    const proj = props.match.params.project_ID;
   
    useEffect(() => {
        dispatch(getProjectById(proj))
    }, [])

    const onDeletePressed = () => {
        axios.delete(`http://127.0.0.1:8000/project/${proj}/delete-project`).then(res => {
            window.location.replace('/admin')
         }).catch(err => {
            message.error("Oooops couldn't delete this project")
        })
    }

    function showConfirm() {
        confirm({
          title: 'Are you sure you Want to delete this project?',
          icon: <ExclamationCircleOutlined />,
          content: 'By deleting this project you will remove all the data related to it',
          onOk() {
            onDeletePressed()
          },
          onCancel() {
            console.log('Cancel');
          },
        });
      }

    return (
        <div className="Add-Proj">
            <div>
            <RenderBreadCumbs proj={project.spProj && project.spProj.title}/>
            </div>
            <div style={{padding:"8vh",display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"center"}}>
                <Row >
                    <Col span={4}>
                        <div>
                            <RenderAnchorLabels />
                        </div>
                    </Col>
                    <Col span={14} style={{padding:"10px",width:"60vw"}}>
                        <div>
                            <Title>{project.spProj && project.spProj.title}</Title>
                            <div className="Text-Desc" style={{marginTop:"3vh"}}>
                                <div style={{
                                    margin:"5px"
                                }}>
                                   <Text italic>
                                    { project.spProj && project.spProj.desc }
                                  </Text>
                                </div>
                                <br />
                                <Title level={5}>
                                &#9733; budjet : { project.spProj && project.spProj.budget }
                                </Title>
                                <br />
                                <Title level={5}>
                                &#9733; device : { project.spProj && project.spProj.Device }
                                </Title>
                                <br />
                                <Title level={5}>
                                &#9733; secteur :  { project.spProj && project.spProj.secteur }
                                </Title>
                                <br />
                                <Title level={5}>
                                &#9733; start date : { project.spProj && project.spProj.start_date } || limit date : { project.spProj && project.spProj.date_limit }
                                </Title>
                            </div>
                            <div style={{padding:"5vh",}}>
                                  <RenderAvaGroup proj={project.spProj && project.spProj}/> 
                            </div>
                        </div>
                    </Col>
                    <Col span={6}>
                        <Row justify="end">
                        <Space size={30} align="center" direction="vertical">
                            <Col span={24}>
                                <div>
                                {/* <Button type="primary" icon={<PlusOutlined />} size={"large"} >
                                    Add New Task
                                </Button> */}
                                <AddtaskDrawer proj={proj} backlogItems={
                                    project.spProj && project.spProj.backlogItems && project.spProj.backlogItems.length > 0 ? project.spProj.backlogItems:[]
                                }/>
                              </div>
                            </Col>
                            <Col span={24}>
                                <div>
                                   <Progress type="circle" percent={parseInt(progress)} width={80}/>
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
                                  {
                                       project.spProj && project.spProj.backlogItems && project.spProj.backlogItems.length > 0 ? project.spProj.backlogItems.map((item,index) => {
                                           return (
                                           <>
                                              <TaskCard proj={proj} step={'backlog'} key={index} info={item}/>
                                           </>
                                           )
                                       }):<EmptyTask />
                                  }
                              </StepsContainer>
                         </div>
                         <div id="In_Progress">
                         <Title level={3}>#In Progress</Title>
                              <StepsContainer>
                              {
                                       project.spProj && project.spProj.inProgressItems && project.spProj.inProgressItems.length > 0 ? project.spProj.inProgressItems.map((item,index) => {
                                           return (
                                           <>
                                              <TaskCard proj={proj} step={'inprogress'} key={index} info={item}/>
                                           </>
                                           )
                                       }):<EmptyTask />
                                  }
                              </StepsContainer>
                         </div>
                         <div id="Done">
                         <Title level={3}>#Done</Title>
                              <StepsContainer >
                              {
                                       project.spProj && project.spProj.doneItems && project.spProj.doneItems.length > 0 ? project.spProj.doneItems.map((item,index) => {
                                           return (
                                           <>
                                              <TaskCard proj={proj} step={'done'} key={index} info={item}/>
                                           </>
                                           )
                                       }):<EmptyTask />
                                  }
                              </StepsContainer>
                         </div>
                         <div id="Cancelled">
                         <Title level={3}>#Cancelled</Title>
                              <StepsContainer>
                              {
                                       project.spProj && project.spProj.canceldItems && project.spProj.canceldItems.length > 0 ? project.spProj.canceldItems.map((item,index) => {
                                           return (
                                           <>
                                              <TaskCard proj={proj} step={'canceled'} key={index} info={item}/>
                                           </>
                                           )
                                       }):<EmptyTask />
                                  }
                              </StepsContainer>
                         </div>
                         <div id="Ops" style={{
                             width:"90vw"
                         }}>
                             <Button style={{backgroundColor:"tomato",margin:"10px",float:"right",color:"white"}} onClick={showConfirm}>Delete this project</Button>
                             <Button style={{margin:"10px",float:"right",backgroundColor:"#fff200",color:"white"}}>Archieve this project</Button>
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
