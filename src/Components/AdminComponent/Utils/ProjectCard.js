import { DeleteOutlined, EditOutlined, ArrowRightOutlined, SettingOutlined } from '@ant-design/icons'
import { Avatar, Card, Skeleton,Progress,Typography,Space, Tooltip } from 'antd'
import React,{useEffect} from 'react'
import { Link } from 'react-router-dom'

const { Meta } = Card
const { Text,Title } = Typography

function Description({info}){
   const estimatedPoucentage =  (info.count_Done_tasks * 100) / (info.count_all_tasks)
    return(
        <>
        <div className="Des-Wrapper">
          <Space direction="vertical">
              <Progress type="circle" percent={estimatedPoucentage} width={80}/>
              <Title  level={4}  >{info.date_limit ? info.date_limit:"not yet defined"}</Title>
         </Space>
        </div>
        <div className="Phase-Wrapper">
             <div>
             <Avatar.Group>
                <Tooltip placement="top" title="in progress">
                <Avatar style={{backgroundColor : "#55efc4" }}>
                    {info.count_Inprogress_tasks}
                </Avatar>
                </Tooltip>    
                <Tooltip placement="top" title="Done">
                <Avatar style={{backgroundColor : "#fdcb6e" }}>
                    {info.count_Done_tasks}
                </Avatar>
                </Tooltip>
                <Tooltip placement="top" title="Cancelled">
                <Avatar style={{backgroundColor : "#74b9ff" }}>
                    {info.count_Canceled_tasks}
                </Avatar>
                </Tooltip>
        </Avatar.Group>    
            </div>   
        </div>
    </>
    );
}

function ProjectCard({projectInfos,loadingState}) {
    return (
        <div>
            
             <Card
          style={{ width: 300, marginTop: 16 }}
          actions={[
            <EditOutlined key="edit" />,
            <DeleteOutlined key="ellipsis" />,
            (<Link to={`/admin/projects/${projectInfos.id_pj}`}><ArrowRightOutlined /></Link>)
          ]}
          hoverable
        >
          <Skeleton loading={loadingState} avatar active>
            <Meta
              avatar={
                <Avatar /*src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"*/>
                  {projectInfos.admin.username}
                  </Avatar>
              }
              title={projectInfos.title}
              description={<Description info={projectInfos}/>}
            />
          </Skeleton>
        </Card>
       
        </div>
    )
}

export default ProjectCard
