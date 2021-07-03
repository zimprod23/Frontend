import React,{useState,useEffect} from 'react'
import Chart from "react-apexcharts";
import axios from 'axios';

function ProfileSalarySum() {

      const [options1, setoptions1] = useState(null)
    const [series1, setseries1] = useState([])
useEffect(() => {
   axios.get('http://127.0.0.1:8000/profile/BI/profiles-salary-summary').then(res => {
       setoptions1({
        chart: {
            type: 'boxPlot',
            height: 350
          },
          title: {
            text: 'Profile salary summary',
            align: 'left'
          },
          plotOptions: {
            boxPlot: {
              colors: {
                upper: '#00a8ff',
                lower: '#dff9fb'
              }
            }
          }
        })
       setseries1(
             [{
                  type : "boxPlot",
                  data : [res.data]
            }]
          
       )
   })
}, [])
    
    return (
        <>
            {options1 && series1.length > 0 && <Chart
                options={options1}
                series={series1}
                type="boxPlot"
                width="400"
            />}
        </>
    );
}

export default ProfileSalarySum
