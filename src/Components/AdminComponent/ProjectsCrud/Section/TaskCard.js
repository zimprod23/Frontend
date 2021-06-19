import React from 'react';
import { Avatar, Card,Progress } from 'antd'
import { Link } from 'react-router-dom'
import styled from 'styled-components';

const { Meta } = Card;

const TaskContainer = styled(Link)``;

function RenderTaskCard(props){
    return(
        <TaskContainer to={`/admin/projects/${props.proj}/${props.info.id_st}`}>
           <Card style={{ minWidth: 300, margin: 18 }} loading={false}>
          <Meta
            avatar={
              <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
            }
            title={props.info.title}
            description={<Progress percent={props.info.progress} status="active"/>}
          />
        </Card>
        </TaskContainer>
    );
}


function TaskCard(props) {
    return (
        <div>
             <TaskContainer>
                    <RenderTaskCard proj={props.proj} info={props.info}/>
             </TaskContainer>
        </div>
    )
}

export default TaskCard
