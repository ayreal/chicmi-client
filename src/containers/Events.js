import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../actions";
import { Container, Header } from "semantic-ui-react";
import EventCard from "../components/EventCard";

class Events extends Component {
  componentDidMount() {
    this.props.fetchRemoteEvents();
  }
  render() {
    console.log("%c Inside render containers/Events.js \n", "color: #bada55");
    console.log("----------------------- \n");

    return (
      <Container text style={{ marginTop: "7em" }}>
        <Header as="h1">This Week's Sample Sales</Header>
        <p>Some text here.</p>
        <EventCard />
      </Container>
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

export default connect(mapStateToProps, actions)(Events);
