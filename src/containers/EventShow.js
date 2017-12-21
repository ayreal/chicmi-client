import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../actions";
import { withRouter } from "react-router-dom";
import { Container, Header, Button, Icon, Comment } from "semantic-ui-react";

// IF I click on an event card, the event is persisted, redux store state is set and I'm taken to the show Page
// IF i go to a URL/refresh, check to see if there is a currentEvent in the redux store. If not, do a fetch

class EventShow extends Component {
  state = {
    slug: ""
  };

  componentDidMount() {
    const slug = this.props.match.params.slug;
    if (!this.props.loggedIn) {
      this.props.fetchEventBySlug(slug);
    }
  }

  // componentWillReceiveProps(nextProps) {
  //   const slug = this.props.match.params.slug;
  //   this.setState({ slug: slug });
  //   if (!!nextProps.currentEvent) {
  //     // if no currentEvent in the redux store
  //     debugger;
  //   }
  // }

  // componentWillReceiveProps(nextProps) {
  //   if (!this.props.loggedIn) {
  //     const slug = this.props.match.params.slug;
  //     // this.setState({ slug: slug });
  //     // debugger;
  //     this.props.fetchEventBySlug(slug);
  //   }
  // }

  // findEvent = props => {
  //
  //   // const currentEvent = props.events.filter(myEvent => {
  //   //   return myEvent.slug === slug;
  //   // })[0];
  //   // // fetch
  //   // this.setCurrentEvent(currentEvent);
  // };

  // setCurrentEvent = () => {
  //   console.log("inside setCurrentEvent");
  //   if (this.props.events.length > 0) {
  //     const currentEvent = this.props.events.find(
  //       event => event.slug === this.props.match.params.slug
  //     );
  //     this.setState(
  //       {
  //         currentEvent: currentEvent
  //       },
  //       this.setMyApiEvent
  //     );
  //   }
  // };
  //
  // setMyApiEvent = () => {
  //   // debugger;
  //   if (this.props.loggedIn) {
  //     console.log("Setting apiEvent");
  //     console.log("-----------------");
  //     // debugger;
  //     const myApiEvent = this.props.userEvents.find(
  //       event => event.external_id === this.state.currentEvent.event_id
  //     );
  //     this.setState({
  //       myApiEvent: myApiEvent
  //     });
  //   } else {
  //     return null;
  //   }
  // };

  isUserEvent = myEvent => {
    return myEvent.id === this.props.currentEvent.id;
  };

  handleRemove = () => {
    // debugger;
    this.props.fetchDeleteEvent(this.props.user.id, this.props.currentEvent.id);
  };

  handleAdd = () => {
    this.props.fetchAddEvent(this.props.user.id, this.props.currentEvent);
  };

  renderShowAttending = () => {
    // if the currentEvent is also a userEvent
    if (this.props.userEvents.find(this.isUserEvent)) {
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
    if (!!this.props.currentEvent.external_id) {
      return (
        <div>
          This is {this.props.currentEvent.event_name_en}{" "}
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
    userEvents: state.currentUser.events,
    currentEvent: state.currentEvent
  };
};
export default withRouter(connect(mapStateToProps, actions)(EventShow));
