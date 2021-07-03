import React,{useEffect,useState} from 'react'
import { Table } from 'antd';
import axios from 'axios';

function InDangerProjs() {
  const [inDangerData, setinDangerData] = useState(null)
  useEffect(() => {
    axios.get(`http://127.0.0.1:8000/project/BI/project-in-danger`).then(res => {
        setinDangerData(res.data)
    })
  }, [])

    const columns = [
        {
          title: 'Title',
          dataIndex: 'Title',
          render: text => <a>{text}</a>,
        },
        {
          title: 'deadline',
          className: 'column-money',
          dataIndex: 'deadline',
          align: 'right',
        },
        {
          title: 'admin',
          dataIndex: 'admin',
        },
      ];
      
      const data = inDangerData && inDangerData.map((e,i) => {
             return{
               key : i,
               Title : e.title,
               deadline : e.date_limit,
               admin : e.admin.username
             }
      })
      // [
      //   {
      //     key: '1',
      //     name: 'John Brown',
      //     money: '￥300,000.00',
      //     address: 'New York No. 1 Lake Park',
      //   },
      // ];
      
    return (
        <div>
           {inDangerData && <Table
                              columns={columns}
                              dataSource={data}
                              bordered
                              pagination={true}
                              title={() => 'Project in Danger'}
                            />}
        </div>
    )
}

export default InDangerProjs
