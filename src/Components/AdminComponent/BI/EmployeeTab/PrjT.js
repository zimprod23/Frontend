import React,{useState,useEffect} from 'react'
import styled from 'styled-components';
import Chart from "react-apexcharts";
import { Col, Row } from 'antd';
import ActiveProj from './ProjectGeneral/ActiveProj';
import ProjBySect from './ProjectGeneral/ProjBySect';
import ProjByType from './ProjectGeneral/ProjectByType';
import ProjByDev from './ProjectGeneral/ProjByDev';
import ProjByAdmin from './ProjectGeneral/ProjByAdmin';
import ProjectTime from './ProjectGeneral/ProjectTime';
import InDangerProjs from './ProjectGeneral/InDangerProjs';

const EmpTb = styled.div`
padding : 5px;
margin: 5px;
display: flex;
flex-wrap: wrap;
height: 98vh;  
`;

function EmpTab() {
    
    return (
        <EmpTb>
            <Row justify="center" gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                 <Col>
                 <div style={{padding:"10px"}}><ActiveProj /></div>
                 </Col>
                 <Col>
                     <div style={{padding:"10px"}}><ProjBySect /></div>
                 </Col>
                 <Col>
                     <div style={{padding:"10px"}}><ProjByType /></div>
                 </Col>
                 <Col>
                     <div style={{padding:"10px"}}>< ProjByDev/></div>
                 </Col>
                 <Col>
                     <div style={{padding:"10px"}}>< ProjByAdmin/></div>
                 </Col>
                 <Col>
                     <div style={{padding:"10px"}}>< ProjectTime/></div>
                 </Col>
                 {/* <Col>
                     <div style={{padding:"10px"}}>< InDangerProjs/></div>
                 </Col> */}
            </Row>
        </EmpTb>
    )
}

export default EmpTab
