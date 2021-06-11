import React,{useState} from 'react'
import styled from 'styled-components';
import Chart from "react-apexcharts";
import { Col, Row } from 'antd';

const EmpTb = styled.div`
padding : 5px;
margin: 5px;
display: flex;
flex-wrap: wrap;
height: 98vh;  
`;

function NbrProj(){
    const [options, setoptions] = useState({
        chart: {
          id: "basic-bar"
        },
        xaxis: {
          categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998]
        }
      })
    const [series, setseries] = useState([
        {
          name: "series-1",
          data: [30, 40, 45, 50, 49, 60, 70, 91]
        }
      ])
    return (
        <>
             <Chart
                options={options}
                series={series}
                type="line"
                width="550"
            />
        </>
    );
}

function Donut(){
    const [options, setoptions] = useState({})
    const [series, setseries] = useState([44, 55, 41, 17, 15])
    return (
        <>
          <Chart options={options} series={series} type="donut" width="400" />
        </>
    );
}
function EmpTab() {
    
    return (
        <EmpTb>
            <Row justify="center" gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                 <Col>
                 <div style={{padding:"10px"}}><NbrProj /></div>
                 </Col>
                 <Col>
                     <div style={{padding:"10px"}}><Donut /></div>
                 </Col>
            </Row>
        </EmpTb>
    )
}

export default EmpTab
