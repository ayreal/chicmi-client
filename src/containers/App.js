import React, { Component } from "react";
import { connect } from "react-redux";
// import Events from "./Events";
import Navbar from "../components/Navbar";
import Main from "./Main";
import Footer from "../components/Footer";
import * as actions from "../actions";

class App extends Component {
  componentDidMount() {
    if (localStorage.token) {
      this.props.fetchCurrentUser();
    }
  }

  render() {
    console.log("Inside render App, this.props.userId\n", this.props.userId);
    console.log("Inside render App, loggedIn is: \n", this.props.loggedIn);
    console.log("---------------------");
    console.log("Main component", Main);
    return (
      <div className="App">
        <Navbar loggedIn={this.props.loggedIn} />
        <Main />
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = state => {
  debugger;
  return {
    loggedIn: !!state.currentUser.id,
    userId: state.currentUser.id
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchCurrentUser: () => dispatch(actions.fetchCurrentUser()),
    logoutUser: () => dispatch(actions.logoutUser())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
