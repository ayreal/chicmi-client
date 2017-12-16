import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../actions";
import { Container, Header } from "semantic-ui-react";
import EventCard from "../components/EventCard";

class Events extends Component {
  render() {
    console.log("%c >> Inside render Events \n", "color: #bada55");
    console.log("PROPS: ", this.props);
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
  user: state.currentUser,
  events: state.events
});

export default connect(mapStateToProps, actions)(Events);
