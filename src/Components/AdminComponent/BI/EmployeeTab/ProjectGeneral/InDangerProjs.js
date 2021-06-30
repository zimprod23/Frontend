import React from 'react'
import { Table } from 'antd';

function InDangerProjs() {
    const columns = [
        {
          title: 'Name',
          dataIndex: 'name',
          render: text => <a>{text}</a>,
        },
        {
          title: 'Cash Assets',
          className: 'column-money',
          dataIndex: 'money',
          align: 'right',
        },
        {
          title: 'Address',
          dataIndex: 'address',
        },
      ];
      
      const data = [
        {
          key: '1',
          name: 'John Brown',
          money: '￥300,000.00',
          address: 'New York No. 1 Lake Park',
        },
     
      ];
      
    return (
        <div>
            <Table
    columns={columns}
    dataSource={data}
    bordered
    pagination={true}
    title={() => 'Project in Danger'}
  />
        </div>
    )
}

export default InDangerProjs
