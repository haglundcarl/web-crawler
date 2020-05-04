import React, { Component } from "react";
import { Form, Input, Button, Checkbox } from "antd";
import { connect } from "react-redux";
import { Link, Redirect } from "react-router-dom";
import * as actions from "../store/actions/Auth";

class LoginForm extends Component {
  onFinish = (values) => {
    this.props.onAuth(values.username, values.password);
    this.props.history.push("/profile/");
  };

  onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  render() {
    return (
      <div>
        <Form
          name="basic"
          initialValues={{
            remember: true,
          }}
          onFinish={this.onFinish}
          onFinishFailed={this.onFinishFailed}
        >
          <Form.Item
            label="Username"
            name="username"
            rules={[
              {
                required: true,
                message: "Please input your username!",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[
              {
                required: true,
                message: "Please input your password!",
              },
            ]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item name="remember" valuePropName="checked">
            <Checkbox>Remember me</Checkbox>
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit">
              Login
            </Button>
            <Button type="primary" htmlType="submit" style={{ marginLeft: 10 }}>
              <Link to="/signup">Sign Up</Link>
            </Button>
            <Button type="primary" htmlType="submit" style={{ marginLeft: 10 }}>
              <Link to="/forgotpassword">Forgot password?</Link>
            </Button>
          </Form.Item>
        </Form>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    loading: state.auth.loading,
    error: state.auth.error,
  };
};

const dispatchToProps = (dispatch) => {
  return {
    onAuth: (username, password) =>
      dispatch(actions.authSignIn(username, password)),
  };
};
export default connect(mapStateToProps, dispatchToProps)(LoginForm);
