import React, { Component } from "react";
import { Input } from "antd";
import { AudioOutlined } from "@ant-design/icons";
const { Search } = Input;

class HomeView extends Component {
  suffix = (
    <AudioOutlined
      style={{
        fontSize: 16,
        color: "#1890ff",
        paddingRight: 4,
      }}
    />
  );
  render() {
    return (
      <div>
        <center>
          <img src="http://lorempixel.com/400/200" alt="random everyday" />
        </center>
        <br />
        <Search
          placeholder="input search text"
          enterButton="Search"
          size="large"
          onSearch={(value) => console.log(value)}
        />
      </div>
    );
  }
}

export default HomeView;
