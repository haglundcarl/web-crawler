import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { List, Avatar } from "antd";
import { MessageOutlined, LikeOutlined, StarOutlined } from "@ant-design/icons";
import axios from "axios";
import * as actions from "../store/actions/Posts";

const IconText = ({ icon, text }) => (
  <span>
    {React.createElement(icon, { style: { marginRight: 8 } })}
    {text}
  </span>
);

class PostListView extends Component {
  componentDidMount() {
    this.props.dispatch(actions.GetAllPosts());
  }

  render() {
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
  }
}

function mapStateToProps(state) {
  return {
    posts: state.post.posts,
  };
}

export default connect(mapStateToProps)(PostListView);
