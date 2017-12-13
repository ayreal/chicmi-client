import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../actions";

class Events extends Component {
  render() {
    console.log("Inside containers/Events.js \n");

    return <div>Inside Profile</div>;
  }
}

const mapStateToProps = ({ loading, profile }) => {
  return {
    loading,
    profile
  };
};

export default Events;

// export default connect(mapStateToProps, actions)(Events);
