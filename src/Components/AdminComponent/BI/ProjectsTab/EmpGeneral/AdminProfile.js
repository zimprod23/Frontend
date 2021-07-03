import React,{useState,useEffect} from 'react'
import Chart from "react-apexcharts";
import axios from 'axios';

function AdminProfile() {

      const [options1, setoptions1] = useState(null)
    const [series1, setseries1] = useState([])
useEffect(() => {
   axios.get('http://127.0.0.1:8000/profile/BI/admin-profile').then(res => {
       setoptions1({
        chart: {
            id: "Active-proj"
          },
          title: {
            text: 'Profile by admin',
            align: 'left'
          },
           xaxis : {categories : res.data.categories}
        })
       setseries1(
         res.data.series
       )
   })
}, [])
    
    return (
        <>
            {options1 && series1.length > 0 && <Chart
                options={options1}
                series={series1}
                type="bar"
                width="400"
            />}
        </>
    );
}

export default AdminProfile
