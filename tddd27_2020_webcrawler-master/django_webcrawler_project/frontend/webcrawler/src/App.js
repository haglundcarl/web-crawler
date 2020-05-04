import React, { Component } from "react";
import "antd/dist/antd.css";
import HeaderLayout from "./containers/Layout";
import { BrowserRouter } from "react-router-dom";
import BaseRouter from "./routes";
import { connect } from "react-redux";
import * as actions from "./store/actions/Auth";

class App extends Component {
  // On load, check if the user is signed in
  componentDidMount() {
    this.props.checkLogin();
  }

  render() {
    return (
      <div>
        <BrowserRouter>
          <HeaderLayout {...this.props}>
            <BaseRouter />
          </HeaderLayout>
        </BrowserRouter>
      </div>
    );
  }
}

//
const mapDispatchToProps = (dispatch) => {
  return {
    checkLogin: () => dispatch(actions.checkSignedIn()),
  };
};

const mapStateToProps = (state) => {
  return {
    isAuth: state.auth.token != null,
  };
};

// Grabs the store and allow us to access states from the store and turn them into props
// Connects our react component App to the redux store
export default connect(mapStateToProps, mapDispatchToProps)(App);
