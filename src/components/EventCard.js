import React, { Component } from "react";
import { Card, Icon, Image, Button } from "semantic-ui-react";
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

  renderButton = () => {
    if (this.props.user.events.find(this.isUserEvent)) {
      return (
        <Button onClick={this.handleClick}>
          <Button.Content visible>
            {" "}
            <Icon name="check" /> I'm Going
          </Button.Content>
        </Button>
      );
    } else {
      return (
        <Button animated onClick={this.handleClick}>
          <Button.Content visible>Add to My Events</Button.Content>
          <Button.Content hidden>
            <Icon name="check" /> I'm Going
          </Button.Content>
        </Button>
      );
    }
  };

  renderShowAttending() {
    if (this.props.loggedIn) {
      return (
        <Card.Content extra>
          <a>{this.props.user.events ? this.renderButton() : null}</a>
        </Card.Content>
      );
    }
  }

  render() {
    return (
      <Card>
        <Image src={this.props.data.event_hero_url} />
        <Card.Content>
          <Card.Header>{this.props.data.event_name_en}</Card.Header>
          <Card.Meta>{this.props.data.start_date}</Card.Meta>
          <Card.Description>{this.props.data.summary}</Card.Description>
        </Card.Content>
        {this.renderShowAttending()}
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
