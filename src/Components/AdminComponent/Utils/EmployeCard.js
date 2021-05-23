import React from 'react'
import { DeleteOutlined, EditOutlined, ArrowRightOutlined, SettingOutlined, EllipsisOutlined, EyeOutlined } from '@ant-design/icons'
import { Avatar, Card, Skeleton,Progress,Typography,Space, Tooltip } from 'antd'
import { Link } from 'react-router-dom'

const { Meta } = Card
const { Text,Title } = Typography

function Description(){
    return(
        <>
        <div className="XP">
               <Avatar style={{backgroundColor : "#55efc4" }} size={{ xs: 24, sm: 32, md: 40, lg: 64, xl: 80, xxl: 100 }}>
                    {14}
                </Avatar>
        </div>
        <Text>"This mother fucker siahufiehfuierhguirenckdiovrehirw grwnignriwg rwgnrgui"</Text>
    </>
    );
}

const Badges = () => {
    return (
    <div>
             <div>
             <Avatar.Group>
                <Tooltip placement="top" title="conception">
                <Avatar style={{backgroundColor : "#55efc4" }} size="small">
                    {14}
                </Avatar>
                </Tooltip>    
                <Tooltip placement="top" title="Codage">
                <Avatar style={{backgroundColor : "#fdcb6e" }} size="small">
                    {19}
                </Avatar>
                </Tooltip>
                <Tooltip placement="top" title="test">
                <Avatar style={{backgroundColor : "#74b9ff" }} size="small">
                    {6}
                </Avatar>
                </Tooltip>
        </Avatar.Group>    
            </div>   
        </div>
);
}
function EmployeCard() {
    return (
        <div>
               <Card
          style={{ width: 300, marginTop: 16 }}
          actions={[
            <EditOutlined key="edit" />,
            <EyeOutlined key="eye" />,
            <Badges key="badges"/>,
          ]}
        >
          <Skeleton loading={false} avatar active>
            <Meta
              avatar={
                <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
              }
              title="Card title"
              description={<Description />}
            />
          </Skeleton>
        </Card>
        </div>
    )
}

export default EmployeCard
