import React, { Component } from "react";
import { connect } from "react-redux";
// import { Link, Switch, Route } from "react-router-dom";
// import Events from "./Events";
import Navbar from "./Navbar";
import Events from "./Events";
import Footer from "../components/Footer";
import * as actions from "../actions";

class App extends Component {
  componentDidMount() {
    this.props.fetchCurrentUser();
  }
  render() {
    // debugger;
    console.log("Inside render App, this.props.userId\n", this.props.userId);
    console.log("Inside render App, loggedIn is: \n", this.props.loggedIn);
    console.log("---------------------");
    return (
      <div className="App">
        <Navbar />
        <Events />
        <Footer />
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
    fetchCurrentUser: () => dispatch(actions.fetchCurrentUser()),
    logoutUser: () => dispatch(actions.logoutUser())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
