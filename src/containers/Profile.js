import React, { Component } from "react";
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
import moment from "moment";
import verticalFill from "../images/fillvert1.png";
import horizontalFill from "../images/fillhoriz2.jpg";

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

  setCalendarEvent = props => {
    this.setState({
      calendarEvent: props
    });
  };
  setCalendarEventFromMap = props => {
    // debugger;
    this.setState({
      calendarEvent: props.data
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

  renderCurrentEventMessage = () => {
    if (this.state.calendarEvent.id) {
      return this.renderCurrentEventDetails();
    } else if (!!this.props.user.events) {
      return (
        <Header as="h3">
          You're not following any events :/ <br /> Follow sales and track them
          here!
        </Header>
      );
    } else {
      return <Header as="h3">Choose a sale to view here.</Header>;
    }
  };

  renderCurrentEventDetails = () => {
    const { calendarEvent } = this.state;
    return (
      <Card.Content>
        <Image src={calendarEvent.event_logo_pin} floated="left" />
        <Card.Header>{calendarEvent.event_name_en}</Card.Header>
        <Card.Meta>
          {moment(new Date(calendarEvent.start_date)).format("M/D/YY, h:mm a")}{" "}
          thru{" "}
          {moment(new Date(calendarEvent.end_date)).format("M/D/YY, h:mm a")}
        </Card.Meta>
        <p>
          {calendarEvent.address_business_name} -{" "}
          {calendarEvent.address_street_1}
          {calendarEvent.address_street_2
            ? ", " + calendarEvent.address_street_2
            : null}
        </p>
      </Card.Content>
    );
  };

  renderDesigners = () => {
    if (this.props.user.designers.length > 0) {
      return (
        <div>
          <Header as="h2">Designers I Follow</Header>
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
        </div>
      );
    }
  };

  getPastEvents = () => {
    return this.props.user.events.filter(myEvent =>
      moment(new Date(myEvent.end_date)).isBefore()
    );
  };

  getPresentEvents = () => {
    return this.props.user.events.filter(myEvent =>
      moment(new Date(myEvent.end_date)).isAfter()
    );
  };

  renderEvents = () => {
    const present = this.getPresentEvents();
    const past = this.getPastEvents();
    return (
      <div>
        <Header as="h2">Events I'm Attending</Header>
        <Card.Group itemsPerRow={3}>
          {present.map(event => <EventCard key={event.id} data={event} />)}
        </Card.Group>

        {past.length > 0 ? (
          <div>
            <Header as="h2">Events I Attended</Header>
            <Card.Group itemsPerRow={3}>
              {past.map(event => <EventCard key={event.id} data={event} />)}
            </Card.Group>
          </div>
        ) : null}
        <Divider hidden />
      </div>
    );
  };

  componentDidMount = () => {
    window.scrollTo(0, 0);
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

        <Segment
          inverted
          textAlign="right"
          style={{
            padding: "1em 0em",
            backgroundImage: `url(${horizontalFill})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "0% 0%"
          }}
          vertical
        >
          <Header
            as="h1"
            inverted
            style={{
              fontSize: "3em",
              marginBottom: 0,
              marginTop: "2em",
              fontFamily: "Karla",
              fontWeight: "bold"
            }}
          >
            Welcome, {this.props.user.name}! &nbsp;
          </Header>
        </Segment>

        <Divider hidden />

        {this.renderEvents()}

        <Divider hidden />
        {this.renderDesigners()}
        <Divider hidden />

        <Grid verticalAlign="middle" columns={2} centered>
          <Grid.Row>
            <Grid.Column>
              <Card fluid>{this.renderCurrentEventMessage()}</Card>
              <Embed active={true}>
                <MapContainer
                  setCalendarEvent={this.setCalendarEventFromMap}
                  events={this.props.user.events}
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
                    minHeight: "700px",
                    fontSize: "3em",
                    marginBottom: 0,
                    marginTop: "6em",
                    fontFamily: "Karla",
                    fontWeight: "bold"
                  }}
                >
                  {" "}
                  <Icon name="angle left" /> Plan Your Sales
                </Header>
              </Segment>
            </Grid.Column>
          </Grid.Row>
        </Grid>
        <Divider hidden />
      </Container>
    );
  }
}

export default withAuth(Profile);
