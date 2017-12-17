import React, { Component } from "react";
import { connect } from "react-redux";
// import Events from "./Events";
import Navbar from "../components/Navbar";
import Main from "./Main";
import Footer from "../components/Footer";
import * as actions from "../actions";
import { Route } from "react-router-dom";

class App extends Component {
  componentDidMount() {
    if (localStorage.token) {
      this.props.fetchCurrentUser();
    }

    this.props.fetchRemoteEvents();
  }

  render() {
    console.log("%c >> Inside render App \n", "color: #bada55");
    console.log("USER ID: ", this.props.userId);
    console.log("LOGGED IN: ", this.props.loggedIn);
    console.log("---------------------");
    return (
      <div className="App">
        <Navbar loggedIn={this.props.loggedIn} />
        <Route path="/" component={Main} />
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    loggedIn: !!state.currentUser.id,
    userId: state.currentUser.id
  };
};
//
// const mapDispatchToProps = dispatch => {
//   return {
//     fetchCurrentUser: () => dispatch(actions.fetchCurrentUser()),
//     logoutUser: () => dispatch(actions.logoutUser())
//   };
// };

export default connect(mapStateToProps, actions)(App);
