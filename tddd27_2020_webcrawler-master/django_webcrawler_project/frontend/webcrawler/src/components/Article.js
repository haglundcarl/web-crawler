import React from "react";
import { List, Avatar } from "antd";
import { Link } from "react-router-dom";
import { MessageOutlined, LikeOutlined, StarOutlined } from "@ant-design/icons";

const IconText = ({ icon, text }) => (
  <span>
    {React.createElement(icon, { style: { marginRight: 8 } })}
    {text}
  </span>
);

const Articles = (props) => {
  return (
    <List
      itemLayout="vertical"
      size="large"
      pagination={{
        onChange: (page) => {},
        pageSize: 3,
      }}
      dataSource={props.data}
      renderItem={(item) => (
        <List.Item
          key={item.title}
          actions={[
            <IconText
              icon={StarOutlined}
              text="156"
              key="list-vertical-star-o"
            />,
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
          extra={
            <img src="http://lorempixel.com/400/200" alt="random everyday" />
          }
        >
          <List.Item.Meta
            avatar={<Avatar src={item.avatar} />}
            title={<Link to={`/articles/${item.id}`}>{item.title}</Link>}
            description={item.description}
          />
          {item.content}
        </List.Item>
      )}
    />
  );
};

export default Articles;
