import React,{useState,useEffect} from 'react'
import Chart from "react-apexcharts";
import axios from 'axios';
import 'dayjs/locale/es'
import dayjs from 'dayjs';

function BestEmployees(props) {
      const [options1, setoptions1] = useState(null)
    const [series1, setseries1] = useState([])
useEffect(() => {
    if(props.project)
   axios.get(`http://127.0.0.1:8000/project/BI/${props.project}/project-best-employess`).then(res => {
    console.log(res.data.categories)
       setoptions1({
        chart: {
            type: 'bar',
            height: 350
          },
          plotOptions: {
            bar: {
              borderRadius: 4,
              horizontal: true,
            }
          },
          dataLabels: {
            enabled: false
          },
          xaxis: {
            categories: res.data.categories
          }
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

export default BestEmployees
