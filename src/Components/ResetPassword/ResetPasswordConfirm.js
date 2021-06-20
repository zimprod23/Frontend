//import { login } from "../../actions/authAction";
import React, { useState,useEffect } from "react";
import { MailOutlined, LockOutlined,UserOutlined } from "@ant-design/icons";
import { Formik } from "formik";
import * as Yup from "yup";
import  { Redirect } from 'react-router-dom'
import { Form, Input, Button, Checkbox, Typography } from "antd";
import { useDispatch,useSelector } from "react-redux";
import { reset_password_confirm } from "../../actions/authAction";

const { Title } = Typography;

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

function ResetPasswordConfirm(props) {
  const auth = useSelector(state => state.auth)
  const [requestSent, setRequestSent] = useState(false)
  const dispatch = useDispatch();
  const [form] = Form.useForm();

if(requestSent){
  return <Redirect to={'/'}/>
}

const onFinish = values => {
   const uid = props.match.params.uid;
   const token = props.match.params.token;
//    let new_password = values.password;
//    let re_new_password = values.confirm
   let data ={
       uid:uid,
       token:token,
       new_password:values.password,
       re_new_password:values.confirm
   }
//    console.log("-----------")
//    console.log(data)
//    console.log("-----------")
   dispatch(reset_password_confirm(data))
   setRequestSent(true)
 }
  return (
      <div style={{
          display:"flex",
          justifyContent:"center",
          alignItems:"center",
          flexDirection:"column",
          alignContent:"center",
          width:"100vw",
          height:"100vh"
      }}>
          <Title level={3}>Enter new password</Title>
          <div style={{
              minWidth:"50vw"
          }}>
              <br />
            <Form
            {...formItemLayout}
            form={form}
            name="register"
            onFinish={onFinish}
            scrollToFirstError
            >                 
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

            <Form.Item {...tailFormItemLayout}>
                <Button type="primary" htmlType="submit" block>
                   confirm
                </Button>
            </Form.Item>
 
    </Form>
    </div>
    </div>
  );
}

export default ResetPasswordConfirm;

/*

<Form.Item
        name="password"
        label="Password"
        rules={[
          {
            required: true,
            message: 'Please input your password! (min 8 digits and contain characters Aa)',
            pattern:'^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z]).{8,32}$'
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


*/