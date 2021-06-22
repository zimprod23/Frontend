import React,{useEffect} from 'react'
import {Card,Typography,Button,Row,Col,Avatar,Progress, message} from 'antd'
import styled  from 'styled-components';
import TaskDetail from '../../AdminComponent/Utils/TaskDetailModal';
import axios from 'axios';


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

function PendingTask(props){

    const onStartClicked = () => {
        //alert(props.task.id_st)
        axios.put(`http://127.0.0.1:8000/task/${props.task.id_st}/start-task`).then(res => {
                message.success("Task started with success")
        }).catch(err => {
                message.error("Could not start task")
        })
    }

    return(
        <div>
            <Row justify="space-between" /*style={{padding:"10px"}}*/ wrap gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                <Col /*flex={16}*/ style={{
                    padding : "5px"
                }}>
                <Text>{props.task.title}</Text>
                </Col>
                <br />
                <Col /*flex={8}*/>
                <div style={{
                    float:"right",
                    textAlign:"center"
                }}>
                        <Button type="primary" style={{margin: "1px"}} onClick={onStartClicked}> Start </Button>
                         &nbsp;
                        <TaskDetail style={{margin: "1px"}} desc={props.task} isCancelled={props.cn}/>
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
      useEffect(() => {
        console.log('---------------')
        console.log(props.data)
      }, [props.data])
   
    return (
        <div>
            <p>{props.children?props.children:<></>}</p>
             <Card title={props.title} style={{padding:"10px"}} >
                 {
                     props.data && props.data.length > 0? props.data.map((item,index) => {
                         return(
                             <>
                                <Card.Grid style={gridStyle} key={index} ><PendingTask task={item} cn={item.State == 'Ca'?true:false}/></Card.Grid>
                             </>
                         )
                     }):<Title level={4}>No active task in this section ...</Title>
                 }
             </Card>
        </div>
    )
}

export default CardWrapper
