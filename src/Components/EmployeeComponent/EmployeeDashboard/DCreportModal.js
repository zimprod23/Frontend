import React, { useState,useEffect } from 'react'
import { Modal, Button,Input,message } from 'antd';
import axios from 'axios';

function DCreportModal(props) {

    const [loading, setloading] = useState(false);
    const [visible, setVisible] = useState(false);
    const [report, setreport] = useState("")

    useEffect(() => {
        console.log("From the Report modal" + props.isVisible)
        setVisible(props.isVisible)
    }, [props.isVisible])
 
   const handleOk = () => {
    const data = {
      progress : 100
    }
    const body = {
      rapport : report,
      State : props.taskState.status == 'Done'?'D':'Ca',
      emp : props.taskState.emp
    }
    
    axios.put(`http://127.0.0.1:8000/task/${props.taskState.taskId}/progress`,data).then(res => {
        axios.post(`http://127.0.0.1:8000/task/${props.taskState.taskId}/end-task`,body).then(res => {
          message.success("Task Ended")
          setloading(true)
         setTimeout(() => {
          setVisible(false);
          setloading(false)
          props.onCloseEvent(false)
         }, 3000);
        }).catch(err => {
          message.error("Oooops Could not end task")
        })
    }).catch(err => {
        message.error("Oooops something went wrong")
    })
    };
const handleReportChange = (e) => {
  setreport(e.target.value)
}
    console.log(props.taskState)
  
   const handleCancel = () => {
    setVisible(false);
    props.onCloseEvent(false)
    };
  
      return (
        <>
          <Modal
            visible={visible}
            title="Report"
            onOk={handleOk}
            onCancel={handleCancel}
            centered
            width={900}
            footer={[
              <Button key="back" onClick={handleCancel}>
                Return
              </Button>,
              <Button key="submit" type="primary" loading={loading} onClick={handleOk}>
                Submit Report
              </Button>,
            ]}
          >
           <Input.TextArea placeholder="Enter Your Report" rows={4} value={report} onChange={handleReportChange} type="email" required/>
          </Modal>
        </>
      );
}

export default DCreportModal

