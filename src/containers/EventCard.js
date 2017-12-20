import React, { Component } from "react";
import { Card, Icon, Image, Button } from "semantic-ui-react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "../actions";

class EventCard extends Component {
  parseDate = utcString => {
    // write this
    debugger;
  };

  handleClick = () => {
    this.props.fetchAddEvent(this.props.user.id, this.props.data);
  };

  isUserEvent = event => {
    return event.external_id === this.props.data.event_id;
  };

  renderShowAttending = () => {
    if (this.props.user.events.find(this.isUserEvent)) {
      return (
        <Button icon labelPosition="right">
          <Icon name="check" />
          I'm Going
        </Button>
      );
    } else {
      return null;
    }
  };

  render() {
    return (
      <Card>
        <Image src={this.props.data.event_hero_url} />
        <Card.Content>
          <Card.Header>{this.props.data.event_name_en}</Card.Header>
          <Card.Meta>{this.props.data.start_date}</Card.Meta>
        </Card.Content>
        {this.props.loggedIn ? this.renderShowAttending() : null}

        <Button
          icon
          labelPosition="right"
          as={Link}
          to={`/events/${this.props.data.slug}`}
        >
          View More
          <Icon name="right arrow" />
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

export default connect(mapStateToProps, actions)(EventCard);
