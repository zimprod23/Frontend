import React,{useState,useEffect} from 'react'
import Chart from "react-apexcharts";
import axios from 'axios';

function ProProjSect(props) {
      const [options1, setoptions1] = useState(null)
    const [series1, setseries1] = useState([])
useEffect(() => {
    if(props.username)
   axios.get(`http://127.0.0.1:8000/profile/BI/${props.username}/profile-project-secteur`).then(res => {
       setoptions1({
        chart: {
            height: 400,
            type: 'radar',
          },
          title: {
            text: 'Points gained by sector'
          },
          xaxis: {
            categories: res.data.categories
          }
      },)
       setseries1(
         res.data.series
       )
   })
}, [props.username])
    
    return (
        <>
            {options1 && series1.length > 0 && <Chart
                options={options1}
                series={series1}
                type="radar"
                width="450"
            />}
        </>
    );
}

export default ProProjSect
