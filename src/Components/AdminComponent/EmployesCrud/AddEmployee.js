import React from 'react'
import Formular from './Sections/Formular';
import { Col, Typography,Breadcrumb, Row,Input,Form,Button,Steps, message } from "antd";
import UploadPic from '../Utils/Upload';
import UploadPicture from '../Utils/UploadImage';
import { HomeOutlined, PlusOutlined, UserOutlined } from '@ant-design/icons';
import RightSideFormular from './RightSideFormular';
const { Step } = Steps;

const {Title} = Typography;

function RenderBreadCumbs(){
    return(
        <Breadcrumb>
            <Breadcrumb.Item href="/Admin">
            <HomeOutlined />
            </Breadcrumb.Item>
            <Breadcrumb.Item href="/Admin/Employees">
            <UserOutlined />
            <span>Employees</span>
            </Breadcrumb.Item>
            <Breadcrumb.Item>
            <PlusOutlined />
            <span>Add Employee</span>
            </Breadcrumb.Item>
      </Breadcrumb>
    );
}

const steps = [
  {
    title: 'First',
    content: <Formular />,
  },
  {
    title: 'Second',
    content: <RightSideFormular />,
  },
//   {
//     title: 'Last',
//     content: 'Last-content',
//   },
];

export default  function AddEmployee(){
  const [current, setCurrent] = React.useState(0);

  const next = () => {
    setCurrent(current + 1);
  };

  const prev = () => {
    setCurrent(current - 1);
  };

  return (
    <div style={{
        margin:"15px",
        padding:"25px",
        width:"95vw",
    }}>
        <RenderBreadCumbs />
        <br/>
      <Steps current={current}>
        {steps.map(item => (
          <Step key={item.title} title={item.title} />
        ))}
      </Steps>
      <Row justify="center" style={{maxWidth:"90vw"}}>
      <div 
        style={{
            margin:"10px",
            padding:"25px",
            width:"100vw",
            justifyContent:"center",
            alignItems:"center"
        }}
      >{steps[current].content}</div>
        </Row>
      <div className="steps-action">
        {current < steps.length - 1 && (
          <Button type="primary" onClick={() => next()}>
            Next
          </Button>
        )}
        {current === steps.length - 1 && (
          <Button type="primary" onClick={() => message.success('Processing complete!')}>
            Done
          </Button>
        )}
        {current > 0 && (
          <Button style={{ margin: '0 8px' }} onClick={() => prev()}>
            Previous
          </Button>
        )}
      </div>
    </div>
  );
};










/*

function AddEmployee() {
    return (
        <div className="Add-Formular">
            <Row>
                    <Col span={9}>
                    <div id="Upload">
                        <div>
                            <RenderBreadCumbs />
                        </div>
                        <br/>
                    </div>
                    </Col>
                    
            </Row>
        </div>
    )
}

*/


/*

<div className="Add-Formular">
            <Row>
                    <Col span={9}>
                    <div id="Upload">
                        <div>
                            <RenderBreadCumbs />
                        </div>
                        <br/>
                        <Col span={24}>
                            <Title level={3}>Upload A picture</Title>
                             <UploadPicture />
                        </Col> 
                         <Col span={24}>
                         <Title level={3}>Upload Resume</Title>
                             <UploadPic />
                         </Col>
                         <br/>
                         <Col span={24}>
                         <Title level={3}>Profile infos</Title>
                              <Form name="OtherData">
                              <Form.Item
                                    name="Domaine"
                                    label="Domaine"
                                    tooltip="Your Dev Field?"
                                    rules={[
                                    {
                                        required: true,
                                        message: 'Please input your Domain!',
                                        whitespace: true,
                                    },
                                    ]}
                                >
                                    <Input />
                                </Form.Item>
                                <Form.Item
                                        name="XP"
                                        label="XP"
                                        tooltip="Experience pointes"
                                        rules={[
                                        {
                                            required: true,
                                            message: 'Please input your XP!',
                                
                                        },
                                        ]}
                                    >
                                        <Input />
                                    </Form.Item>
                              </Form>
                              <Button onClick={() => alert("Data sent")} type="primary" block>Save Profile</Button>
                         </Col>
                    </div>  
                    </Col>
                    <Col span={15}>
                    <div id="Form">
                        <Formular />
                    </div>
                    </Col>
            </Row>
        </div>

*/
