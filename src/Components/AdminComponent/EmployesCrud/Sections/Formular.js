import React, { useState,useContext, useEffect } from 'react';
import { Form, Input, Cascader, Select, Row, Col, Checkbox, Button, AutoComplete,DatePicker } from 'antd';
import { EmpCtxt } from '../../Utils/NewEmpProvider'
import { useSelector } from 'react-redux'
const { Option } = Select;



const formItemLayout = {
  labelCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 8,
    },
  },
  wrapperCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 16,
    },
  },
};
const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0,
    },
    sm: {
      span: 16,
      offset: 8,
    },
  },
};

export default function RegistrationForm(props) {
  const [form] = Form.useForm();
  const { NewEmp } = useContext(EmpCtxt);
  const [formData, setformData] = NewEmp;
  const auth = useSelector(state => state.auth)

  function formatDate(date) {
    var d = new Date(date),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();
  
    if (month.length < 2) 
        month = '0' + month;
    if (day.length < 2) 
        day = '0' + day;
  
    return [year, month, day].join('-');
  }

  const onFinish = (values) => {
    //console.log('Received values of form: ', values);
    setformData({...formData,
      first_name:values.fname,
      last_name:values.lname,
      email:values.email,
      CIN:values.CIN,
      phone:values.prefix+values.phone,
      //type:values.type,
      password:values.password,
      re_password:values.confirm,
      birthdate:formatDate(values.Birthday),
      username:values.username,
      admin:auth.user && auth.user.id
    })
    props.onSave(true)
  };
  useEffect(() => {
  //console.log(formData)
  }, [formData])
  const prefixSelector = (
    <Form.Item name="prefix" noStyle>
      <Select
        style={{
          width: 90,
        }}
        name="prefixselect"
      >
        <Option value="06">+216</Option>
        <Option value="05">+215</Option>
      </Select>
    </Form.Item>
  );


 
  return (
    <Form
      {...formItemLayout}
      form={form}
      name="register"
      onFinish={onFinish}
      initialValues={{
        residence: ['zhejiang', 'hangzhou', 'xihu'],
        prefix: '06',
      }}
      scrollToFirstError
    >
       <Form.Item
        name="fname"
        label="First name"
        tooltip="first name??"
        rules={[
          {
            required: true,
            message: 'Please input your nickname!',

          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name="lname"
        label="Last name"
        tooltip="last name ?"
        rules={[
          {
            required: true,
            message: 'Please input your last name!',

          },
        ]}
      >
        <Input />
      </Form.Item>
       
      <Form.Item
        name="username"
        label="Username"
        tooltip="username  ?"
        rules={[
          {
            required: true,
            message: 'Please input your username!',
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        name="CIN"
        label="CIN"
        tooltip="CIN  ?"
        rules={[
          {
            required: true,
            message: 'Please input your CIN!',
           // pattern:'^(?=.*[0-9]){4,9}$'
          },
        ]}
      >
        <Input/>
      </Form.Item>

      <Form.Item
        name="password"
        label="Password"
        rules={[
          {
            required: true,
            message: 'Please input your password! (min 10 digits and contain characters Aa)',
            pattern:'^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z]).{10,32}$'
          },
        ]}
        hasFeedback
      >
        <Input.Password />
      </Form.Item>

      <Form.Item
        name="confirm"
        label="Confirm Password"
        dependencies={['password']}
        hasFeedback
        rules={[
          {
            required: true,
            message: 'Please confirm your password!',
          },
          ({ getFieldValue }) => ({
            validator(_, value) {
              if (!value || getFieldValue('password') === value) {
                return Promise.resolve();
              }
              return Promise.reject(new Error('The two passwords that you entered do not match!'));
            },
          }),
        ]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item
        name="email"
        label="E-mail"
        rules={[
          {
            type: 'email',
            message: 'The input is not valid E-mail!',
          },
          {
            required: true,
            message: 'Please input your E-mail!',
          },
        ]}
      >
        <Input />
      </Form.Item>
     
      <Form.Item
        name="phone"
        label="Phone Number"
        rules={[
          {
            required: true,
            message: 'Please input your phone number!',
          },
        ]}
      >
        <Input
          addonBefore={prefixSelector}
          style={{
            width: '100%',
          }}
          // value={formData.phone} onChange={(e) => {setformData({...formData,phone:`${e.target.value}${'06'}`})}}
        />
      </Form.Item>
        
      {/* <Form.Item label="Type" name="type" 
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
        <Form.Item
        name="CIN"
        label="CIN"
        tooltip="CIN ?"
        rules={[
          {
            required: true,
            message: 'Please input your CIN!',
            whitespace: true,
          },
        ]}
      >
        <Input />
      </Form.Item> */}
        <Form.Item label="Birthday" name="Birthday" 
         rules={[
          {
            required: true,
            message: 'Please input your birthday!',
          },
        ]}
        >
          <DatePicker />
        </Form.Item>
      <Form.Item {...tailFormItemLayout}>
        <Button type="primary" htmlType="submit" block>
          Save
        </Button>
      </Form.Item>
    </Form>
  )
    }