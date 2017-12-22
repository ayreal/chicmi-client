import React, { Component } from "react";
// import { connect } from "react-redux";
// import * as actions from "../actions";
import { Container, Header, Card } from "semantic-ui-react";
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
        <Container>
          <MapContainer events={this.props.user.events} />
        </Container>
        <Card.Group itemsPerRow={3}>
          {this.props.user.events.map(event => (
            <EventCard key={event.id} data={event} />
          ))}
        </Card.Group>

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
