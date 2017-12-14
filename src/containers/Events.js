import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../actions";

class Events extends Component {
  render() {
    console.log("%c Inside render containers/Events.js \n", "color: #bada55");
    console.log("----------------------- \n");

    return <div>Inside Events</div>;
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchProfile: () => {
      return dispatch(actions.fetchProfile());
    }
  };
};

export default connect(null, null)(Events);
