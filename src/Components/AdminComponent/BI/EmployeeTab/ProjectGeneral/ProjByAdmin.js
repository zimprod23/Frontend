import React,{useState,useEffect} from 'react'
import Chart from "react-apexcharts";
import axios from 'axios';

function ProjByAdmin() {
      const [options1, setoptions1] = useState(null)
    const [series1, setseries1] = useState([
        {
            "name": "",
            "data": [
                8
            ]
        }
    ])
useEffect(() => {
   axios.get('http://127.0.0.1:8000/project/BI/project-by-Admin').then(res => {
       setoptions1({
        chart: {
            id: "Proj-By-Admn",
            type: 'bar',
            height: 350
          },
        //   plotOptions: {
        //     bar: {
        //       horizontal: false,
        //       columnWidth: '55%',
        //       endingShape: 'rounded'
        //     },
        //   },
        //   dataLabels: {
        //     enabled: false
        //   },
        //   stroke: {
        //     show: true,
        //     width: 2,
        //     colors: ['transparent']
        //   },
           xaxis : {categories : res.data.labels}
        })
       setseries1(
         [res.data.series]
       )
   })
}, [])
    
    return (
        <>
            {options1 && series1.length > 0 && <Chart
                options={options1}
                series={series1}
                type="bar"
                height="400"
            />}
        </>
    );
}

export default ProjByAdmin
