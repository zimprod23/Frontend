import React, { useState } from 'react';
import { Modal, Button } from 'antd';

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

  return (
    <>
      <Button type="primary" onClick={showModal}>
        Open Modal
      </Button>
      <Modal title="Task Description" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
        Here goes the description
        {props.desc}
      </Modal>
    </>
  );
};