import React,{useState,useEffect} from 'react'
import Chart from "react-apexcharts";
import axios from 'axios';


function ProjectTime() {

    const [options, setoptions] = useState(null)
    const [series, setseries] = useState([])

    useEffect(() => {
        axios.get('http://127.0.0.1:8000/project/BI/project-time').then(res => {
            setoptions({
                chart: {
                    height: 350,
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
                  xaxis: {
                    categories: res.data.categories,
                  }
           },)
            setseries(
              res.data.series
            )
        })
     }, [])

    return (
        <div>
            {options && series.length > 0 && <Chart
                options={options}
                series={series}
                type="line"
                width="450"
            />}
        </div>
    )
}

export default ProjectTime


