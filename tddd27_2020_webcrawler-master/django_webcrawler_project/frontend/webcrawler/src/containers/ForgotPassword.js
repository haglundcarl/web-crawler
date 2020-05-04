import React, { Component } from "react";
import { Form, Input, Button } from "antd";
import { connect } from "react-redux";
import * as actions from "../store/actions/UserProfile";

class ForgotPasswordForm extends Component {
  handleResetPassword = (values) => {
    this.props.dispatch(actions.handleResetPassword(values));
  };

  componentWillUnmount() {
    this.props.dispatch(actions.clearStatusMessage());
  }

  render() {
    return (
      <div>
        <Form onFinish={this.handleResetPassword}>
          <Form.Item
            label="Email"
            name="email"
            rules={[
              {
                required: true,
                message: "Please enter your email!",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit">
              Reset password
            </Button>
          </Form.Item>
          {this.props.statusMessage}
        </Form>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    statusMessage: state.user.statusMessage,
  };
}
export default connect(mapStateToProps)(ForgotPasswordForm);
