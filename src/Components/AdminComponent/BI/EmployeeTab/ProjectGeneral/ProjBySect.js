import React,{useState,useEffect} from 'react'
import Chart from "react-apexcharts";
import axios from 'axios';

function ProjBySect() {
    const [options, setoptions] = useState({
        chart: {
          id: "Sect"
        },
        xaxis: {
          categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998]
        }
      })
    const [series, setseries] = useState([
        {
          name: "Proj By Secteur",
          data: [30, 40, 45, 50, 49, 60, 70, 91]
        }
      ])
      const [options1, setoptions1] = useState(null)
    const [series1, setseries1] = useState([])
useEffect(() => {
   axios.get('http://127.0.0.1:8000/project/BI/project-by-secteur').then(res => {
       setoptions1({
        chart: {
          width: 380,
          type: 'pie',
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
         res.data.series.data
       )
   })
}, [])
    
    return (
        <>
            {options1 && series1.length > 0 && <Chart
                options={options1}
                series={series1}
                type="pie"
                width="400"
            />}
        </>
    );
}

export default ProjBySect
