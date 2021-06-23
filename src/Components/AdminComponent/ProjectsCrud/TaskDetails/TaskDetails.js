import React,{useState,useEffect} from 'react';
import { Breadcrumb, Col, Row, Tooltip,Avatar, Space,Modal, Button, Progress, Anchor,Dropdown,Menu,Skeleton,message,Card } from 'antd';
import { HomeOutlined, ProjectOutlined,ArrowRightOutlined,SettingOutlined, ExclamationCircleOutlined ,CloseCircleOutlined,CheckCircleOutlined} from '@ant-design/icons';
import { Typography } from 'antd'
import {Link} from 'react-router-dom'
import {useDispatch,useSelector} from 'react-redux'
import { getTaskById } from '../../../../actions/taskAction'
import styled from 'styled-components';
import AssignedTaskOwner from './AssignTaskOwner';
import TaskCard from '../Section/TaskCard';
import axios from 'axios';

const { confirm } = Modal

const SectionOne = styled.div``;

const SectionTwo = styled.div``;

const VarContainer = styled.div`
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
const {Meta} = Card
const SectionThree = styled.div``;
const SectionFour = styled.div`
display : flex;
justify-content: center;
align-items: center;
flex-wrap: wrap;
background: #74b9ff;

`;

function ReportContainer(props) {
    const rapport = (
        <>
        <Text>
            {props.rp.State == 'D'?<CheckCircleOutlined style={{color:"#32ff7e"}}/>:<CloseCircleOutlined style={{color:"#ff6b6b"}}/>}
            <br />
            {props.rp.rapport}
            <br />
            <Text style={{color:"#48dbfb"}}>{props.rp.date_add}</Text>
        </Text>
        </>
    )
    return(
      <Card
            style={{  marginTop: 16 }}
        >
            <Skeleton loading={false} avatar active>
            <Meta
                avatar={
                <Avatar src={props.rp.emp.image} />
                }
                title={props.rp.emp.account.username}
                description={rapport}
            />
            </Skeleton>
      </Card>
    )
}

function DropMenu(props){
    
    const onFreeEmployee = () => {
         //alert(props.task.id_st)
         axios.put(`http://127.0.0.1:8000/task/${props.task.id_st}/to-emp/0`).then(res => {
             message.success("Task Owner removed")
             setTimeout(() => {
                window.location.reload()
             }, 1500);
         }).catch(err => {
             message.error('could not remove task owner')
         })
    }

    const menu = (
        <div >
           <Menu style={{
             padding:"15px",
            margin:"15px",
            textAlign:"center",
            backgroundColor:"#ecf0f1"
        }}>
             <Menu.Item>
                     <Title level={5}>{props.task.emp != null?'Change or free Employee':'Affect task'}</Title>
                </Menu.Item>
                <Menu.Item>
                    <AssignedTaskOwner task={props.task}/>
                </Menu.Item>
                <Menu.Item>
                {props.task.emp != null?<Button style={{color:"white",backgroundColor:"#ff4d4d"}} onClick={onFreeEmployee}>Free Employee</Button>:<></>}
                </Menu.Item>
            </Menu>
        </div>
    );
    return(
        <>
           <Dropdown overlay={menu} placement="bottomCenter" arrow>
             {props.children}
            </Dropdown>
        </>
    )
}

function RenderBreadCumbs({proj,task}){
   
    return(
        <Breadcrumb>
            <Breadcrumb.Item href="/admin">
            <HomeOutlined />
            </Breadcrumb.Item>
            <Link to={"/admin/projects"}>
            <Breadcrumb.Item>
            <ProjectOutlined />
            <span>Projects</span>
            </Breadcrumb.Item>
            </Link>
            <Link to={`/admin/projects/${proj}`}>
            <Breadcrumb.Item>
            <ArrowRightOutlined />
            <span>{proj}</span>
            </Breadcrumb.Item>
            </Link>
            <Breadcrumb.Item>
            <ArrowRightOutlined />
            <span>{task}</span>
            </Breadcrumb.Item>
      </Breadcrumb>
    );
}

