import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../actions";
import { withRouter } from "react-router-dom";
import {
  Container,
  Header,
  Button,
  Icon,
  Comment,
  Form
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
        <Button animated onClick={this.handleRemove}>
          <Button.Content visible>I'm Going</Button.Content>
          <Button.Content hidden>
            <Icon name="cancel" /> Remove From My Events
          </Button.Content>
        </Button>
      );
    } else {
      return (
        <Button animated onClick={this.handleAdd}>
          <Button.Content visible>Add To My Events</Button.Content>
          <Button.Content hidden>
            <Icon name="check" />
          </Button.Content>
        </Button>
      );
    }
  };

  renderEvent = () => {
    return (
      <div>
        This is {this.props.currentEvent.event_name_en}{" "}
        {this.props.loggedIn ? this.renderShowAttending() : null}
      </div>
    );
  };

  renderComments = () => {
    if (this.props.comments.length > 0) {
      console.log("%c ... rendering Comments \n", "color: #42dff4");
      return (
        <Comment.Group>
          <Header as="h3" dividing>
            Comments
          </Header>

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
    }
  };

  render() {
    console.log("%c >> Inside render EventShow \n", "color: #bada55");
    console.log("PROPS: ", this.props);
    console.log("COMMENTS: ", this.props.comments);
    console.log("----------------------- \n");
    return (
      <Container style={{ marginTop: "7em" }}>
        <Header as="h1">Sample Sale Show Page</Header>

        {this.renderEvent()}

        {this.renderComments()}
      </Container>
    );
  }
}
const mapStateToProps = state => {
  return {
    loggedIn: !!state.currentUser.id,
    user: state.currentUser,
    userEvents: state.currentUser.events,
    currentEvent: state.currentEvent,
    comments: state.currentEvent.comments
  };
};
export default withRouter(connect(mapStateToProps, actions)(EventShow));
