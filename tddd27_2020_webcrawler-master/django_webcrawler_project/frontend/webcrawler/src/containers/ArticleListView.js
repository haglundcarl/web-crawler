import React, { Component } from "react";
import Articles from "../components/Article";
import axios from "axios";
import CustomForm from "../components/Form";
export class ArticleListView extends Component {
  state = {
    articles: [],
  };

  componentDidMount() {
    axios.get("http://127.0.0.1:8000/api/articles/").then((res) => {
      this.setState({
        articles: res.data,
      });
    });
  }

  render() {
    return (
      <div>
        <Articles data={this.state.articles} />
        <h1>Create an Article</h1>
        <CustomForm requestType="post" articleID={null} />
      </div>
    );
  }
}

export default ArticleListView;
