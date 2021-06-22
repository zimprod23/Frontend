import React, { useState,useEffect } from 'react';
import { Modal, Button,Typography,Progress } from 'antd';


const {Title} = Typography
export default function TaskDetail(props){
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  // useEffect(() => {
  //   console.log('*********************')
  // console.log(props.desc)
  // }, [props.desc])

 

  return (
    <>
      <Button type="primary" onClick={showModal} >
        Show Description
      </Button>
      <Modal title="Task Description" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
        <div style={{textAlign:"center"}}><Title level={4}>{props.desc && props.desc.title}</Title></div>
        <br />
        {<div>{props.desc && props.desc.desc}</div>}
        <br />
        {props.isCancelled?<Progress percent={props.desc && props.desc.progress} status="exception"/>:<Progress percent={props.desc && props.desc.progress} />}
      </Modal>
    </>
  );
};