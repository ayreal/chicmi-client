import React, { Component } from "react";
// import { connect } from "react-redux";
// import * as actions from "../actions";
import { Container, Header } from "semantic-ui-react";
import withAuth from "../hocs/withAuth";
import EventCard from "../components/EventCard";
import Calendar from "../components/Calendar";

class Profile extends Component {
  render() {
    console.log("%c Inside render Profile \n", "color: #bada55");
    console.log("PROPS: ", this.props);
    console.log("----------------------- \n");

    return (
      <Container text style={{ marginTop: "7em" }}>
        <Header as="h1">Profile</Header>
        <p>Welcome, {this.props.user.name}! Some text here.</p>

        <h2>Events I'm Attending</h2>
        {this.props.user.events.map(event => (
          <EventCard key={event.event_id} data={event} />
        ))}
        <Calendar events={this.props.user.events} />
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
