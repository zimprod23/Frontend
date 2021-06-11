import React, { useState } from 'react';
import {
  Form,
  Input,
  Button,
  Radio,
  Select,
  Cascader,
  DatePicker,
  InputNumber,
  TreeSelect,
  Switch,
  Row,Col
} from 'antd';

function AddProjectFormular() {
  const [componentSize, setComponentSize] = useState('large');
  const [form] = Form.useForm();
  const onFormLayoutChange = ({ size }) => {
    setComponentSize(size);
  };

  const prefixSelector = (
    <Form.Item name="prefix" noStyle>
      <Select style={{ width: 70 }} defaultActiveFirstOption>
        <Select.Option value="86">DH</Select.Option>
      </Select>
    </Form.Item>
  );

  return (
    <Row justify={"center"}>
         <Col span={24}>
              
         <Form
         onFinish={() => alert("HShs")}
         form={form}
        labelCol={{
          span: 4,
        }}
        wrapperCol={{
          span: 14,
        }}
        layout="horizontal"
        initialValues={{
          size: componentSize,
        }}
        onValuesChange={onFormLayoutChange}
        size={componentSize}
        scrollToFirstError
      >
        <Form.Item label="Project Title" name="Project Title" value={"52"}
        rules={[
          {
            required: true,
            message: 'Please input The project Title!',
          },
        ]}
        >
          <Input />
        </Form.Item>
        <Form.Item label="Type" name="type" 
         rules={[
          {
            required: true,
            message: 'Please input The project type!',
          },
        ]}
        >
          <Select>
            <Select.Option value="demo">Demo</Select.Option>
            <Select.Option value="demo1">Demo</Select.Option>
            <Select.Option value="demo2">Demo</Select.Option>
          </Select>
        </Form.Item>
        <Form.Item label="Secteur" name="secteur" 
         rules={[
          {
            required: true,
            message: 'Please input The project field!',
          },
        ]}
        >
          <Select>
            <Select.Option value="demo4">Demo</Select.Option>
            <Select.Option value="demo5">Demo</Select.Option>
            <Select.Option value="demo6">Demo</Select.Option>
          </Select>
        </Form.Item>
        <Form.Item label="Device" name="device"
         rules={[
          {
            required: true,
            message: 'Please input The project Device!',
          },
        ]}
        >
          <Select>
            <Select.Option value="demo7">Demo</Select.Option>
            <Select.Option value="demo8">Demo</Select.Option>
            <Select.Option value="demo9">Demo</Select.Option>
          </Select>
        </Form.Item>
        <Form.Item name={"description"} label="Description" 
         rules={[
          {
            required: true,
            message: 'Please input The project Description!',
          },
        ]}
        >
        <Input.TextArea />
      </Form.Item>
        <Form.Item label="Date Limite" name="date_limite" 
         rules={[
          {
            required: true,
            message: 'Please input The project limite date!',
          },
        ]}
        >
          <DatePicker />
        </Form.Item>
        <Form.Item label="Bugjet">
          <Input addonBefore={prefixSelector}/>
        </Form.Item>
        <Form.Item label="Button">
          <Button type={'primary'} htmlType="submit">Create Project</Button>
        </Form.Item>
      </Form>
               
         </Col>
    </Row>
  );
};

export default AddProjectFormular