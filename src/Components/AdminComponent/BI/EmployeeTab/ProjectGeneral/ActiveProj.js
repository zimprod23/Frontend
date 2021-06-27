import React,{useState,useEffect} from 'react'
import styled from 'styled-components';
import Chart from "react-apexcharts";
import { Col, Row } from 'antd';
import axios from 'axios';

function ActiveProj() {
    const [options, setoptions] = useState({
        chart: {
          id: "Active-proj"
        },
        xaxis: {
          categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998]
        }
      })
    const [series, setseries] = useState([
        {
          name: "Active Projects",
          data: [30, 40, 45, 50, 49, 60, 70, 91]
        }
      ])
      const [options1, setoptions1] = useState(null)
    const [series1, setseries1] = useState([])
useEffect(() => {
   axios.get('http://127.0.0.1:8000/project/BI/archive-active-project').then(res => {
       setoptions1({
        chart: {
            id: "Active-proj"
          },
           xaxis : {categories : res.data.categories}
        })
       setseries1(
         [ res.data.series]
       )
   })
}, [])
    
    return (
        <>
            {options1 && series1.length > 0 && <Chart
                options={options1}
                series={series1}
                type="bar"
                width="400"
            />}
        </>
    );
}

export default ActiveProj
