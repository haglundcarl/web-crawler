import React, { Component, useState } from "react";
import { Form, Input, Button, Tooltip, Checkbox } from "antd";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import * as actions from "../store/actions/Auth";
import { QuestionCircleOutlined } from "@ant-design/icons";

class SignUpForm extends Component {
  onFinish = (values) => {
    this.props.onAuth(
      values.username,
      values.password1,
      values.password2,
      values.email,
      values.firstname,
      values.lastname
    );
    this.props.history.push("/login");
    // window.location.reload();
  };

  onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  render() {
    return (
      <div>
        <Form
          onFinish={this.onFinish}
          initialValues={{
            email: "testX@test.com",
            username: "testX",
            firstname: "test",
            lastname: "testsson",
            password1: "carl1234",
            password2: "carl1234",
          }}
        >
          <Form.Item
            name="email"
            label="E-mail"
            rules={[
              {
                type: "email",
                message: "The input is not valid E-mail!",
              },
              {
                required: true,
                message: "Please input your E-mail!",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            name="firstname"
            label="First name"
            rules={[
              {
                message: "Input your name!",
              },
              {
                required: true,
                message: "Please input your name!",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            name="lastname"
            label="Last name"
            rules={[
              {
                message: "Input your last name!",
              },
              {
                required: true,
                message: "Please input your last name!",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            name="password1"
            label="Password"
            rules={[
              {
                required: true,
                message: "Please input your password!",
              },
            ]}
            hasFeedback
          >
            <Input.Password />
          </Form.Item>

          <Form.Item
            name="password2"
            label="Confirm Password"
            dependencies={["password"]}
            hasFeedback // Used for validating passwords
            rules={[
              {
                required: true,
                message: "Please confirm your password!",
              },
              ({ getFieldValue }) => ({
                validator(rule, value) {
                  if (!value || getFieldValue("password1") === value) {
                    return Promise.resolve();
                  }

                  return Promise.reject(
                    "The two passwords that you entered do not match!"
                  );
                },
              }),
            ]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item
            name="username"
            label={
              <span>
                Username&nbsp;
                <Tooltip title="What do you want others to call you?">
                  <QuestionCircleOutlined />
                </Tooltip>
              </span>
            }
            rules={[
              {
                required: true,
                message: "Please input your username!",
                whitespace: true,
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            name="agreement"
            valuePropName="checked"
            rules={[
              {
                validator: (_, value) =>
                  value
                    ? Promise.resolve()
                    : Promise.reject("Should accept agreement"),
              },
            ]}
          >
            <Checkbox>
              I have read the{" "}
              <a href="https://i.imgur.com/5PR01ln.gif">agreement</a>
            </Checkbox>
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              Register
            </Button>
          </Form.Item>
        </Form>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    loading: state.loading,
    error: state.error,
  };
};

const dispatchToProps = (dispatch) => {
  return {
    onAuth: (username, password1, password2, email, firstname, lastname) =>
      dispatch(
        actions.authSignUp(
          username,
          password1,
          password2,
          email,
          firstname,
          lastname
        )
      ),
  };
};
export default connect(mapStateToProps, dispatchToProps)(SignUpForm);
