import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../actions";
import { Container, Header, Button, Icon } from "semantic-ui-react";
// import EventCard from "../components/EventCard";

class EventShow extends Component {
  state = {
    currentEvent: {}
  };

  componentWillReceiveProps(nextProps) {
    // debugger;
    if (nextProps.events.length > 0) {
      this.setCurrentEvent();
    }
  }

  setCurrentEvent = () => {
    if (this.props.events.length > 0) {
      // debugger;
      const currentEvent = this.props.events.find(
        event => event.slug === this.props.match.params.slug
      );
      this.setState({
        currentEvent: currentEvent
      });
    }
  };

  isUserEvent = event => {
    return event.external_id === this.props.currentEvent.event_id;
  };

  handleRemove = () => {};

  handleAdd = () => {
    this.props.fetchAddEvent(this.props.user.id, this.props.currentEvent);
  };

  renderButton = () => {
    // if the currentEvent is also a userEvent
    if (this.props.events.find(this.isUserEvent)) {
      return (
        <Button animated onClick={this.handleRemove}>
          <Button.Content visible>I'm Going</Button.Content>
          <Button.Content hidden>
            <Icon name="cancel" />
          </Button.Content>
        </Button>
      );
    } else {
      return (
        <Button animated onClick={this.handleAdd}>
          <Button.Content visible>Add To My Events</Button.Content>
          <Button.Content hidden>
            <Icon name="check" />
          </Button.Content>
        </Button>
      );
    }
  };

  renderEvent = () => {
    if (!!this.state.currentEvent.event_id) {
      // debugger;
      return <div>This is {this.state.currentEvent.event_name_en}</div>;
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
export default connect(mapStateToProps, actions)(EventShow);
