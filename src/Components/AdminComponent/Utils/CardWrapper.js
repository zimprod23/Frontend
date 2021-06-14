import React from 'react'
import {Card,Typography,Button} from 'antd'
import styled  from 'styled-components';

const { Text } = Typography
const TodoTask = styled.div`
padding : 20px;
margin  : 7px;
display : flex;
justify-content: center;
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


function CardWrapper(props) {
    const gridStyle = {
        width: '100%',
        textAlign: 'center',
        margin:"00px"
      };
    return (
        <div style={{maxWidth:"60vw"}}>
            <p>{props.children?props.children:<></>}</p>
             <Card title={props.title} style={{padding:"10px"}} >
                 {
                     Array.from(Array(props.taskData).keys()).map((item,index) => {
                         return(
                             <>
                                     <Card.Grid style={gridStyle} key={item}><PendingTask title={"Hello"}/></Card.Grid>
                             </>
                         )
                     })
                 }
             </Card>
        </div>
    )
}

export default CardWrapper
