import React, { Component } from "react";
import { connect } from "react-redux";
import { Route } from "react-router-dom";
import * as actions from "../actions";
import Events from "./Events";
import Login from "./Login";
import Profile from "./Profile";
// import { withRouter } from "react-router-dom";

class Main extends Component {
  componentDidMount() {
    this.props.fetchRemoteEvents();
  }

  render() {
    console.log("%c Inside render containers/Main.js \n", "color: #bada55");
    console.log("----------------------- \n");
    console.log(this.props);

    return (
      <div className="Main">
        <Route path="/login" component={Login} />
        <Route path="/profile" component={Profile} />
        <Route exact path="/" component={Events} />
      </div>
    );
  }
}

// const mapStateToProps = state => {
//   return {
//     loggedIn: !!state.currentUser.id,
//     user: state.currentUser
//   };
// };

// const mapDispatchToProps = dispatch => {
//   return {
//     fetchProfile: () => {
//       return dispatch(actions.fetchProfile());
//     }
//   };
// };

export default connect(null, actions)(Main);
