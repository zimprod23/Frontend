//import { login } from "../../actions/authAction";
import React, { useState } from "react";
import { MailOutlined, LockOutlined,UserOutlined } from "@ant-design/icons";
import { Formik } from "formik";
import * as Yup from "yup";
import  { Redirect } from 'react-router-dom'
import { Form, Input, Button, Checkbox, Typography } from "antd";
import { useDispatch,useSelector } from "react-redux";
import { login } from "../../actions/authAction";

const { Title } = Typography;

function LoginPage(props) {
  const auth = useSelector(state => state.auth)

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

    console.log(auth.isAuthenticated)

  return (
    <Formik
      initialValues={{
        username: "username",
        password: "",
      }}
      validationSchema={Yup.object().shape({
        username: Yup.string()
          .required("Username is required"),
        password: Yup.string()
          .min(4, "Password must be at least 6 characters")
          .required("Password is required"),
      })}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          let dataToSubmit = {
            username: values.username,
            password: values.password,
          };

          dispatch(login(dataToSubmit))
            .then((response) => {
              if (rememberMe)
                window.localStorage.setItem("rememberMe", values.username);
             // props.history.push("/");
            })
            .catch((err) => {
              setFormErrorMessage(
                "Check out your Account from catch block or Password again"
              );
              setTimeout(() => {
                setFormErrorMessage("");
              }, 3000);
            });
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
            <Title level={2}>Log In</Title>
            <form onSubmit={handleSubmit} style={{ width: "350px" }}>
              <Form.Item required>
                <Input
                  id="username"
                  placeholder="Enter your username"
                  type="text"
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  prefix={<UserOutlined />}
                  className={
                    errors.username && touched.username
                      ? "text-input error"
                      : "text-input"
                  }
                />
                {errors.username && touched.username && (
                  <div className="input-feedback">{errors.username}</div>
                )}
              </Form.Item>

              <Form.Item required>
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
              </Form.Item>

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
                <Checkbox
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
                </a>
                <div>
                  <Button
                    type="primary"
                    htmlType="submit"
                    className="login-form-button"
                    style={{ minWidth: "100%" }}
                    disabled={isSubmitting}
                    onSubmit={handleSubmit}
                  >
                    Log in
                  </Button>
                </div>
                Or <a href="/register">register now!</a>
              </Form.Item>
            </form>
          </div>
        );
      }}
    </Formik>
  );
}

export default LoginPage;
