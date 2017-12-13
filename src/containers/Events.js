import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../actions";

class Events extends Component {
  componentDidMount() {
    this.props.fetchProfile();
  }

  render() {
    console.log("Inside containers/Events.js \n");
    console.log("----------------------- \n");

    return <div>Inside Profile</div>;
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchProfile: () => {
      return dispatch(actions.fetchProfile());
    }
  };
};

// const mapStateToProps = ({ loading, profile }) => {
//   return {
//     loading,
//     profile
//   };
// };

// export default Events;

export default connect(null, mapDispatchToProps)(Events);
