//import { login } from "../../actions/authAction";
import React, { useState,useEffect } from "react";
import { MailOutlined, LockOutlined,UserOutlined } from "@ant-design/icons";
import { Formik } from "formik";
import * as Yup from "yup";
import  { Redirect } from 'react-router-dom'
import { Form, Input, Button, Checkbox, Typography } from "antd";
import { useDispatch,useSelector } from "react-redux";
import { reset_password } from "../../actions/authAction";

const { Title } = Typography;

function ResetPasswordPage(props) {
  const auth = useSelector(state => state.auth)
  const [requestSent, setRequestSent] = useState(false)
  const dispatch = useDispatch();
  const rememberMeChecked = localStorage.getItem("rememberMe") ? true : false;

  const [formErrorMessage, setFormErrorMessage] = useState("");
  const [rememberMe, setRememberMe] = useState(rememberMeChecked);

  const handleRememberMe = () => {
    setRememberMe(!rememberMe);
  };

  const initialEmail = localStorage.getItem("rememberMe")
    ? localStorage.getItem("rememberMe")
    : "";
// useEffect(() => {
//   console.log(auth.isAthenticated)
//   console.log(props.user)
// }, [auth])
if(requestSent){
  return <Redirect to={'/'}/>
}

  return (
    <Formik
      initialValues={{
        email: "",
    //    password: "",
      }}
      validationSchema={Yup.object().shape({
        email: Yup.string()
          .email("Email is invalid")
          .required("email is required"),
        // password: Yup.string()
        //   .min(4, "Password must be at least 6 characters")
        //   .required("Password is required"),
      })}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
        //   let dataToSubmit = {
        //     email: values.email,
        //     password: values.password,
        //   };

          dispatch(reset_password(values.email))
          setRequestSent(true)
            // .then((response) => {
            //  // if (rememberMe)
            //     //window.localStorage.setItem("rememberMe", values.email);
            //  // props.history.push("/");
            // })
            // .catch((err) => {
            //   setFormErrorMessage(
            //     "Check out your Account from catch block or Password again"
            //   );
            //   setTimeout(() => {
            //     setFormErrorMessage("");
            //   }, 3000);
           // });
          setSubmitting(false);
        }, 500);
      }}
    >
      {(props) => {
        const {
          values,
          touched,
          errors,
          dirty,
          isSubmitting,
          handleChange,
          handleBlur,
          handleSubmit,
          handleReset,
        } = props;
        return (
          <div className="app">
            <Title level={2}>Reset My Password</Title>
            <form onSubmit={handleSubmit} style={{ width: "350px" }}>
              <Form.Item required>
                <Input
                  id="email"
                  placeholder="Enter your email"
                  type="text"
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  prefix={<MailOutlined />}
                  className={
                    errors.email && touched.email
                      ? "text-input error"
                      : "text-input"
                  }
                />
                {errors.email && touched.email && (
                  <div className="input-feedback">{errors.username}</div>
                )}
              </Form.Item>

              {/* <Form.Item required>
                <Input
                  id="password"
                  prefix={<LockOutlined />}
                  placeholder="Enter your password"
                  type="password"
                  value={values.password}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={
                    errors.password && touched.password
                      ? "text-input error"
                      : "text-input"
                  }
                />
                {errors.password && touched.password && (
                  <div className="input-feedback">{errors.password}</div>
                )}
              </Form.Item> */}

              {formErrorMessage && (
                <label>
                  <p
                    style={{
                      color: "#ff0000bf",
                      fontSize: "0.7rem",
                      border: "1px solid",
                      padding: "1rem",
                      borderRadius: "10px",
                    }}
                  >
                    {formErrorMessage}
                  </p>
                </label>
              )}

              <Form.Item>
                {/* <Checkbox
                  id="rememberMe"
                  onChange={handleRememberMe}
                  checked={rememberMe}
                >
                  Remember me
                </Checkbox>
                <a
                  className="login-form-forgot"
                  href="/reset_user"
                  style={{ float: "right" }}
                >
                  forgot password
                </a> */}
                <div>
                  <Button
                    type="primary"
                    htmlType="submit"
                    className="login-form-button"
                    style={{ minWidth: "100%" }}
                    disabled={isSubmitting}
                    onSubmit={handleSubmit}
                  >
                    Reset My password
                  </Button>
                </div>
                {/* Or <a href="/register">register now!</a> */}
              </Form.Item>
            </form>
          </div>
        );
      }}
    </Formik>
  );
}

export default ResetPasswordPage;
