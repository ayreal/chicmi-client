import React, { Component } from "react";
// import { connect } from "react-redux";
// import * as actions from "../actions";
import {
  Container,
  Header,
  Card,
  Embed,
  Grid,
  Divider,
  Segment,
  Icon,
  Image
} from "semantic-ui-react";
import withAuth from "../hocs/withAuth";
import EventCard from "./EventCard";
import DesignerCard from "../components/DesignerCard";
import Calendar from "../components/Calendar";
import MapContainer from "./MapContainer";
import verticalFill from "../images/fillvert1.png";
import horizontalFill from "../images/fillhoriz1.png";

class Profile extends Component {
  state = {
    calendarEvent: {}
  };

  handleFollowDesigner = data => {
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
    // make it so that the calendar responds to the map and vice-versa (ie they set the same state and things are rendered based on that)
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

  renderCurrentEventDetails = () => {
    return (
      <Card.Content>
        <Image src={this.state.calendarEvent.event_logo_pin} floated="left" />
        <Card.Header>{this.state.calendarEvent.event_name_en}</Card.Header>
        <Card.Meta>
          <span className="date">hi</span>
        </Card.Meta>
      </Card.Content>
    );
  };

  componentDidMount = () => {
    if (this.props.user.events) {
      this.setState({
        calendarEvent: this.props.user.events[0]
      });
    }
  };

  render() {
    console.log("%c Inside render Profile \n", "color: #bada55");
    console.log("PROPS: ", this.props);
    console.log("STATE: ", this.state);
    console.log("----------------------- \n");

    return (
      <Container>
        <br />
        <br />
        <br />
        <br />
        <Header as="h1">Welcome, {this.props.user.name}!</Header>
        <p>You can view and manage your profile here</p>

        <Divider hidden />
        <Header as="h2">Events I'm Attending</Header>

        {this.renderEvents()}

        <Divider hidden />
        <Header as="h2">Designers I Follow</Header>
        {this.renderDesigners()}
        <Divider hidden />

        <Grid verticalAlign="middle" columns={2} centered>
          <Grid.Row width={16}>
            <Grid.Column>
              <Card fluid>
                {this.state.calendarEvent.id
                  ? this.renderCurrentEventDetails()
                  : "You're not going to any sales. :/ Follow some and track them here!"}
              </Card>
              <Embed active={true}>
                <MapContainer
                  events={this.props.user.events}
                  style={{ minHeight: "500px" }}
                />
              </Embed>
              <Segment
                style={{
                  background: "#fff",
                  border: "none",
                  boxShadow: "none"
                }}
              >
                <Calendar
                  className="calendar"
                  style={{
                    background: "fff",
                    position: "relative"
                  }}
                  events={this.props.user.events}
                  setCalendarEvent={this.setCalendarEvent}
                />
              </Segment>
            </Grid.Column>
            <Grid.Column>
              <Segment
                inverted
                textAlign="center"
                style={{
                  padding: "1em 0em",
                  backgroundImage: `url(${verticalFill})`,
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "0% 0%"
                }}
                vertical
              >
                <Header
                  as="h2"
                  inverted
                  style={{
                    minHeight: "600px",
                    fontSize: "3em",
                    marginBottom: 0,
                    marginTop: "6em",
                    fontFamily: "Karla",
                    fontWeight: "bold"
                  }}
                >
                  {" "}
                  <Icon name="angle left" /> Plan The Sales
                </Header>
              </Segment>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    );
  }
}

export default withAuth(Profile);
