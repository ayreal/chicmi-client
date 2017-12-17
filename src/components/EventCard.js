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
    this.props.fetchAddEvent(this.props.user.id, this.props.data.event_id);
  };

  renderShowAttending = props => {
    if (this.props.loggedIn) {
      return (
        <Card.Content extra>
          <a>
            <Button animated onClick={this.handleClick}>
              <Button.Content visible>Add To My Events</Button.Content>
              <Button.Content hidden>
                <Icon name="check" />
              </Button.Content>
            </Button>
          </a>
        </Card.Content>
      );
    }
  };

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
  // debugger;
  return {
    loggedIn: !!state.currentUser.id,
    user: state.currentUser
  };
};

export default connect(mapStateToProps, actions)(EventCard);