function TaskDetails(props) {
    const proj = props.match.params.project_ID;
    const task = props.match.params.task_ID;

    const tsk = useSelector(state => state.task);
    const dispatch = useDispatch();

    function secondsToDhms(seconds) {
        seconds = Number(seconds);
        var d = Math.floor(seconds / (3600*24));
        var h = Math.floor(seconds % (3600*24) / 3600);
        var m = Math.floor(seconds % 3600 / 60);
        var s = Math.floor(seconds % 60);
        
        var dDisplay = d > 0 ? d + (d == 1 ? " day, " : " days, ") : "";
        var hDisplay = h > 0 ? h + (h == 1 ? " hour, " : " hours, ") : "";
        var mDisplay = m > 0 ? m + (m == 1 ? " minute, " : " minutes, ") : "";
        var sDisplay = s > 0 ? s + (s == 1 ? " second" : " seconds") : "";
        return dDisplay + hDisplay + mDisplay + sDisplay;
        }

    useEffect(() => {
        dispatch(getTaskById(task))
    }, [task])

    const onDeletePressed = () => {
        axios.delete(`http://127.0.0.1:8000/task/${task}/delete-task`).then(res => {
            window.location.replace('/admin')
         }).catch(err => {
            message.error("Oooops couldn't delete this project")
        })
    }

    function showConfirm() {
        confirm({
          title: 'Are you sure you Want to delete this Task?',
          icon: <ExclamationCircleOutlined />,
          content: 'After pressing ok you cant undo it',
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
            <RenderBreadCumbs proj={proj} task={task}/>
            </div>
           { 
             tsk && tsk.task?
             (
           <div id="dataExist">
            <SectionOne>
                <br />
                <br />
                 <Space>
                     <Title level={2}>{tsk && tsk.task.title}</Title>
                     {tsk && tsk.task.State == 'A'||tsk && tsk.task.State == 'C'?
                     <>
                         <DropMenu task={tsk && tsk.task}>
                            <SettingOutlined/>
                         </DropMenu>
                     </>:
                         <></>
                     }
                </Space>
                 <Row >
                     <Col span={16}>
                            <Text> 
                                {tsk && tsk.task.desc} 
                            </Text>
                     </Col>
                     <Col span={8}>
                         <div style={{display: `flex`,justifyContent:"flex-end",alignItems:"flex-end"}}>
                             <Progress type="circle" percent={tsk.task.progress} />
                        </div>
                     </Col>
                 </Row>
            </SectionOne>
            <br />
            <SectionTwo>
                    <div>
                       <Title level={4}>#Start after</Title>
                   </div>
               <VarContainer>
                         {tsk.task && tsk.task.strat_after_tasks && tsk.task.strat_after_tasks.map((item,index) => {
                             return (
                                <>
                                   <TaskCard proj={proj} step={'backlog'} key={index} info={item}/>
                                </>
                                )
                         })}
               </VarContainer>
            </SectionTwo>
            <SectionThree>
                     <div>
                       <Title level={4}>#Creation Date</Title>
                        <p style={{fontSize:"22px",color:"#17c0eb"}}>{tsk.task && tsk.task.create_date}</p>
                   </div>
                   <div>
                       <Title level={4}>#DeadLine</Title>
                       <p style={{fontSize:"22px",color:"#17c0eb"}}>{tsk.task && tsk.task.end_before?tsk.task.end_before:'-----'}</p>
                   </div>
                   <div>
                       <Title level={4}>#Duration</Title>
                       <p style={{fontSize:"22px",color:"#17c0eb"}}>{tsk.task && tsk.task.duration?secondsToDhms(tsk.task.duration):'-------'}</p>
                   </div>
            </SectionThree>
            <br />
            <Title level={3}>Report</Title>
            <SectionFour>
                <div style={{maxWidth: "80vw",padding:"10px",margin:"10px"}}>
                     {
                         tsk.task.rapports.map((item,index) => {
                             return (
                                 <>
                             <ReportContainer rp={item}/>
                             </>
                             )
                         })
                     }
                </div>
            </SectionFour>
            <div style={{
                padding:"10px",
                margin:"10px"
            }}>
                 <Button style={{backgroundColor:"tomato",margin:"10px",float:"right",color:"white"}} onClick={showConfirm}>Delete this task</Button>
            </div>
            </div>
            ):
            <div id="Skeleton">
               <Skeleton active/>
               <Skeleton active />
               <Skeleton active/>
            </div>
            }
        </div>
    )
}


export default TaskDetails
