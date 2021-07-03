import React,{useState,useEffect} from 'react'
import Chart from "react-apexcharts";
import axios from 'axios';
import 'dayjs/locale/es'
import dayjs from 'dayjs';


function ProXpWeek(props) {

    const [options, setoptions] = useState(null)
    const [series, setseries] = useState([])

    useEffect(() => {
        if(props.username)
        axios.get(`http://127.0.0.1:8000/profile/BI/${props.username}/profile-xp-by-weeks`).then(res => {
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
                    text: 'Profile XP by weeks',
                    align: 'left'
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
     }, [props.username])

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

export default ProXpWeek


