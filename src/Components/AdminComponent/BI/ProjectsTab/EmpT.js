import React, { useState } from 'react'
import styled from 'styled-components';
import Chart from 'react-apexcharts'
import { Col, Row } from 'antd';

const PrjTab = styled.div`
padding : 5px;
margin: 5px;
display: flex;
flex-wrap: wrap;
`;

function NbrEmp(){  
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
                width="500"
            />
        </>
    );
}

function Histo(){
    const [options, setoptions] = useState( {
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
          <Chart options={options} series={series} type="bar" width="500" />
        </>
    );
}
function EmpTab() {
    return (
        <PrjTab>
           <Row justify="center" gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                 <Col>
                 <div><NbrEmp /></div>
                 </Col>
                 <Col>
                     <div><Histo /></div>
                 </Col>
            </Row>
        </PrjTab>
    )
}

export default EmpTab
