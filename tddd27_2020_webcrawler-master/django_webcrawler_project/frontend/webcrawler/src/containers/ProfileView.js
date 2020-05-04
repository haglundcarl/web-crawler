import React, { Component } from "react";
import { Link } from "react-router-dom";
import {
  Layout,
  Menu,
  Descriptions,
  Input,
  Button,
  Form,
  List,
  Avatar,
} from "antd";
import * as userActions from "../store/actions/UserProfile";
import * as postActions from "../store/actions/Posts";
import { connect } from "react-redux";
import {
  SettingOutlined,
  CommentOutlined,
  FrownOutlined,
  MessageOutlined,
  LikeOutlined,
  StarOutlined,
} from "@ant-design/icons";
import axios from "axios";

const { SubMenu } = Menu;
const { Content, Sider } = Layout;
const IconText = ({ icon, text }) => (
  <span>
    {React.createElement(icon, { style: { marginRight: 8 } })}
    {text}
  </span>
);

class ProfileView extends Component {
  componentWillUnmount() {
    this.props.dispatch(userActions.clearStatusMessage());
  }

  state = {
    selected: ["NONE"],
  };

  handleChangePassword = (values) => {
    this.props.dispatch(userActions.handleChangePassword(values));
  };

  getUserInfo(key) {
    this.props.dispatch(userActions.getUserData());
    this.updateState(key);
  }

  getUserPosts(key, userID) {
    this.props.dispatch(postActions.getUserPosts(userID));
    this.updateState(key);
  }

  updateState(key) {
    this.state.selected = key;
    this.forceUpdate();
  }

  content() {
    switch (this.state.selected) {
      case "new":
        return <div>new</div>;
        break;
      case "top":
        return <div>top</div>;
        break;
      case "submitted":
        return (
          <List
            // itemLayout="vertical"
            // Regulates the amount of posts that can be seen on each page
            pagination={{
              onChange: (page) => {},
              pageSize: 10,
            }}
            dataSource={this.props.posts}
            renderItem={(item) => (
              <List.Item
                key={item.title}
                actions={[
                  // <IconText
                  //   icon={StarOutlined}
                  //   text="156"
                  //   key="list-vertical-star-o"
                  // />,
                  <IconText
                    icon={LikeOutlined}
                    text={item.likes}
                    key="list-vertical-like-o"
                  />,
                  <IconText
                    icon={MessageOutlined}
                    text="2"
                    key="list-vertical-message"
                  />,
                ]}
              >
                <List.Item.Meta
                  avatar={<Avatar src={item.avatar} />}
                  title={<Link to={`/posts/${item.id}`}>{item.title}</Link>}
                  description={item.user_content}
                />
                {/* {console.log(item)}
                {console.log(item.creator)}
                {console.log(item.username)} */}
              </List.Item>
            )}
          />
        );
        break;
      case "bookmarked":
        return <div>bookmarked</div>;
        break;
      case "account":
        return (
          <div>
            <Descriptions title="User Info" layout="vertical">
              <Descriptions.Item label="UserName">
                {this.props.username}
              </Descriptions.Item>
              <Descriptions.Item label="First name">
                {this.props.firstname}
              </Descriptions.Item>
              <Descriptions.Item label="Last name">
                {this.props.lastname}
              </Descriptions.Item>
              <Descriptions.Item label="Email" span={2}>
                {this.props.email}
              </Descriptions.Item>
            </Descriptions>
          </div>
        );
        break;
      case "change password":
        return (
          <Form onFinish={this.handleChangePassword}>
            <Form.Item
              label="Current Password"
              name="old_password"
              rules={[
                {
                  required: true,
                  message: "Please input your current password!",
                },
              ]}
            >
              <Input.Password />
            </Form.Item>
            <br />
            <Form.Item
              label="New Password"
              name="new_password1"
              rules={[
                {
                  required: true,
                  message: "Please input your new password",
                },
              ]}
            >
              <Input.Password />
            </Form.Item>
            <br />
            <Form.Item
              label="New Password"
              name="new_password2"
              rules={[
                {
                  required: true,
                  message: "Please input your new password again",
                },
              ]}
            >
              <Input.Password />
            </Form.Item>
            <br />
            <Button type="primary" htmlType="submit">
              Change Password
            </Button>
            <div>{this.props.statusMessage}</div>
          </Form>
        );
        break;
      default:
        return <div>Normal account page :)</div>;
    }
  }

  render() {
    return (
      <Layout>
        {this.props.isAuth ? (
          [
            <Content>
              <Layout className="site-layout-background">
                <Sider className="site-layout-background" width={200}>
                  <Menu mode="inline" style={{ height: "100%" }}>
                    <SubMenu
                      key="sub1"
                      title={
                        <span>
                          <CommentOutlined />
                          Comments
                        </span>
                      }
                    >
                      <Menu.Item
                        key="new"
                        onClick={() => {
                          this.updateState("new");
                        }}
                      >
                        New
                      </Menu.Item>

                      <Menu.Item
                        key="top"
                        onClick={() => {
                          this.updateState("top");
                        }}
                      >
                        Top
                      </Menu.Item>
                    </SubMenu>
                    <SubMenu
                      key="sub2"
                      title={
                        <span>
                          <FrownOutlined />
                          Scams
                        </span>
                      }
                    >
                      <Menu.Item
                        key="submitted"
                        onClick={() => {
                          this.getUserPosts("submitted");
                        }}
                      >
                        Submitted
                      </Menu.Item>
                      <Menu.Item
                        key="bookmarked"
                        onClick={() => {
                          this.updateState("bookmarked");
                        }}
                      >
                        Bookmarked
                      </Menu.Item>
                    </SubMenu>
                    <SubMenu
                      key="sub3"
                      title={
                        <span>
                          <SettingOutlined />
                          Settings
                        </span>
                      }
                    >
                      <Menu.Item
                        key="account"
                        onClick={() => {
                          this.getUserInfo("account");
                        }}
                      >
                        Account
                        {/* <Link to="/profile/account">Account</Link> */}
                      </Menu.Item>
                      <Menu.Item
                        key="change password"
                        onClick={() => {
                          this.updateState("change password");
                        }}
                      >
                        Change password
                      </Menu.Item>
                    </SubMenu>
                  </Menu>
                </Sider>
                <Content style={{ padding: "0 24px", minHeight: 280 }}>
                  {this.content()}
                </Content>
              </Layout>
            </Content>,
          ]
        ) : (
          <Link to="/login">Login</Link>
        )}
      </Layout>
    );
  }
}

function mapStateToProps(state) {
  return {
    username: state.user.username,
    firstname: state.user.firstname,
    email: state.user.email,
    lastname: state.user.lastname,
    statusMessage: state.user.statusMessage,
    isAuth: state.auth.token != null,
    posts: state.post.posts,
  };
}

export default connect(mapStateToProps)(ProfileView);
