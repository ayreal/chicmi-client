import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../actions";
import { Container, Header, Card } from "semantic-ui-react";
import EventCard from "../components/EventCard";

class Events extends Component {
  renderEvents = () => {
    return this.props.events.map(event => {
      // debugger;
      return <EventCard key={event.event_id} data={event} />;
    });
  };

  render() {
    console.log("%c >> Inside render Events \n", "color: #bada55");
    console.log("PROPS: ", this.props);
    console.log("----------------------- \n");
    return (
      <Container text style={{ marginTop: "7em" }}>
        <Header as="h1">This Week's Sample Sales</Header>
        <p>Some text here.</p>
        <Card.Group>{this.renderEvents()}</Card.Group>
      </Container>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.currentUser,
    events: state.events
  };
};

export default connect(mapStateToProps, actions)(Events);
