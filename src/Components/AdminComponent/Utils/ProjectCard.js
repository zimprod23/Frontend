import { DeleteOutlined, EditOutlined, ArrowRightOutlined, SettingOutlined } from '@ant-design/icons'
import { Avatar, Card, Skeleton,Progress,Typography,Space, Tooltip } from 'antd'
import React from 'react'
import { Link } from 'react-router-dom'

const { Meta } = Card
const { Text,Title } = Typography

function Description(){
    return(
        <>
        <div className="Des-Wrapper">
          <Space direction="vertical">
              <Progress type="circle" percent={75} width={80}/>
              <Title  level={4}  >Time li ba9i</Title>
         </Space>
        </div>
        <div className="Phase-Wrapper">
             <div>
             <Avatar.Group>
                <Tooltip placement="top" title="conception">
                <Avatar style={{backgroundColor : "#55efc4" }}>
                    {14}
                </Avatar>
                </Tooltip>    
                <Tooltip placement="top" title="Codage">
                <Avatar style={{backgroundColor : "#fdcb6e" }}>
                    {19}
                </Avatar>
                </Tooltip>
                <Tooltip placement="top" title="test">
                <Avatar style={{backgroundColor : "#74b9ff" }}>
                    {6}
                </Avatar>
                </Tooltip>
        </Avatar.Group>    
            </div>   
        </div>
    </>
    );
}

function ProjectCard() {
    return (
        <div>
            <Link to="/Admin">
             <Card
          style={{ width: 300, marginTop: 16 }}
          actions={[
            <EditOutlined key="edit" />,
            <DeleteOutlined key="ellipsis" />,
            <ArrowRightOutlined key="setting" />,
          ]}
          hoverable
        >
          <Skeleton loading={false} avatar active>
            <Meta
              avatar={
                <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
              }
              title="Project Title"
              description={<Description />}
            />
          </Skeleton>
        </Card>
        </Link>
        </div>
    )
}

export default ProjectCard
