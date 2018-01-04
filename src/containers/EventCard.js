import React, { Component } from "react";
import { Card, Icon, Image, Button, Label } from "semantic-ui-react";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "../actions";
import moment from "moment";

class EventCard extends Component {
  handleClick = () => {
    // dispatch an action that goes to the event show page based on the slug
    this.props.fetchCreateEvent(this.props.data, this.props.history);
  };

  isUserEvent = event => {
    return event.external_id === this.props.data.event_id;
  };

  renderShowAttending = () => {
    if (this.props.user.events.find(this.isUserEvent)) {
      return (
        <Label basic as="a" color="grey" ribbon="right">
          I'm Going
        </Label>
      );
    } else {
      return null;
    }
  };

  renderGcalLink = () => {
    return (
      <a
        href={`http://www.google.com/calendar/event?action=TEMPLATE&text=${
          this.props.data.event_name_en
        }&dates=${new Date(this.props.data.start_date)
          .toISOString()
          .replace(/-|:|\.\d\d\d/g, "")}/${new Date(this.props.data.end_date)
          .toISOString()
          .replace(/-|:|\.\d\d\d/g, "")}&location=${
          this.props.data.address_street_1
        } ${this.props.data.address_street_2} ${this.props.data.address_city} ${
          this.props.data.address_zip
        }&trp=false&sprop=&sprop=name:`}
        target="_blank"
        rel="nofollow"
      >
        Add to my gCal
      </a>
    );
  };

  render() {
    return (
      <Card className="event-card">
        <Image src={this.props.data.event_hero_url} />
        <Card.Content>
          {this.props.loggedIn ? this.renderShowAttending() : null}

          <Card.Header>{this.props.data.event_name_en}</Card.Header>
          <Card.Meta>
            Through{" "}
            {moment(new Date(this.props.data.end_date)).format("dddd, MMMM Do")}{" "}
            <br />
            {this.renderGcalLink()}
          </Card.Meta>
        </Card.Content>

        <Button
          icon
          labelPosition="right"
          as={Link}
          to={`/events/${this.props.data.slug}`}
          onClick={this.handleClick}
        >
          View More
          <Icon name="angle right" size="large" />
        </Button>
      </Card>
    );
  }
}

const mapStateToProps = state => {
  return {
    loggedIn: !!state.currentUser.id,
    user: state.currentUser
  };
};

export default withRouter(connect(mapStateToProps, actions)(EventCard));
