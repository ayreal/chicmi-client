import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../actions";
import { withRouter } from "react-router-dom";
import { Container, Header, Button, Icon } from "semantic-ui-react";
// import EventCard from "../components/EventCard";

class EventShow extends Component {
  state = {
    currentEvent: {},
    myApiEvent: {}
  };

  componentDidMount() {
    this.setCurrentEvent();
  }

  setCurrentEvent = () => {
    if (this.props.events.length > 0) {
      // debugger;
      const currentEvent = this.props.events.find(
        event => event.slug === this.props.match.params.slug
      );
      const myApiEvent = this.props.userEvents.find(
        event => event.external_id === currentEvent.event_id
      );
      this.setState({
        currentEvent: currentEvent,
        myApiEvent: myApiEvent
      });
    }
  };

  isUserEvent = event => {
    return event.external_id === this.state.currentEvent.event_id;
  };

  handleRemove = () => {
    const eventId = this.state.myApiEvent.id;
    const userId = this.props.user.id;
    this.props.fetchDeleteEvent(userId, eventId);
  };

  handleAdd = () => {
    this.props.fetchAddEvent(this.props.user.id, this.state.currentEvent);
  };

  renderShowAttending = () => {
    // if the currentEvent is also a userEvent
    if (this.props.userEvents.find(this.isUserEvent)) {
      return (
        <Button animated onClick={this.handleRemove}>
          <Button.Content visible>I'm Going</Button.Content>
          <Button.Content hidden>
            <Icon name="cancel" /> Remove
          </Button.Content>
        </Button>
      );
    } else {
      return <Button onClick={this.handleAdd}>Add To My Events</Button>;
    }
  };

  renderEvent = () => {
    if (!!this.state.currentEvent.event_id) {
      // debugger;
      return (
        <div>
          This is {this.state.currentEvent.event_name_en}{" "}
          {this.props.loggedIn ? this.renderShowAttending() : null}
        </div>
      );
    } else {
      return null;
    }
  };

  render() {
    console.log("%c >> Inside render EventShow \n", "color: #bada55");
    console.log("PROPS: ", this.props);
    console.log("STATE: ", this.state);
    console.log("----------------------- \n");
    return (
      <Container style={{ marginTop: "7em" }}>
        <Header as="h1">Sample Sale Show Page</Header>

        {this.renderEvent()}
      </Container>
    );
  }
}
const mapStateToProps = state => {
  return {
    loggedIn: !!state.currentUser.id,
    user: state.currentUser,
    events: state.events,
    userEvents: state.currentUser.events
  };
};
export default withRouter(connect(mapStateToProps, actions)(EventShow));
