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
  Image
} from "semantic-ui-react";
import withAuth from "../hocs/withAuth";
import EventCard from "./EventCard";
import DesignerCard from "../components/DesignerCard";
import Calendar from "../components/Calendar";
import MapContainer from "./MapContainer";

const style = {
  background: "ccc",
  position: "relative"
};

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

  render() {
    console.log("%c Inside render Profile \n", "color: #bada55");
    console.log("PROPS: ", this.props);
    console.log("STATE: ", this.state);
    console.log("----------------------- \n");

    return (
      <Container style={{ marginTop: "7em" }}>
        <Header as="h1">Welcome, {this.props.user.name}!</Header>
        <p>You can view and manage your profile here</p>

        <Divider hidden />
        <Header as="h2">Events I'm Attending</Header>

        {this.renderEvents()}

        <Divider hidden />
        <Header as="h2">Map My Events</Header>

        <Grid columns={2}>
          <Grid.Column width={10}>
            <Embed active={true}>
              <MapContainer events={this.props.user.events} />
            </Embed>
          </Grid.Column>

          <Grid.Column width={6}>
            <Image
              fluid
              centered
              verticalAlign="middle"
              src={this.state.calendarEvent.event_hero_url}
              size="medium"
            />
          </Grid.Column>
        </Grid>

        <Divider hidden />
        <Header as="h2">My Calendar</Header>

        <Grid centered columns={2}>
          <Grid.Row centered>
            <Grid.Column>
              <div style={{ height: "700 px" }}>
                <Calendar
                  className="calendar"
                  style={style}
                  events={this.props.user.events}
                  setCalendarEvent={this.setCalendarEvent}
                />
              </div>
            </Grid.Column>
          </Grid.Row>
        </Grid>
        <Divider hidden />
        <Header as="h2">Designers I Follow</Header>
        {this.renderDesigners()}
        <Divider hidden />
      </Container>
    );
  }
}

export default withAuth(Profile);
