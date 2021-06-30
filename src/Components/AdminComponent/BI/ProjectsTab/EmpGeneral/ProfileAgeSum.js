import React,{useState,useEffect} from 'react'
import Chart from "react-apexcharts";
import axios from 'axios';

function ProfileAgeSum() {

      const [options1, setoptions1] = useState(null)
    const [series1, setseries1] = useState([])
useEffect(() => {
   axios.get('http://127.0.0.1:8000/profile/BI/profiles-age-summary').then(res => {
       setoptions1({
        chart: {
            type: 'boxPlot',
            height: 350
          },
          title: {
            text: 'Basic BoxPlot Chart',
            align: 'left'
          },
          plotOptions: {
            boxPlot: {
              colors: {
                upper: '#5C4742',
                lower: '#A5978B'
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

export default ProfileAgeSum
