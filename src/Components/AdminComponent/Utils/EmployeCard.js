import React from 'react'
import { DeleteOutlined, EditOutlined, ArrowRightOutlined, SettingOutlined, EllipsisOutlined, EyeOutlined } from '@ant-design/icons'
import { Avatar, Card, Skeleton,Progress,Typography,Space, Tooltip } from 'antd'
import { Link } from 'react-router-dom'

const { Meta } = Card
const { Text,Title } = Typography

function Description(props){
    return(
        <div style={{
          padding:"10px",
          textAlign:"center"
        }}>
        <div className="XP">
               <Avatar style={{backgroundColor : "#55efc4" }} size={{ xs: 24, sm: 32, md: 40, lg: 64, xl: 80, xxl: 100 }}>
                    {props.emp.XP}
                </Avatar>
        </div>
        <Text mark>&#9734;{props.emp.account.email}</Text>
        <br/>
        <Text mark>&#9734;{props.emp.account.first_name} {props.emp.account.last_name}</Text>
        <br />
        <Text mark>&#9734;{props.emp.account.phone}</Text>
    </div>
    );
}

const Badges = (props) => {
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
function EmployeCard(props) {
    return (
        <div>
               <Card
          style={{ width: 350, marginTop: 16 }}
          actions={[
           <Link to={`/admin/employees/${props.emp.account.username}`}><EyeOutlined key="eye" /></Link> ,
            // <Badges key="badges"/>,
          ]}
        >
          <Skeleton loading={false} avatar active>
            <Meta
              avatar={
                <Avatar src={props.emp.image && props.emp.image.length > 10?props.emp.image:"https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"} size="large"/>
              }
              title={props.emp.account.username}
            />
          </Skeleton>
        <Description emp={props.emp}/>
        </Card>
        </div>
    )
}

export default EmployeCard
