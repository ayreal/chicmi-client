import React, { Component } from "react";
// import { connect } from "react-redux";
// import * as actions from "../actions";
import { Container, Header } from "semantic-ui-react";
import withAuth from "../hocs/withAuth";

class Profile extends Component {
  render() {
    console.log("%c Inside render containers/Profile.js \n", "color: #bada55");
    console.log("PROPS: ", this.props);
    console.log("----------------------- \n");

    return (
      <Container text style={{ marginTop: "7em" }}>
        <Header as="h1">Profile</Header>
        <p>Welcome, {this.props.user.name}! Some text here.</p>
      </Container>
    );
  }
}

// const mapStateToProps = state => ({
//   loggedIn: !!state.currentUser.id,
//   user: state.currentUser
// });

// const mapDispatchToProps = dispatch => {
//   return {
//     fetchProfile: () => {
//       return dispatch(actions.fetchProfile());
//     }
//   };
// };

export default withAuth(Profile);
