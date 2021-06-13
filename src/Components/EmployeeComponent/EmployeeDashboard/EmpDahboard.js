import React, { useState } from 'react'
import styled from 'styled-components'
import { Row,Col,Steps,Divider,Typography,Button } from 'antd'
import { TeamOutlined,SaveOutlined } from '@ant-design/icons'
import ProjectCardWrapper from './ProjectCardWrapper'

const {Step} = Steps
const { Text } = Typography

const TasksContainer = styled.div`
  padding: 18px;
  margin:10px;
  background-color: red;
  max-width: 90vw
`;

const TodoTask = styled.div`

padding : 20px;
margin  : 7px;
display : flex;
justify-content: space-between;
border: 1px solid
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
    const onChange = current => {
        console.log('onChange:', current);
        setcurrent(current);
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
              <Row justify="center" style={{backgroundColor: 'blue',padding:"25px"}}>
                  <Col span={24}>
                      <TasksContainer>
                          <Divider>In Progress</Divider>
                      <Steps current={current} onChange={onChange} responsive status="process">
                        <Step title="25%" description="This is a description." />
                        <Step title="50%" description="This is a description." />
                        <Step title="75%" description="This is a description." />
                        <Step title="100%" description="This is a description." />
                        <Step title="Done" description="This is a description."  icon={<SaveOutlined />}/>
                        </Steps>
                      </TasksContainer>
                  </Col>
                  <Col span={24}>
                      <TasksContainer>
                          <Divider>To do</Divider>
                         <ProjectCardWrapper>
                             <PendingTask title={"Hello"}/>
                             <PendingTask title={"Hello"}/>
                         </ProjectCardWrapper>
                         <ProjectCardWrapper>
                         <PendingTask title={"Hello"}/>
                         </ProjectCardWrapper>
                         <ProjectCardWrapper>
                         <PendingTask title={"Hello"}/>
                         <PendingTask title={"Hello"}/>
                         <PendingTask title={"Hello"}/>
                         </ProjectCardWrapper>
                      </TasksContainer>
                  </Col>
                  <Col span={24}></Col>
              </Row>
        </div>
    )
}

export default EmpDahboard
