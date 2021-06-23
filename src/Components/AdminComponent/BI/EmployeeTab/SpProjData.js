import React,{useState} from 'react'
import {Row,Col,Input } from 'antd';
import Chart from "react-apexcharts";

const { Search } = Input

function ApexChart(){
   const [series, setseries] = useState([{
    data: [44, 55, 41, 64]
  }])

  const [options, setoptions] = useState({
    chart: {
      type: 'bar',
      height: 430
    },
    plotOptions: {
      bar: {
        horizontal: true,
        dataLabels: {
          position: 'top',
        },
      }
    },
    dataLabels: {
      enabled: true,
      offsetX: -6,
      style: {
        fontSize: '12px',
        colors: ['#fff']
      }
    },
    stroke: {
      show: true,
      width: 1,
      colors: ['#fff']
    },
    tooltip: {
      shared: true,
      intersect: false
    },
    xaxis: {
      categories: ["Done","Cancelled","In progress","Backlog"],
    },
  })

     
      return (
  <div id="chart">
<Chart options={options} series={series} type="bar" height={500} />
</div>
      );

  }




function NbrTasks(){
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
          data: [30, 40, 45, 50, 49, 60, 70, 91].reverse()
        }
      ])
    return (
        <>
             <Chart
                options={options}
                series={series}
                type="line"
                width="600"
            />
        </>
    );
}


function SpProjData() {
    return (
        <div>
            <div style={{padding:"20px"}}>
                <Row justify="end" style={{marginRight:"50px"}}>
                    <Col span={12}>
                       <Search placeholder="input search text"  size={"large"} onSearch={() => alert("YAbhsa")} enterButton />
                    </Col>
                </Row>
            </div>
            <di style={{padding:"10px",margin:"10px"}}>
            <Row justify="center" gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                 <Col>
                 <div><NbrTasks /></div>
                 </Col>
                 <Col>
                 <div><ApexChart /></div>
                 </Col>
            </Row>
            </di>
        </div>
    )
}

export default SpProjData
