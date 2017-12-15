import React, { Component } from "react";
import { connect } from "react-redux";
import { Switch, Route } from "react-router-dom";
// import * as actions from "../actions";
import Events from "./Events";
import Login from "./Login";
import Profile from "./Profile";

class Main extends Component {
  render() {
    console.log("%c Inside render containers/Main.js \n", "color: #bada55");
    console.log("----------------------- \n");

    return (
      <Switch>
        <Route exact path="/" component={Events} />
        <Route path="/login" component={Login} />
        <Route path="/profile" component={Profile} />
      </Switch>
    );
  }
}

const mapStateToProps = state => ({
  loggedIn: !!state.currentUser.id,
  user: state.currentUser
});

// const mapDispatchToProps = dispatch => {
//   return {
//     fetchProfile: () => {
//       return dispatch(actions.fetchProfile());
//     }
//   };
// };

export default connect(mapStateToProps, null)(Main);
