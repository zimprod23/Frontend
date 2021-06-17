import React, { useState,useEffect } from 'react'
import styled from 'styled-components'
import { Row,Col,Steps,Divider,Typography,Button } from 'antd'
import { CloseCircleOutlined,SaveOutlined } from '@ant-design/icons'
import ProjectCardWrapper from './ProjectCardWrapper'
import DCreport from './DCreport'
import DCreportModal from './DCreportModal'

const {Step} = Steps
const { Text } = Typography

const TasksContainer = styled.div`
  padding: 18px;
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

    const OntaskCancel = () => {
        alert("Done")
    }
    const OnTaskDone = () => {
         setvisible(true)
         //alert(visible)
    }
    useEffect(() => {
        console.log(visible)
    }, [visible])

    const onChange = current => {
        console.log('onChange:', current);
        setcurrent(current);
        if(current == 4){
           OnTaskDone()
        }else if(current == 5){
            OntaskCancel()
        }else{
            alert(current)
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
                      <Steps current={current} onChange={onChange} responsive status="process">
                        <Step title="0%" description="This is a description." />
                        <Step title="25%" description="This is a description." />
                        <Step title="50%" description="This is a description." />
                        <Step title="75%" description="This is a description." />
                        <Step title="Done" description="This is a description."  icon={<SaveOutlined />}/>
                        <Step title="Cancel" description="Abort Task" icon={<CloseCircleOutlined />} status="error"/>
                        </Steps>
                      </TasksContainer>
                  </Col>
                  <Col span={24}>
                      <TasksContainer>
                          <Divider>To do</Divider>
                          <ProjectCardWrapper title={"Done"} taskData={8} stateIndex={false}/>
                      </TasksContainer>
                  </Col>
                  <Col span={24}></Col>
              </Row>
              <div id="Modals">
                   <DCreportModal isVisible={visible} onCloseEvent={(val) => setvisible(val)} status={null}/>
              </div>
        </div>
    )
}

export default EmpDahboard
