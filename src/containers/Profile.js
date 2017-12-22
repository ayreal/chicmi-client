import React, { Component } from "react";
// import { connect } from "react-redux";
// import * as actions from "../actions";
import { Container, Header, Card, Embed } from "semantic-ui-react";
import withAuth from "../hocs/withAuth";
import EventCard from "./EventCard";
import Calendar from "../components/Calendar";
import MapContainer from "./MapContainer";

class Profile extends Component {
  state = {
    calendarEvent: {}
  };

  setCalendarEvent = event => {
    this.setState({
      calendarEvent: event
    });
  };

  renderCalendarEvent = () => {
    const event = this.state.calendarEvent;
    return (
      <div>
        <strong> More details for {event.event_name_en} will go here</strong>
      </div>
    );
  };

  render() {
    console.log("%c Inside render Profile \n", "color: #bada55");
    console.log("PROPS: ", this.props);
    console.log("STATE: ", this.state);
    console.log("----------------------- \n");

    return (
      <Container text style={{ marginTop: "7em" }}>
        <Header as="h1">Profile</Header>
        <p>Welcome, {this.props.user.name}! Some text here.</p>

        <h2>Events I'm Attending</h2>

        <Card.Group itemsPerRow={3}>
          {this.props.user.events.map(event => (
            <EventCard key={event.id} data={event} />
          ))}
        </Card.Group>

        <Embed url="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d25354.94046166276!2d-121.97574860000002!3d37.40478635!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fc9c6db85b8ab%3A0x72af1434e8036575!2sCalifornia&#39;s+Great+America!5e0!3m2!1sen!2sus!4v1509633245458">
          <MapContainer events={this.props.user.events} />
        </Embed>

        {this.state.calendarEvent.id ? this.renderCalendarEvent() : null}
        <Calendar
          events={this.props.user.events}
          setCalendarEvent={this.setCalendarEvent}
        />
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
