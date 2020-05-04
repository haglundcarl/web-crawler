import React from "react";
import { Route, Switch } from "react-router-dom";
import ArticleListView from "./containers/ArticleListView";
import ArticleDetailView from "./containers/ArticleDetailView";
import LoginForm from "./containers/Login";
import SignUpForm from "./containers/SignUp";
import ProfileView from "./containers/ProfileView";
import PageNotFound from "./components/PageNotFound";
import HomeView from "./containers/Home";
import ResetPasswordForm from "./containers/ResetPassword";
import ForgotPasswordForm from "./containers/ForgotPassword";
import PostListView from "./containers/PostListView";

const BaseRouter = () => (
  <div>
    {/* As soon as we found a route Switch makes it stop looking for another - only one route should match */}
    <Switch>
      <Route exact path="/articles" component={ArticleListView} />
      <Route exact path="/login" component={LoginForm} />
      <Route exact path="/signUp" component={SignUpForm} />
      <Route exact path="/articles/:articleID/" component={ArticleDetailView} />
      <Route exact path="/profile" component={ProfileView} />
      <Route exact path="/forgotpassword" component={ForgotPasswordForm} />
      <Route exact path="/" component={HomeView} />
      <Route exact path="/posts" component={PostListView} />
      <Route
        path="/rest-auth/password/reset/confirm/:uid/:token"
        component={ResetPasswordForm}
      />
      <Route component={PageNotFound} />
      {/* <Route exact path="/profile/account/" component={AccountView} /> */}
    </Switch>
  </div>
);

export default BaseRouter;
