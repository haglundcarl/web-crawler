import React, { Component } from "react";
import { Form, Input, Button } from "antd";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "../store/actions/UserProfile";

class ResetPasswordForm extends Component {
  componentWillUnmount() {
    this.props.dispatch(actions.clearStatusMessage());
  }

  handleResetPasswordConfirm = (values) => {
    const token = this.props.match.params.token;
    const uid = this.props.match.params.uid;
    this.props.dispatch(actions.handleResetPasswordConfirm(values, token, uid));
  };

  render() {
    return (
      <div>
        <Form onFinish={this.handleResetPasswordConfirm}>
          <Form.Item
            label="New Password"
            name="new_password1"
            rules={[
              {
                required: true,
                message: "Please input your new password!",
              },
            ]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item
            label="Confirm New Password"
            name="new_password2"
            rules={[
              {
                required: true,
                message: "Please confirm your new password!",
              },
            ]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit">
              Confirm new password
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
export default connect(mapStateToProps)(ResetPasswordForm);
