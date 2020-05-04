import React from "react";
import { Form, Input, Button } from "antd";
import axios from "axios";

class CustomForm extends React.Component {
  handleArticleSubmit = (values, requestType, articleID) => {
    const title = document.getElementById("title").value;
    const content = document.getElementById("content").value;
    console.log(title, content);
    console.log(requestType);
    switch (requestType) {
      case "post":
        return axios
          .post("http://127.0.0.1:8000/api/", {
            title: title,
            content: content,
          })
          .then((res) => {
            console.log(res);
            window.location.reload();
          })
          .catch((err) => console.log(err));
      case "put":
        return axios
          .put(`http://127.0.0.1:8000/api/${articleID}/`, {
            title: title,
            content: content,
          })
          .then((res) => {
            console.log(res);
            window.location.reload();
          })
          .catch((err) => console.log(err));
      default:
        return requestType;
    }
  };

  render() {
    return (
      <div>
        <Form
          onFinish={(values) =>
            this.handleArticleSubmit(
              values,
              this.props.requestType,
              this.props.articleID
            )
          }
        >
          <Form.Item label="Title">
            <Input id="title" placeholder="Enter a title" />
          </Form.Item>
          <Form.Item label="Content">
            <Input.TextArea id="content" placeholder="Enter the content" />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </div>
    );
  }
}

export default CustomForm;
