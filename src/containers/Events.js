import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../actions";
import {
  Container,
  Header,
  Card,
  Segment,
  Divider,
  Button
} from "semantic-ui-react";
import EventCard from "./EventCard";
import splash from "../images/splashtest.png";

class Events extends Component {
  renderEvents = () => {
    return this.props.events.map(event => {
      return <EventCard key={event.event_id} data={event} />;
    });
    window.scrollTo(0, 0);
  };

  render() {
    console.log("%c >> Inside render Events \n", "color: #bada55");
    console.log("PROPS: ", this.props);
    console.log("PROPS EVENTS LENGTH:", this.props.events.length);
    console.log("----------------------- \n");
    return (
      <div style={{ marginTop: "4.2em" }}>
        <Segment
          inverted
          textAlign="center"
          style={{
            minHeight: 950,
            padding: "1em 0em",
            backgroundImage: `url(${splash})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "0% 70%"
          }}
          vertical
        >
          <Container text>
            <Header
              as="h1"
              content="This is Chicmi"
              inverted
              style={{
                fontSize: "4em",
                marginBottom: 0,
                marginTop: "4em",
                fontFamily: "Karla",
                fontWeight: "bold"
              }}
            />
            <Header
              as="h2"
              content="For sample sales in NYC, drama-free."
              inverted
              style={{
                fontSize: "1.7em",
                fontFamily: "Karla",
                fontWeight: "normal"
              }}
            />
            <Button
              basic
              inverted
              size="massive"
              onClick={() => window.scrollTo(0, 960)}
            >
              View More
            </Button>
          </Container>
        </Segment>

        <Container>
          <Divider hidden />
          <Divider hidden />
          <Divider hidden />
          <Header as="h2">Ongoing Sample Sales</Header>
          <p>Some text here.</p>
          <Card.Group itemsPerRow={3}>
            {this.props.events ? this.renderEvents() : null}
          </Card.Group>
        </Container>
        <Divider hidden />
      </div>
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
