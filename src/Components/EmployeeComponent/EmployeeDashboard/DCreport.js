import React from 'react'
import { Modal, Button,Input } from 'antd';

class AssignTaskOwner extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            loading: false,
            visible: this.props.isVisible,
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
           <Input.TextArea placeholder="Enter Your Report" rows={4} type="email" required/>
          </Modal>
        </>
      );
    }
  }


  export default AssignTaskOwner