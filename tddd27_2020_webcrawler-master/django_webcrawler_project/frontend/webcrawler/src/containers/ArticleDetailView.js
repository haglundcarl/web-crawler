import React, { Component } from "react";
import CustomForm from "../components/Form";
import axios from "axios";
import { Form, Button } from "antd";

export class ArticleDetailView extends Component {
  state = {
    article: {},
  };

  componentDidMount() {
    const articleID = this.props.match.params.articleID;
    axios.get(`http://127.0.0.1:8000/api/articles/${articleID}`).then((res) => {
      this.setState({
        article: res.data,
      });
    });
  }

  handleArticleDelete = (values) => {
    const articleID = this.props.match.params.articleID;
    axios.delete(`http://127.0.0.1:8000/api/articles/${articleID}`);
    // this.props.history.push("/");
    // window.location.reload();
  };

  render() {
    return (
      <div>
        <h1>{this.state.article.title}</h1>
        <p>{this.state.article.content}</p>
        <h1>Update the article</h1>
        <CustomForm
          requestType="put"
          articleID={this.props.match.params.articleID}
        />
        <Form onFinish={(values) => this.handleArticleDelete()}>
          <Button type="danger" htmlType="submit">
            Delete
          </Button>
        </Form>
      </div>
    );
  }
}

export default ArticleDetailView;
