import React, { useState,useEffect } from 'react'
import { Modal, Button,Input } from 'antd';

function DCreportModal(props) {

    const [loading, setloading] = useState(false);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        console.log("From the Report modal" + props.isVisible)
        setVisible(props.isVisible)
    }, [props.isVisible])
   
   const handleOk = () => {
     setloading(true)
      setTimeout(() => {
       setVisible(false);
       setloading(false)
       props.onCloseEvent(false)
      }, 3000);
    };
  
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
           <Input.TextArea placeholder="Enter Your Report" rows={4} type="email" required/>
          </Modal>
        </>
      );
}

export default DCreportModal

