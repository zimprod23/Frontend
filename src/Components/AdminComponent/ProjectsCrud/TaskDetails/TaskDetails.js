import React,{useState} from 'react';
import { Breadcrumb, Col, Row, Tooltip,Avatar, Space, Button, Progress, Anchor,Dropdown,Menu } from 'antd';
import { HomeOutlined, ProjectOutlined,ArrowRightOutlined, PlusOutlined } from '@ant-design/icons';
import { Typography } from 'antd'
import styled from 'styled-components';
import AssignedTaskOwner from './AssignTaskOwner';

const SectionOne = styled.div``;

const SectionTwo = styled.div``;

const VarContainer = styled.div`
   display:flex;
   flex-wrap:wrap;
   padding:10px;
   margin: 10px;
   height: 50vh;
   background: #eee;
`;
const { Title,Text } = Typography
const SectionThree = styled.div``;
const SectionFour = styled.div`
display : flex;
justify-content: center;
align-items: center;
flex-wrap: wrap;
background: #eee;

`;



function DropMenu(props){
    
    const menu = (
        <div >
           <Menu style={{
             padding:"15px",
            margin:"15px",
            textAlign:"center",
            backgroundColor:"#7efff5"
        }}>
             <Menu.Item>
                     <Title level={5}>Owner setting</Title>
                </Menu.Item>
                <Menu.Item>
                    <AssignedTaskOwner />
                </Menu.Item>
            </Menu>
        </div>
    );
    return(
        <>
           <Dropdown overlay={menu} placement="bottomCenter" arrow>
             {props.children}
            </Dropdown>
        </>
    )
}

function RenderBreadCumbs({proj,task}){
   
    return(
        <Breadcrumb>
            <Breadcrumb.Item href="/admin">
            <HomeOutlined />
            </Breadcrumb.Item>
            <Breadcrumb.Item href="/admin/projects">
            <ProjectOutlined />
            <span>Projects</span>
            </Breadcrumb.Item>
            <Breadcrumb.Item href={`/admin/projects/${proj}`}>
            <ArrowRightOutlined />
            <span>{proj}</span>
            </Breadcrumb.Item>
            <Breadcrumb.Item>
            <ArrowRightOutlined />
            <span>{task}</span>
            </Breadcrumb.Item>
      </Breadcrumb>
    );
}

function TaskDetails(props) {
    const proj = props.match.params.project_ID;
    const task = props.match.params.task_ID;
    return (
        <div className="Add-Proj">
            <div>
            <RenderBreadCumbs proj={proj} task={task}/>
            </div>
            <SectionOne>
                <br />
                <br />
                 <Title level={2}>Here Title</Title>
                 <Row >
                     <Col span={16}>
                            <Text> sapdkewjfrien ewfojew fewjfopew fewofewfhewsoajfepwf
                                   vrejroe grejgoerpg regnoperg rengopergnoerg regnreopgnre
                                   gregregrkeamd ewfewopfew fwenopfew fewnopfew fewopewfe
                                   fewfpewm ewpfewkf ewfepwfe wfnepf`regreg rgrngreognreop
                            </Text>
                     </Col>
                     <Col span={8}>
                         <div style={{display: `flex`,justifyContent:"flex-end",alignItems:"flex-end"}}>
                             <DropMenu >
                             <Avatar src={`https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png`} size={100} />
                             </DropMenu>
                        </div>
                     </Col>
                 </Row>
            </SectionOne>
            <br />
            <SectionTwo>
               <VarContainer>

               </VarContainer>
            </SectionTwo>
            <SectionThree>
                   <div>
                       <Title level={4}>#Date Limite</Title>
                   </div>
                   <div>
                       <Title level={4}>#Start After</Title>
                   </div>
            </SectionThree>
            <br />
            <Title level={3}>Rapport</Title>
            <SectionFour>
                <div style={{maxWidth: "70vw",padding:"10px",margin:"10px",border:"1px orange",backgroundColor :"#eee"}}>
                    <Text>
                    sapdkewjfrien ewfojew fewjfopew fewofewfhewsoajfepwf
                                   vrejroe grejgoerpg regnoperg rengopergnoerg regnreopgnre
                                   gregregrkeamd ewfewopfew fwenopfew fewnopfew fewopewfe
                                   fewfpewm ewpfewkf ewfepwfe wfnepf`regreg rgrngreognreop
                                   sapdkewjfrien ewfojew fewjfopew fewofewfhewsoajfepwf
                                   vrejroe grejgoerpg regnoperg rengopergnoerg regnreopgnre
                                   gregregrkeamd ewfewopfew fwenopfew fewnopfew fewopewfe
                                   fewfpewm ewpfewkf ewfepwfe wfnepf`regreg rgrngreognreop
                    </Text>
                </div>
            </SectionFour>
        </div>
    )
}


export default TaskDetails
