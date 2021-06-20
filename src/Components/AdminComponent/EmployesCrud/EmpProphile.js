import React, { useEffect } from 'react'
import { Breadcrumb,Row,Col,Image,Badge,Button,Avatar,Skeleton,Typography } from 'antd'
import { HomeOutlined,TeamOutlined ,ArrowRightOutlined} from '@ant-design/icons'
import { useDispatch, useSelector } from 'react-redux';
import { Link, Redirect } from 'react-router-dom'
import { load_emp_by_username } from '../../../actions/empAction'
import styled from 'styled-components';
import CardWrapper from '../Utils/CardWrapper';
import BadgesWrapper from '../Utils/BadgesWrapper';

const {Text} = Typography

const RightSideContainer = styled.div`
padding: 10px;
margin: 5px;
display : flex;
flex-wrap: wrap;
justify-content: center;
align-items: center;
// background-color:red
`


const LeftSideContainer = styled.div`
padding: 7px;
margin: 5px;
display : flex;
flex-wrap: wrap;
justify-content: center;
align-items: center;
//background-color: yellow
`
const BlockSection = styled.div`

display : block;
`;

const miniBlockContainer = styled.div`
padding: 15px;
margin: 5px;
background-color: orange
`

function RenderBreadCumbs({emp}){
    return(
        <Breadcrumb>
            <Breadcrumb.Item href="/Admin">
            <HomeOutlined />
            </Breadcrumb.Item>
            <Link to={'/admin/employees'}>
            <Breadcrumb.Item >
            <TeamOutlined />
            <span>employees</span>
            </Breadcrumb.Item>
            </Link>
            <Breadcrumb.Item>
            <ArrowRightOutlined />
            <span>{emp}</span>
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
            <Text type="success">{props.emp.domaine}</Text>
            <p>{props.emp.account.first_name}&nbsp;&nbsp;{props.emp.account.last_name}</p>
            <p>{props.emp.account.email}</p>
            <p>{props.emp.account.CIN}</p>
            <p>{props.emp.account.phone}</p>
            <p>salaire : {props.emp.sal}$</p>
        </div>
    )
}

function EmpProphile(props) {

    const dispatch = useDispatch();
    const emp = useSelector(state => state.emp)
    const employee = props.match.params.emp_ID;
   
    useEffect(() => {
        dispatch(load_emp_by_username(employee))
    }, [])

 if(emp.employee){
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
                  <RenderBreadCumbs emp={employee}/>
              </div>
              <div id="mainSection"  style={{
                    padding: "10px",
                    margin:"10px",
                }}>
                   <Row justify="center" /*gutter={{xs: 8, sm: 16, md: 24, lg: 32 }} */style={{backgroundColor:"#dff9fb"}}>
                       <Col lg={9} md={9} sm={24} xs={24}>
                               <LeftSideContainer>
                                   <BlockSection>
                                       <div style={{
                                           padding : "10px",
                                           margin:"10px",
                                           textAlign:"center"
                                       }}>
                                       <Badge count={emp.employee.XP} overflowCount={1000000}>
                                    <Image
                                        width={150}
                                        src={emp.employee.image && emp.employee.image.length > 10?emp.employee.image:"https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"}
                                        />
                                    </Badge>  
                                       </div>
                                       <RenderDetails emp={emp.employee}/>
                                       <div style={{
                                           padding : "10px",
                                           margin:"10px",
                                           textAlign:"center"
                                       }}>
                                        <a href={emp.employee.CV && emp.employee.CV.length>10?emp.employee.CV:'https://firebasestorage.googleapis.com/v0/b/projecy-storage.appspot.com/o/used_code.txt?alt=media&token=c258adb4-bd58-4a53-b178-9205a598bcff'} download>
                                           <Button type="primary">Download cv</Button>
                                        </a>
                                       </div>
                                       <div >
                                         <BadgesWrapper />
                                       </div>  
                                   </BlockSection>              
                               </LeftSideContainer>
                       </Col>
                       <Col lg={15} md={15} sm={24} xs={24}>
                               <RightSideContainer>
                                    <div style={{
                                        padding : "10px"
                                    }}>
                                    <CardWrapper  title={"In progress"} taskData={1} stateIndex={true}>
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
                                    <CardWrapper title={"Done"} taskData={8} stateIndex={false}/>
                                    <br />
                                    <CardWrapper title="Canceled" taskData={5} stateIndex={false}/>
                                    </div>
                                    
                               </RightSideContainer>
                       </Col>
                   </Row>
              </div>
        </div>
    )
 }else if(emp.load_err){
       return <Redirect to={'/admin/employees'} />
 }else{
     return(
         <>
         <Skeleton active />
         <Skeleton active />
         <Skeleton active />
         </>
     )
 }
    
}

export default EmpProphile
