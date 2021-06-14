import React, { useEffect } from 'react'
import { Breadcrumb,Row,Col,Image,Badge,Button,Avatar } from 'antd'
import { HomeOutlined,UserOutlined,ArrowRightOutlined} from '@ant-design/icons'
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import CardWrapper from '../Utils/CardWrapper';


const RightSideContainer = styled.div`
padding: 10px;
margin: 5px;
display : flex;
flex-wrap: wrap;
justify-content: center;
align-items: center;
background-color:red
`


const LeftSideContainer = styled.div`
padding: 7px;
margin: 5px;
display : flex;
flex-wrap: wrap;
justify-content: center;
align-items: center;
background-color: yellow
`
const BlockSection = styled.div`
padding: 10px;
margin: 5px;
display : block;
`;

const miniBlockContainer = styled.div`
padding: 15px;
margin: 5px;
background-color: orange
`

function RenderBreadCumbs(){
    return(
        <Breadcrumb>
            <Breadcrumb.Item href="/Admin">
            <HomeOutlined />
            </Breadcrumb.Item>
            <Breadcrumb.Item href="/Admin/Employees">
            <UserOutlined />
            <span>Employees</span>
            </Breadcrumb.Item>
            <Breadcrumb.Item>
            <ArrowRightOutlined />
            <span>Employee</span>
            </Breadcrumb.Item>
      </Breadcrumb>
    );
}

function RenderDetails(props){
    return(
        <div style={{
            display:"block",
            textAlign:"center",
            padding:"10px",
            margin:"7px"
        }}>
            <p>Mynxbiefbiuewbgioewbifoew</p>
            <p>Mynxbiefbiuewbgioewbifoew</p>
            <p>Mynxbiefbiuewbgioewbifoew</p>
            <p>Mynxbiefbiuewbgioewbifoew</p>
            <p>Mynxbiefbiuewbgioewbifoew</p>
        </div>
    )
}

function EmpProphile(props) {

    const dispatch = useDispatch();
    const project = useSelector(state => state.project)
    const proj = props.match.params.emp_ID;
   
    useEffect(() => {
        //dispatch(getProjectById(proj))
    }, [])


    return (
        <div style={{
            padding: "10px",
            margin:"10px",

        }}>
              <div
                style={{
                    padding: "10px",
                    margin:"10px",
                }}
                id="Breadcumbs"
              >
                  <RenderBreadCumbs />
              </div>
              <div id="mainSection"  style={{
                    padding: "10px",
                    margin:"10px",
                }}>
                   <Row justify="center" gutter={{xs: 8, sm: 16, md: 24, lg: 32 }} style={{backgroundColor:"blue"}}>
                       <Col flex={2}>
                               <LeftSideContainer>
                                   <BlockSection>
                                       <div style={{
                                           padding : "10px",
                                           margin:"10px",
                                           textAlign:"center"
                                       }}>
                                       <Badge count={99}>
                                    <Image
                                        width={150}
                                        src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
                                        />
                                    </Badge>  
                                       </div>
                                       <RenderDetails />
                                       <div style={{
                                           padding : "10px",
                                           margin:"10px",
                                           textAlign:"center"
                                       }}>
                                       <Button type="primary">Download cv</Button>
                                       </div>
                                   </BlockSection>                
                               </LeftSideContainer>
                       </Col>
                       <Col flex={4}>
                               <RightSideContainer>
                                    <div style={{
                                        padding : "10px"
                                    }}>
                                    <CardWrapper  title={"Asigned"} taskData={4}>
                                        <div style={{
                                            display:"flex",
                                            flexWrap:"wrap",
                                            justifyContent:"space-around",
                                            alignItems:"center"
                                        }}>
                                               <Avatar style={{backgroundColor : "#55efc4" }} size={55}>
                                                    {6}
                                                </Avatar>
                                                <Avatar style={{backgroundColor : "#55efc4" }} size={55}>
                                                    {4}
                                                </Avatar>
                                                <Avatar style={{backgroundColor : "#55efc4" }} size={55}>
                                                    {2}
                                                </Avatar>
                                        </div>
                                    </CardWrapper>
                                     <br/>
                                    <CardWrapper title={"Asigned"} taskData={2}/>
                                     <br/>
                                    <CardWrapper title={"Done"} taskData={8}/>
                                    <br />
                                    <CardWrapper title="Canceled" taskData={5}/>
                                    </div>
                                    
                               </RightSideContainer>
                       </Col>
                   </Row>
              </div>
        </div>
    )
}

export default EmpProphile
