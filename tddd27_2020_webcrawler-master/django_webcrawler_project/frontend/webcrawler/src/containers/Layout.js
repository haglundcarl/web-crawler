import React, { Component } from "react";
import { Layout, Menu, Breadcrumb } from "antd";
import { Link } from "react-router-dom";
import * as actions from "../store/actions/Auth";
import { connect } from "react-redux";

const { Header, Content } = Layout;

class HeaderLayout extends Component {
  render() {
    return (
      <Layout className="layout">
        <Header>
          <div className="logo" />
          <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["1"]}>
            <Menu.Item key="1">
              <Link to="/">Home</Link>
            </Menu.Item>
            <Menu.Item key="2">
              <Link to="/posts">Posts</Link>
            </Menu.Item>
            {menuBar(this.props)}
          </Menu>
        </Header>
        <Content style={{ padding: "0 50px" }}>
          <br />
          <br />
          {/* {
            <Breadcrumb style={{ margin: "16px 0" }}>
              <Breadcrumb.Item>
                <Link to="/">Home</Link>
              </Breadcrumb.Item>
              <Breadcrumb.Item>
                <Link to="/">List</Link>
              </Breadcrumb.Item>
            </Breadcrumb>
          } */}
          <div className="site-layout-content">{this.props.children}</div>
        </Content>
        <br />
      </Layout>
    );
  }
}

function menuBar(props) {
  if (props.isAuth) {
    return [
      <Menu.Item key="3">
        <Link to="/profile">Profile</Link>
      </Menu.Item>,
      <Menu.Item key="4" onClick={props.logout}>
        Logout
      </Menu.Item>,
    ];
  } else {
    return (
      <Menu.Item key="3">
        <Link to="/login">Login</Link>
      </Menu.Item>
    );
  }
}

const dispatchToProps = (dispatch) => {
  return {
    logout: () => dispatch(actions.logout()),
  };
};
export default connect(null, dispatchToProps)(HeaderLayout);
