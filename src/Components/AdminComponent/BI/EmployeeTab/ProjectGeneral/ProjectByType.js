import React,{useState,useEffect} from 'react'
import Chart from "react-apexcharts";
import axios from 'axios';

function ProjByType() {
    const [options1, setoptions1] = useState(null)
    const [series1, setseries1] = useState([])
useEffect(() => {
   axios.get('http://127.0.0.1:8000/project/BI/project-by-types').then(res => {
       setoptions1({
        chart: {
          width: 380,
          type: 'pie',
        },
        title: {
          text: 'Project By Type',
          align: 'left'
        },
        labels: res.data.labels,
        responsive: [{
          breakpoint: 480,
          options: {
            chart: {
              width: 200
            },
            legend: {
              position: 'bottom'
            }
          }
        }]
      },)
       setseries1(
         res.data.series[0].data
       )
   })
}, [])
    
    return (
        <>
            {options1 && series1.length > 0 && <Chart
                options={options1}
                series={series1}
                type="donut"
                width="400"
            />}
        </>
    );
}

export default ProjByType
