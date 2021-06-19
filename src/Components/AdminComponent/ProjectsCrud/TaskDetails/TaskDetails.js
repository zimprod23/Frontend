import React,{useState,useEffect} from 'react';
import { Breadcrumb, Col, Row, Tooltip,Avatar, Space,Modal, Button, Progress, Anchor,Dropdown,Menu,Skeleton,message } from 'antd';
import { HomeOutlined, ProjectOutlined,ArrowRightOutlined, ExclamationCircleOutlined } from '@ant-design/icons';
import { Typography } from 'antd'
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
const SectionThree = styled.div``;
const SectionFour = styled.div`
display : flex;
justify-content: center;
align-items: center;
flex-wrap: wrap;
background: #74b9ff;

`;



function DropMenu(props){
    
    const menu = (
        <div >
           <Menu style={{
             padding:"15px",
            margin:"15px",
            textAlign:"center",
            backgroundColor:"#7efff5"
        }}>
             <Menu.Item>
                     <Title level={5}>Owner setting</Title>
                </Menu.Item>
                <Menu.Item>
                    <AssignedTaskOwner />
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
            <Breadcrumb.Item href="/admin/projects">
            <ProjectOutlined />
            <span>Projects</span>
            </Breadcrumb.Item>
            <Breadcrumb.Item href={`/admin/projects/${proj}`}>
            <ArrowRightOutlined />
            <span>{proj}</span>
            </Breadcrumb.Item>
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
                 <Title level={2}>{tsk && tsk.task.title}</Title>
                 <Row >
                     <Col span={16}>
                            <Text> 
                                {tsk && tsk.task.desc} 
                            </Text>
                     </Col>
                     <Col span={8}>
                         <div style={{display: `flex`,justifyContent:"flex-end",alignItems:"flex-end"}}>
                             <DropMenu >
                             <Avatar src={`https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png`} size={100} />
                             </DropMenu>
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
                       <Title level={4}>#Date Limite</Title>
                   </div>
                   <div>
                       <Title level={4}>#Start After</Title>
                   </div>
            </SectionThree>
            <br />
            <Title level={3}>Rapport</Title>
            <SectionFour>
                <div style={{maxWidth: "70vw",padding:"10px",margin:"10px"}}>
                    <Text>
                       {/* {tsk.task.rapports[0]} */}
                    </Text>
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
