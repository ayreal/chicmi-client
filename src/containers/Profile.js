import React, { Component } from "react";
// import { connect } from "react-redux";
import * as actions from "../actions";
import { Container, Header, Card, Embed } from "semantic-ui-react";
import withAuth from "../hocs/withAuth";
import EventCard from "./EventCard";
import DesignerCard from "../components/DesignerCard";
import Calendar from "../components/Calendar";
import MapContainer from "./MapContainer";

class Profile extends Component {
  state = {
    calendarEvent: {}
  };

  handleFollowDesigner = data => {
    // debugger;
    this.props.fetchAddDesigner(this.props.user.id, data);
  };

  handleUnfollowDesigner = data => {
    this.props.fetchDeleteDesigner(this.props.user.id, data);
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

  renderDesigners = () => {
    return (
      <Card.Group itemsPerRow={4}>
        {this.props.user.designers.map(designer => (
          <DesignerCard
            key={designer.designer_id}
            data={designer}
            handleFollowDesigner={this.handleFollowDesigner}
            handleUnfollowDesigner={this.handleUnfollowDesigner}
            user={this.props.user}
            loggedIn={this.props.loggedIn}
          />
        ))}
      </Card.Group>
    );
  };

  renderEvents = () => {
    return (
      <Card.Group itemsPerRow={3}>
        {this.props.user.events.map(event => (
          <EventCard key={event.id} data={event} />
        ))}
      </Card.Group>
    );
  };

  render() {
    console.log("%c Inside render Profile \n", "color: #bada55");
    console.log("PROPS: ", this.props);
    console.log("STATE: ", this.state);
    console.log("----------------------- \n");

    return (
      <Container style={{ marginTop: "7em" }}>
        <Header as="h1">Welcome, {this.props.user.name}!</Header>
        <p>You can view and manage your profile here</p>

        <h2>Events I'm Attending</h2>

        {this.renderEvents()}

        <h2>Designers I Follow</h2>
        {this.renderDesigners()}

        <Embed active={true}>
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
