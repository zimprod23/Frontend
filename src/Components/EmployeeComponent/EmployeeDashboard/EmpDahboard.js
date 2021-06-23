import React, { useState,useEffect } from 'react'
import styled from 'styled-components'
import { Row,Col,Steps,Divider,Typography,Button, message } from 'antd'
import { CloseCircleOutlined,SaveOutlined } from '@ant-design/icons'
import ProjectCardWrapper from './ProjectCardWrapper'
import DCreport from './DCreport'
import DCreportModal from './DCreportModal'
import { useDispatch,useSelector } from 'react-redux'
import { progressTask } from '../../../actions/taskAction'
import axios from 'axios'

const {Step} = Steps
const { Text,Title } = Typography

const TasksContainer = styled.div`
  padding: 15px;
  margin:10px;
  
  max-width: 90vw
`;

const TodoTask = styled.div`

padding : 20px;
margin  : 7px;
display : flex;
justify-content: space-between;
border: 1.8px solid;
border-color: #ecf0f1
`;

function PendingTask(props){
    return(
        <div>
            <TodoTask>
                <Text>{props.title}</Text>
                 <Button type="primary"> Start </Button>
            </TodoTask>
        </div>
    )
}


function EmpDahboard() {

    const [current, setcurrent] = useState(0)
    const [visible, setvisible] = useState(false)
    const [emptasksdata, setemptasksdata] = useState(null)
    const [reload, setreload] = useState(0)
    const auth = useSelector(state => state.auth)

    const [taskOps, settaskOps] = useState({
        taskId:null,
        status:null,
        emp:auth.user && auth.user.id
    })

    const splitData = (task) => {
        const Inp = []
        const A = []
        task.map((item,index) => {
            if(item.State == 'A')
               A.push(item)
            else if(item.State == 'Inp'){
                Inp.push(item)
            }
        })

        return {Inp,A}
    }

    let taskId = 1;
    const dispatch = useDispatch();
    
    const progressLevel = (lvl) =>{
        return lvl * 25
    }

    const onTaskEnded = () => {
       setvisible(true)
    }
    // useEffect(() => {
    //     //console.log(visible)
    //     //alert(triggerTask)
    // }, [triggerTask])

    useEffect(() => {
        if(auth.user)
        axios.get(`http://127.0.0.1:8000/profile/${auth.user.username}`).then(res => {
             setemptasksdata(splitData(res.data.tasks))
             console.log(res.data.tasks)
        }).catch(err => {
            message.error("Oooops something went wrong")
        })
        console.log(emptasksdata)
    }, [auth,reload])

    const onChange = (current,id) => {
        console.log('onChange:', current);
        setcurrent(current);
        if(current == 5){
            settaskOps({...taskOps,taskId:id,status:'Done'})
            onTaskEnded()
          // OnTaskDone()
        }else if(current == 6){
            settaskOps({...taskOps,taskId:id,status:'Cancel'})
            //OntaskCancel()
            onTaskEnded()
        }else{
            dispatch(progressTask(progressLevel(current),id))
        }
      };
    return (
        <div 
          style={{
              padding:"10px",
              margin:"4px",
              display:"flex",
              justifyContent:"center",
              alignItems:"center"
          }}
        >
              <Row justify="center" style={{/*backgroundColor: 'blue',*/padding:"25px"}}>
                  <Col span={24}>
                      <TasksContainer>
                      <Divider>In Progress</Divider>
                         {
                             emptasksdata && emptasksdata.Inp && emptasksdata.Inp.length > 0?emptasksdata.Inp.map((item,index) => {
                                return(
                                    <>
                                    <Steps current={current} onChange={(e) => onChange(e,item.id_st)} responsive status="process">
                                        <Step title="0%" description={item.title} />
                                        <Step title="25%" />
                                        <Step title="50%"  />
                                        <Step title="75%"  />
                                        <Step title="100%"  />
                                        <Step title="Done"   icon={<SaveOutlined />}/>
                                        <Step title="Cancel" description="Abort Task" icon={<CloseCircleOutlined />} status="error"/>
                                    </Steps>
                                    </>
                                )
                             }):
                             <Title level={4}>No Active task in Progress ...</Title>
                         }
                      </TasksContainer>
                  </Col>
                  <Col span={24}>
                      <TasksContainer>
                          <Divider>To do</Divider>
                          {
                              emptasksdata && emptasksdata.A &&  <ProjectCardWrapper title={"To do"} data={emptasksdata.A} stateIndex={false} reload={(val) =>setreload(reload+val)}/>
                          }
                      </TasksContainer>
                  </Col>
                  <Col span={24}></Col>
              </Row>
              <div id="Modals">
                   <DCreportModal isVisible={visible} onCloseEvent={(val) => setvisible(val)}  taskState={taskOps} taskProg={progressLevel(current)} reload={(val) =>setreload(reload+val)}/>
              </div>
        </div>
    )
}

export default EmpDahboard
