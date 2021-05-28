import React from 'react';
import { Avatar, Card } from 'antd'
import { Link } from 'react-router-dom'
import styled from 'styled-components';

const { Meta } = Card;

const TaskContainer = styled(Link)``;

function RenderTaskCard(props){
    return(
        <TaskContainer to={`/admin/projects/${props.proj}/${`MunyanÑo`}`}>
           <Card style={{ width: 350, margin: 18 }} loading={false}>
          <Meta
            avatar={
              <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
            }
            title="Card title"
            description="This is the description"
          />
        </Card>
        </TaskContainer>
    );
}


function TaskCard(props) {
    return (
        <div>
             <TaskContainer>
                    <RenderTaskCard proj={props.proj}/>
             </TaskContainer>
        </div>
    )
}

export default TaskCard
