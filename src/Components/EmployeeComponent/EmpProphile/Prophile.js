import React,{ useState } from 'react';
import { Row,Col,Image, Divider,Typography,Card,Button } from 'antd';
import styled from 'styled-components'
import UpdateCV from '../../AdminComponent/Utils/Upload'


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
max-width: 200px;
overflow: hidden;
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


function Prophile() {

  const [cv, setcv] = useState("")

    const gridStyle = {
        width: '25%',
        textAlign: 'center',
        margin:"20px"
      };

    return (
        <div>
            <ProphileContainer>
               <Row justify="center" style={{backgroundColor:"#dff9fb",width:"90vw",padding:"20px"}}>
                   
                   <Col span={24}>
                       <SectionContainer>
                       <ImageContainer>
                        <Image
                                width={"100%"}
                                style={{objectFit:"contain"}}
                                src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
                            />
                     </ImageContainer>
                       </SectionContainer>
                   
                   </Col>
                   
                   
                   
                   <Col span={24}>
                       <SectionContainer>
                       <Divider>Informations</Divider>
                       <div style={{display:"block",padding:"10px"}}>
                       <Text>dewfiewohfiewfewiofewifehwogw</Text>
                        <br />
                        <Text>dewfiewohfiewfewiofewifehwogw</Text>
                        <br />
                        <Text>dewfiewohfiewfewiofewifehwogw</Text>
                        <br />
                        <Text>dewfiewohfiewfewiofewifehwogw</Text>
                        <br />
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
                         <Button type="primary">Download</Button>
                         </div>
                         </SectionContainer>
                    </Col>
               </Row>
            </ProphileContainer>
        </div>
    )
}

export default Prophile
