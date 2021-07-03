import React,{useState,useEffect} from 'react'
import styled from 'styled-components';
import Chart from "react-apexcharts";
import { Col, Row } from 'antd';
import axios from 'axios';

function ProjByAll2(props) {
      const [options1, setoptions1] = useState(null)
    const [series1, setseries1] = useState([])
useEffect(() => {
    if(props.project)
   axios.get(`http://127.0.0.1:8000/project/BI/${props.project}/project-by-title-tasks-phase-type`).then(res => {
    console.log(res.data.categories)
       setoptions1({
          chart: {
            type: 'bar',
            height: 350,
            stacked: true,
            stackType: '100%'
          },
          title: {
            text: 'Project By title (task/phase/type)',
            align: 'left'
          },
          responsive: [{
            breakpoint: 480,
            options: {
              legend: {
                position: 'bottom',
                offsetX: -10,
                offsetY: 0
              }
            }
          }],
          fill: {
            opacity: 1
          },
          legend: {
            position: 'right',
            offsetX: 0,
            offsetY: 50
          },
           xaxis : {categories : res.data.categories}
        })
       setseries1(
         res.data.series
       )
   })
}, [props.project])
    
    return (
        <>
            {options1 && series1.length > 0 && <Chart
                options={options1}
                series={series1}
                type="bar"
                width="450"
            />}
        </>
    );
}

export default ProjByAll2
