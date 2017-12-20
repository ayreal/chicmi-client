import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../actions";
import { withRouter } from "react-router-dom";
import { Container, Header, Button, Icon } from "semantic-ui-react";

class EventShow extends Component {
  state = {
    currentEvent: {},
    myApiEvent: {},
    slug: ""
  };

  componentDidMount() {
    this.setCurrentEvent();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.events.length > 0) {
      console.log("inside if statement");
      const slug = nextProps.match.params.slug;
      this.setState({ slug: slug }, () =>
        this.findEvent(this.state.slug, nextProps)
      );
    }
  }

  findEvent = (name, props) => {
    const currentEvent = props.events.filter(myEvent => {
      return myEvent.slug === name;
    })[0];
    this.setCurrentEvent(currentEvent);
  };

  setCurrentEvent = () => {
    console.log("inside setCurrentEvent");
    if (this.props.events.length > 0) {
      const currentEvent = this.props.events.find(
        event => event.slug === this.props.match.params.slug
      );
      this.setState(
        {
          currentEvent: currentEvent
        },
        this.setMyApiEvent
      );
    }
  };

  setMyApiEvent = () => {
    // debugger;
    if (this.props.loggedIn) {
      console.log("Setting apiEvent");
      console.log("-----------------");
      // debugger;
      const myApiEvent = this.props.userEvents.find(
        event => event.external_id === this.state.currentEvent.event_id
      );
      this.setState({
        myApiEvent: myApiEvent
      });
    } else {
      return null;
    }
  };

  isUserEvent = event => {
    return event.external_id === this.state.currentEvent.event_id;
  };

  handleRemove = () => {
    // debugger;
    this.props.fetchDeleteEvent(this.props.user.id, this.state.myApiEvent.id);
  };

  handleAdd = () => {
    this.props.fetchAddEvent(this.props.user.id, this.state.currentEvent);
  };

  renderShowAttending = () => {
    // if the currentEvent is also a userEvent
    if (this.props.userEvents.find(this.isUserEvent)) {
      // debugger;
      return (
        <Button animated onClick={this.handleRemove}>
          <Button.Content visible>I'm Going</Button.Content>
          <Button.Content hidden>
            <Icon name="cancel" /> Remove From My Events
          </Button.Content>
        </Button>
      );
    } else {
      // debugger;
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
