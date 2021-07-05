import React,{useState,useEffect, useRef} from 'react'
import styled from 'styled-components';
import { Col, Row,Typography,Button } from 'antd';
import ActiveProj from './ProjectGeneral/ActiveProj';
import ProjBySect from './ProjectGeneral/ProjBySect';
import ProjByType from './ProjectGeneral/ProjectByType';
import ProjByDev from './ProjectGeneral/ProjByDev';
import ProjByAdmin from './ProjectGeneral/ProjByAdmin';
import ProjectTime from './ProjectGeneral/ProjectTime';
import InDangerProjs from './ProjectGeneral/InDangerProjs';
import ReactToPrint from 'react-to-print';

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
                //display:"flex",
                flex: "1",
                flexWrap:"wrap",
                flexBasis:"0",
                //minHeight:"200vh",
                //minWidth:"auto",
            }}
            ref={componentRef}
            >
                <Title level={4}>
                    General Infos
                </Title>
            <Row justify="center" gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                 <Col>
                 <div ><ActiveProj /></div>
                 </Col>
                 <Col>
                     <div ><ProjBySect /></div>
                 </Col>
                 <Col>
                     <div ><ProjByType /></div>
                 </Col>
                 <Col>
                     <div >< ProjByDev/></div>
                 </Col>
                 <Col>
                     <div >< ProjByAdmin/></div>
                 </Col>
                 <Col>
                     <div >< ProjectTime/></div>
                 </Col>
                 <Col>
                     <div style={{padding:"10px"}}>< InDangerProjs/></div>
                 </Col>
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
