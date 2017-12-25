import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../actions";
import { withRouter } from "react-router-dom";
import {
  Container,
  Grid,
  Image,
  Segment,
  Header,
  Button,
  Icon,
  Comment,
  Form,
  Statistic
} from "semantic-ui-react";
import CommentCard from "../components/CommentCard";

// IF I click on an event card, the event is persisted, redux store state is set and I'm taken to the show Page
// IF i go to a URL/refresh, check to see if there is a currentEvent in the redux store. If not, do a fetch

class EventShow extends Component {
  state = {
    comment: ""
  };

  componentDidMount() {
    const slug = this.props.match.params.slug;
    if (!this.props.loggedIn) {
      this.props.fetchEventBySlug(slug);
    }
  }

  handleRemove = () => {
    // debugger;
    this.props.fetchDeleteEvent(this.props.user.id, this.props.currentEvent.id);
  };

  handleAdd = () => {
    this.props.fetchAddEvent(this.props.user.id, this.props.currentEvent);
  };

  handleChangeComment = e => {
    this.setState({
      comment: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    let userId;
    if (this.props.loggedIn) {
      userId = this.props.user.id;
    } else {
      userId = 8;
    }
    this.props.fetchAddComment(
      userId,
      this.props.currentEvent.id,
      this.state.comment
    );
    this.setState({
      comment: ""
    });
  };

  isUserEvent = myEvent => {
    return myEvent.id === this.props.currentEvent.id;
  };

  renderShowAttending = () => {
    // if the currentEvent is also a userEvent
    if (this.props.userEvents.find(this.isUserEvent)) {
      return (
        <Button
          animated
          onClick={this.handleRemove}
          size="small"
          textAlign="center"
        >
          <Button.Content visible>I'm Going</Button.Content>
          <Button.Content hidden>
            <Icon name="cancel" />
          </Button.Content>
        </Button>
      );
    } else {
      return (
        <Button
          animated
          onClick={this.handleAdd}
          size="small"
          textAlign="center"
        >
          <Button.Content visible>Add To My Events</Button.Content>
          <Button.Content hidden>
            <Icon name="check" />
          </Button.Content>
        </Button>
      );
    }
  };

  renderEvent = () => {
    return <div>{this.props.loggedIn ? this.renderShowAttending() : null}</div>;
  };

  renderComments = () => {
    return (
      <Comment.Group>
        <Header as="h3" dividing>
          People Are Saying...
        </Header>

        {this.props.comments.length > 0
          ? null
          : "There are no comments yet. Be the first!"}

        {this.props.comments.map(comment => (
          <CommentCard
            key={comment.id}
            data={comment}
            loggedIn={this.props.loggedIn}
            currentUser={this.props.user}
          />
        ))}

        <Form reply onSubmit={this.handleSubmit}>
          <Form.TextArea
            value={this.state.comment}
            onChange={this.handleChangeComment}
          />
          <Button content="Comment" labelPosition="left" icon="edit" />
        </Form>
      </Comment.Group>
    );
  };

  render() {
    console.log("%c >> Inside render EventShow \n", "color: #bada55");
    console.log("PROPS: ", this.props);
    console.log("COMMENTS: ", this.props.comments);
    console.log("----------------------- \n");
    return (
      <Grid
        container
        stackable
        verticalAlign="middle"
        columns={2}
        divided
        style={{ marginTop: "7em" }}
      >
        <Grid.Row>
          <Grid.Column floated="right" width={6}>
            <Image size="huge" src={this.props.currentEvent.event_hero_url} />
          </Grid.Column>
          <Grid.Column width={8}>
            <Header as="h1">{this.props.currentEvent.event_name_en}</Header>
            {this.renderEvent()}

            <p style={{ fontSize: "1.33em" }}>
              We can give your company superpowers to do things that they never
              thought possible. Let us delight your customers and empower your
              needs... through pure data analytics.
            </p>
            <Header as="h3" style={{ fontSize: "2em" }}>
              We Make Bananas That Can Dance
            </Header>
            <p style={{ fontSize: "1.33em" }}>
              Yes that's right, you thought it was the stuff of dreams, but even
              bananas can be bioengineered.
            </p>
            <Statistic color="grey">
              <Statistic.Value>
                <Icon name="check" />
                {this.props.attending}
              </Statistic.Value>
              <Statistic.Label>attending</Statistic.Label>
            </Statistic>
          </Grid.Column>
        </Grid.Row>

        <Grid.Row centered>
          <Grid.Column>{this.renderComments()}</Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}
const mapStateToProps = state => {
  return {
    loggedIn: !!state.currentUser.id,
    user: state.currentUser,
    userEvents: state.currentUser.events,
    currentEvent: state.currentEvent,
    comments: state.currentEvent.comments,
    attending: state.currentEvent.attending
  };
};
export default withRouter(connect(mapStateToProps, actions)(EventShow));
