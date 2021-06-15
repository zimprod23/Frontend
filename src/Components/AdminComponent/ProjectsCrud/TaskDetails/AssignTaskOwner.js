import React from 'react'
import { Modal, Button,Input } from 'antd';

class AssignTaskOwner extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            loading: false,
            visible: false,
          };
    }
   
    showModal = () => {
      this.setState({
        visible: true,
      });
    };
  
    handleOk = () => {
      this.setState({ loading: true });
      setTimeout(() => {
        this.setState({ loading: false, visible: false });
      }, 3000);
    };
  
    handleCancel = () => {
      this.setState({ visible: false });
    };
  
    render() {
      const { visible, loading } = this.state;
      return (
        <>
        <div >
        <Button type="primary" onClick={this.showModal}>
            Assign the task
          </Button>
        </div>
          <Modal
            visible={visible}
            title="Title"
            onOk={this.handleOk}
            onCancel={this.handleCancel}
            footer={[
              <Button key="back" onClick={this.handleCancel}>
                Return
              </Button>,
              <Button key="submit" type="primary" loading={loading} onClick={this.handleOk}>
                Submit
              </Button>,
            ]}
          >
           <Input placeholder="Enter the users mail" type="email" required/>
          </Modal>
        </>
      );
    }
  }


  export default AssignTaskOwner