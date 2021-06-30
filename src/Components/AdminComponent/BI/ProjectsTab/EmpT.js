import React,{useState,useEffect, useRef} from 'react'
import styled from 'styled-components';
import { Col, Row,Typography,Button } from 'antd';
import ReactToPrint from 'react-to-print';
import AdminProfile from './EmpGeneral/AdminProfile';
import ProfileTime from './EmpGeneral/ProfileTime';
import ProfileSalarySum from './EmpGeneral/ProfileSalarySum';
import ProfileAgeSum from './EmpGeneral/ProfileAgeSum';
import ProfileXpSum from './EmpGeneral/ProfileXpSum';

const {Title} = Typography
const EmpTb = styled.div`
padding : 5px;
margin: 5px;
display: flex;
flex-wrap: wrap;
height: 98vh;  
`;

function EmpTab() {
    const componentRef = useRef()
    return (
        <EmpTb>
            <div style={{
                flex: "1",
                flexWrap:"wrap",
                flexBasis:"0",
            }}
            ref={componentRef}
            >
                <Title level={4}>
                    General Infos
                </Title>
                <br />
            <Row justify="center" gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                 <Col>
                 <div ><AdminProfile /></div>
                 </Col>
               
                 <Col>
                     <div ><ProfileTime /></div>
                 </Col>
                   <Col>
                     <div ><ProfileSalarySum /></div>
                 </Col>
                 <Col>
                     <div >< ProfileAgeSum/></div>
                 </Col>
                <Col>
                     <div >< ProfileXpSum/></div>
                 </Col>
                 {/* <Col>
                     <div >< ProjectTime/></div>
                 </Col> */}

            </Row>
            </div>     
            <ReactToPrint
        trigger={() => <Button type="primary" >Print General</Button>}
        content={() => componentRef.current}
      />       
        </EmpTb>
    )
}

export default EmpTab
