import React,{ useState,useEffect } from 'react';
import { Row,Col,Image, Divider,Typography,Card,Button, Badge } from 'antd';
import styled from 'styled-components'
import UpdateCV from '../../AdminComponent/Utils/Upload'
import { useSelector,useDispatch } from 'react-redux';
import { load_emp_by_username } from '../../../actions/empAction'




const ProphileContainer = styled.div`
  margin: 10px;
  padding : 10px;
  display : flex;
  flex-wrap:wrap;
  justify-content : center;
  align-items : center;
  //background-color : red;
`;

const { Text } = Typography

const ImageContainer = styled.div`
padding: 7px;
margin: 5px;
display : flex;
flex-wrap: wrap;
justify-content: center;
align-items: center;
//background-color: yellow
`

const SectionContainer = styled.div`
display : flex;
flex-wrap:wrap;
//width: ${({extended}) => (extended ? `800px`:`default`)};
justify-content : center;
align-items : center;
margin: 10px;
//background-color : red;
`

function RenderDetails(props){
  return(
      <div style={{
          display:"block",
          textAlign:"center",
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


function Prophile() {
  const dispatch = useDispatch()
  const auth = useSelector(state => state.auth)
  const emp = useSelector(state => state.emp)
  useEffect(() => {
    if(auth.user){
      dispatch(load_emp_by_username(auth.user.username))
    }
  }, [auth.user])

  const [cv, setcv] = useState("")

    const gridStyle = {
        width: '25%',
        textAlign: 'center',
        margin:"20px"
      };

    return (
        <div>
            <ProphileContainer>
               {auth.user && emp.employee &&
                <Row justify="center" style={{backgroundColor:"#dff9fb",width:"90vw",padding:"10px"}}>
                   
                   <Col span={24}>
                       <SectionContainer>
                       <ImageContainer>
                             <div style={{
                                           padding : "10px",
                                           margin:"10px",
                                           textAlign:"center",
                                           maxWidth:"25vw"
                                       }}>
                         <Badge count={emp.employee.XP} overflowCount={1000000}>
                         <Image
                                width={"100%"}
                                style={{objectFit:"contain"}}
                                src={emp.employee.image && emp.employee.image.length > 10?emp.employee.image:"https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"}
                            />
                         </Badge>
                         </div>
                     </ImageContainer>
                       </SectionContainer>
                   
                   </Col>
                   
                   
                   
                   <Col span={24}>
                       <SectionContainer>
                       <Divider>Informations</Divider>
                       <div style={{display:"block",padding:"10px"}}>
                          <RenderDetails emp={emp.employee}/>
                       </div>
                       
                        </SectionContainer>
                   </Col>
                     
                    <Col span={24}>
                         <SectionContainer>
                         <Divider>Your Badges</Divider>
                              <Card title="Badges" style={{padding:"10px"}}>
                              <Card.Grid style={gridStyle}>Content</Card.Grid>
                                <Card.Grid style={gridStyle}>Content</Card.Grid>
                                <Card.Grid style={gridStyle}>Content</Card.Grid>
                                <Card.Grid style={gridStyle}>Content</Card.Grid>
                                <Card.Grid style={gridStyle}>Content</Card.Grid>
                              </Card>
                         </SectionContainer>
                    </Col>
                    <Col span={24}>
                         <SectionContainer extended={true}>
                         <Divider>Infos</Divider>
                         <div style={{padding:"15px",width:"45vw",display:"block",textAlign:"center"}}>
                           <Text>Change your resume</Text>
                           <br />
                         <UpdateCV onCvChange={(val) => setcv(val)}/>
                         <br />
                         <Text>Download your resume</Text>
                         <br/>
                         <a href={emp.employee.CV} download target="_blank">
                         <Button type="primary">Download</Button>
                         </a>
                         </div>
                         </SectionContainer>
                    </Col>
               </Row>
               }
            </ProphileContainer>
        </div>
    )
}

export default Prophile
