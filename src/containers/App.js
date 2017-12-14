import React, { Component } from "react";
import { connect } from "react-redux";
// import { Link, Switch, Route } from "react-router-dom";
import LoginForm from "../components/LoginForm";
// import Events from "./Events";
import * as actions from "../actions";

class App extends Component {
  componentDidMount() {
    this.props.fetchCurrentUser();
  }
  render() {
    // debugger;
    console.log("Inside App, this.props.userId\n", this.props.userId);
    return (
      <div className="App">
        <ul>
          <li>
            {this.props.loggedIn ? <a href="">Sign Out</a> : <LoginForm />}
          </li>
        </ul>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  loggedIn: !!state.currentUser.id,
  userId: state.currentUser.id
});

const mapDispatchToProps = dispatch => {
  return {
    fetchCurrentUser: () => dispatch(actions.fetchCurrentUser())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
