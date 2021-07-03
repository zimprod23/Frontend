import React,{useState,useEffect} from 'react'
import Chart from "react-apexcharts";
import axios from 'axios';
import 'dayjs/locale/es'
import dayjs from 'dayjs';


function ProjectTime() {

    const [options, setoptions] = useState(null)
    const [series, setseries] = useState([])

    useEffect(() => {
        axios.get('http://127.0.0.1:8000/project/BI/project-time').then(res => {
          // console.log(new Date(res.data.categories[1]).slice(1,3))
          // console.log(dayjs(res.data.categories[2]).format('DD MMM YYYY'))
            setoptions({
                chart: {
                    height: 350,
                    type: 'line',
                    zoom: {
                      enabled: false
                    }
                  },
                  title: {
                    text: 'Project By Time',
                    align: 'left'
                  },
                  dataLabels: {
                    enabled: false
                  },
                  stroke: {
                    curve: 'straight'
                  },
                  grid: {
                    row: {
                      colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
                      opacity: 0.5
                    },
                  },
                  xaxis: {
                    categories: res.data.categories.map((e,i) => {
                      return dayjs(e).format('DD MMM YYYY')
                    }),
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
                width="400"
            />}
        </div>
    )
}

export default ProjectTime


