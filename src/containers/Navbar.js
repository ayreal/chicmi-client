import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../actions";

class Navbar extends Component {
  render() {
    console.log("%c Inside render containers/Navbar.js \n", "color: #bada55");
    console.log("----------------------- \n");

    return <div>Inside Navbar</div>;
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchProfile: () => {
      return dispatch(actions.fetchProfile());
    }
  };
};

export default connect(null, null)(Navbar);
