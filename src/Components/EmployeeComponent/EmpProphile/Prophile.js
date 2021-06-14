import React from 'react';
import { Row,Col,Image, Divider,Typography,Card } from 'antd';
import styled from 'styled-components'

const ProphileContainer = styled.div`
  margin: 15px;
  padding : 20px;
  display : flex;
  flex-wrap:wrap;
  justify-content : center;
  align-items : center;
  background-color : red;
`;

const { Text } = Typography

const ImageContainer = styled.div`
max-width: 200px;
overflow: hidden;
`

const SectionContainer = styled.div`
display : flex;
flex-wrap:wrap;
justify-content : center;
align-items : center;
background-color : red;
margin: 10px
`


function Prophile() {

    const gridStyle = {
        width: '25%',
        textAlign: 'center',
        margin:"20px"
      };

    return (
        <div>
            <ProphileContainer>
               <Row justify="center" style={{backgroundColor:"blue",width:"85vw",padding:"20px"}}>
                   
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
                         <SectionContainer>
                         <Divider>Change Infos</Divider>
                              <Card title="Badges" style={{padding:"10px"}}>
                              <Card.Grid style={gridStyle}>Content</Card.Grid>
                                <Card.Grid style={gridStyle}>Content</Card.Grid>
                                <Card.Grid style={gridStyle}>Content</Card.Grid>
                                <Card.Grid style={gridStyle}>Content</Card.Grid>
                                <Card.Grid style={gridStyle}>Content</Card.Grid>
                              </Card>
                         </SectionContainer>
                    </Col>
               </Row>
            </ProphileContainer>
        </div>
    )
}

export default Prophile
