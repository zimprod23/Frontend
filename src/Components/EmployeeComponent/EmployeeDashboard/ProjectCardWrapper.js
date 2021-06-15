import React from 'react'
import {Card,Typography,Button,Row,Col,Avatar,Progress} from 'antd'
import styled  from 'styled-components';
import TaskDetail from '../../AdminComponent/Utils/TaskDetailModal';

const { Text,Title } = Typography
const TodoTask = styled.div`
/*padding : 20px;
margin  : 7px;
display : flex;
justify-content: center;
border: 1.8px solid;
border-color: #ecf0f1*/
display : flex;
justify-content: space-between;
`;

function InProgressTask(props) {
    return (
        <div>
          <Row justify="space-between" gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                <Col style={{
                    padding : "5px"
                }}>
                <Title level={5} >{props.title}</Title>
                <Text>frgetmophgrwpogoerpgoeg</Text>
                </Col>
                <br />
                <Col>
                <div style={{
                    float:"right"
                }}>
                      <Progress type="circle" percent={30} width={80} />
                </div>
                </Col>
                </Row>
        </div>
    )
}


function PendingTask(props){
    return(
        <div>
            <Row justify="space-between" gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                <Col flex={16} style={{
                    padding : "5px"
                }}>
                <Text>{props.title}</Text>
                </Col>
                <br />
                <Col flex={8}>
                <div style={{
                    float:"right"
                }}>
                        <Button type="primary"> Start </Button>
                         &nbsp;
                        <TaskDetail />
                </div>
                </Col>
                </Row>
        </div>
    )
}


function CardWrapper(props) {
    const gridStyle = {
        width: '100%',
        //textAlign: 'center',
        margin:"00px"
      };
    return (
        <div style={{maxWidth:"85vw"}}>
            <p>{props.children?props.children:<></>}</p>
             <Card title={props.title} style={{padding:"10px"}} >
                 {
                     Array.from(Array(props.taskData).keys()).map((item,index) => {
                         return(
                             <>
                                     <Card.Grid style={gridStyle} key={item} >{props.stateIndex? <InProgressTask title={"Current Task"}/>:<PendingTask title={"Heyy"}/>}</Card.Grid>
                             </>
                         )
                     })
                 }
             </Card>
        </div>
    )
}

export default CardWrapper











/*
import React from 'react'
import { Card,Avatar } from 'antd'

const { Meta } = Card

function ProjectCardWrapper(props) {
  
  const gridStyle = {
    width: '100%',
    //textAlign: 'center',
    margin:"00px"
  };


    return (
         <>
        <Card style={{ width: "85vw", marginTop: 16 }} loading={false}>
          <Meta
            avatar={
              <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
            }
            title="Project title"
            // description= {<></>}
          />
            <Card.Grid style={gridStyle} >{props.children}</Card.Grid>
        </Card>
         </>
    )
}

export default ProjectCardWrapper
*/