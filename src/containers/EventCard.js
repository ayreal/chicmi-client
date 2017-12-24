import React, { Component } from "react";
import { Card, Icon, Image, Button } from "semantic-ui-react";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "../actions";
import moment from "moment";

class EventCard extends Component {
  parseDate = utcString => {
    // write this
    debugger;
  };

  handleClick = () => {
    // dispatch an action that goes to the event show page based on the slug
    // debugger;
    this.props.fetchCreateEvent(this.props.data, this.props.history);
  };

  isUserEvent = event => {
    return event.external_id === this.props.data.event_id;
  };

  renderShowAttending = () => {
    // debugger;
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
          <Card.Meta>
            {moment(new Date(this.props.data.start_date)).format(
              "dddd, MMMM Do"
            )}
          </Card.Meta>
        </Card.Content>
        {this.props.loggedIn ? this.renderShowAttending() : null}

        <Button
          icon
          labelPosition="right"
          as={Link}
          to={`/events/${this.props.data.slug}`}
          onClick={this.handleClick}
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

export default withRouter(connect(mapStateToProps, actions)(EventCard));
