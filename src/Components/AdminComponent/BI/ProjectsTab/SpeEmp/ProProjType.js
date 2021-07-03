import React,{useState,useEffect} from 'react'
import Chart from "react-apexcharts";
import axios from 'axios';

function ProProjType(props) {
      const [options1, setoptions1] = useState(null)
    const [series1, setseries1] = useState([])
useEffect(() => {
    if(props.username)
   axios.get(`http://127.0.0.1:8000/profile/BI/${props.username}/profile-project-type`).then(res => {
    setoptions1({
        chart: {
          width: 350,
          type: 'pie',
        },
        title: {
          text: 'Profile by projects type'
        },
        labels: res.data.categories,
        responsive: [{
          breakpoint: 480,
          options: {
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
}, [props.username])
    
    return (
        <>
            {options1 && series1.length > 0 && <Chart
                options={options1}
                series={series1}
                type="pie"
                width="350"
            />}
        </>
    );
}

export default ProProjType
