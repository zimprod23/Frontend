import React,{useState,useEffect} from 'react'
import Chart from "react-apexcharts";
import axios from 'axios';
import 'dayjs/locale/es'
import dayjs from 'dayjs';

function ProjByTitleBurn(props) {
      const [options1, setoptions1] = useState(null)
    const [series1, setseries1] = useState([])
useEffect(() => {
    if(props.project)
   axios.get(`http://127.0.0.1:8000/project/BI/${props.project}/burndown-chart`).then(res => {
    console.log(res.data.categories)
       setoptions1({
        chart: {
            height: 450,
            type: 'line',
            zoom: {
              enabled: false
            }
          },
          dataLabels: {
            enabled: false
          },
          stroke: {
            curve: 'straight'
          },
          title: {
            text: 'Product Trends by Month',
            align: 'left'
          },
          grid: {
            row: {
              colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
              opacity: 0.5
            },
          },
           xaxis : {categories : res.data.categories.map((e,i) => {
            return dayjs(e).format('DD MMM YYYY')
          }),}
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
                type="line"
                width="450"
            />}
        </>
    );
}

export default ProjByTitleBurn
