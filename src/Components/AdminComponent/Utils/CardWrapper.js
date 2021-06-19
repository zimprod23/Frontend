import React from 'react'
import {Card,Typography,Button,Row,Col,Avatar,Progress} from 'antd'
import styled  from 'styled-components';
import TaskDetail from './TaskDetailModal';

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
            <Row justify="space-between" /*style={{padding:"10px"}}*/ wrap gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                <Col /*flex={16}*/ style={{
                    padding : "5px"
                }}>
                <Text>{props.title}</Text>
                </Col>
                <br />
                <Col /*flex={8}*/>
                <div style={{
                    float:"right",
                    textAlign:"center"
                }}>
                        <Button type="primary" size="small" style={{margin: "1px"}}> Start </Button>
                         &nbsp;
                        <TaskDetail style={{margin: "1px"}} />
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
        <div style={{maxWidth:"65vw"}}>
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
