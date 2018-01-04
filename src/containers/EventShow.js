import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import * as actions from "../actions";
import moment from "moment";
import CommentCard from "../components/CommentCard";
import DesignerCard from "../components/DesignerCard";
import horizontalFill from "../images/fillhoriz1.png";
import {
  Button,
  Card,
  Comment,
  Container,
  Divider,
  Form,
  Grid,
  Header,
  Icon,
  Image,
  Segment,
  Statistic
} from "semantic-ui-react";

// IF I click on an event card, the event is persisted, redux store state is set and I'm taken to the show Page
// IF i go to a URL/refresh, check to see if there is a currentEvent in the redux store. If not, do a fetch

class EventShow extends Component {
  state = {
    comment: ""
  };

  componentDidMount() {
    // this is where bug from loggedout comes from
    const slug = this.props.match.params.slug;
    // if (!this.props.currentEvent.id) {
    //   console.log("Inside componentDidMount")
    this.props.fetchEventBySlug(slug);
    window.scrollTo(0, 0);

    // }
  }

  handleRemove = () => {
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

  handleFollowDesigner = data => {
    // debugger;
    this.props.fetchAddDesigner(this.props.user.id, data);
  };

  handleUnfollowDesigner = data => {
    this.props.fetchDeleteDesigner(this.props.user.id, data);
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

  renderFollowButton = () => {
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

  renderAttendingInsight = () => {
    if (this.props.attending >= 10) {
      return (
        <Segment inverted color="red" secondary>
          <Icon name="fire" size="large" />This event is likely to be very busy.
          We recommend arriving between 45 minutes to 1 hour ahead of time to
          avoid lines.
        </Segment>
      );
    } else if (this.props.attending >= 5 && this.props.attending < 10) {
      return (
        <Segment inverted color="yellow" secondary>
          <Icon name="fire" size="large" />This event may be slightly busy.
        </Segment>
      );
    } else {
      return null;
    }
  };

  renderEvent = () => {
    return <div>{this.props.loggedIn ? this.renderFollowButton() : null}</div>;
  };

  renderCommentsSection = () => {
    return (
      <div>
        <Divider />
        <Divider hidden />
        <Grid columns={2} centered style={{ background: "#FFF" }}>
          <Grid.Column>{this.renderComments()}</Grid.Column>
          <Grid.Column>
            <Segment
              inverted
              textAlign="center"
              style={{
                padding: "1em 0em",
                backgroundImage: `url(${horizontalFill})`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "60% 00%"
              }}
              vertical
            >
              <Header
                as="h2"
                inverted
                style={{
                  fontSize: "3em",
                  marginTop: "6em",
                  fontFamily: "Karla",
                  fontWeight: "bold"
                }}
              >
                {" "}
                <Icon name="angle left" /> People Are Saying...
              </Header>
            </Segment>
          </Grid.Column>
        </Grid>
      </div>
    );
  };

  renderComments = () => {
    return (
      <Comment.Group>
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
          <Button content="Comment" />
        </Form>
      </Comment.Group>
    );
  };

  renderDesigners = () => {
    return (
      <div>
        <Header as="h2">Designers In This Sale</Header>

        <Card.Group itemsPerRow={4}>
          {this.props.designers.map(designer => (
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
  };

  render() {
    console.log("%c >> Inside render EventShow \n", "color: #bada55");
    console.log("PROPS: ", this.props);
    console.log("STATE: ", this.state);
    console.log("----------------------- \n");

    return (
      <Container>
        <br />
        <br />
        <br />
        <br />
        <br />
        <Grid
          container
          stackable
          verticalAlign="middle"
          columns={2}
          style={{ background: "#fff" }}
        >
          <Grid.Column floated="right">
            <Image size="huge" src={this.props.currentEvent.event_hero_url} />
          </Grid.Column>
          <Grid.Column>
            <Header as="h1">{this.props.currentEvent.event_name_en}</Header>
            {this.renderEvent()}
            <br />
            <p>
              <strong>Starts: </strong>
              {moment(new Date(this.props.currentEvent.start_date)).format(
                "dddd, MMMM Do, h:mm a"
              )}
            </p>
            <p>
              <strong>Ends: </strong>
              {moment(new Date(this.props.currentEvent.end_date)).format(
                "dddd, MMMM Do, h:mm a"
              )}
            </p>
            <p>
              <strong>Where: </strong>{" "}
              {this.props.currentEvent.address_business_name} -{" "}
              {this.props.currentEvent.address_street_1}
              {this.props.currentEvent.address_street_2
                ? ", " + this.props.currentEvent.address_street_2
                : null}
            </p>
            <p>{this.props.currentEvent.summary}</p>
            <Statistic color="grey">
              <Statistic.Value>
                <Icon name="check" />
                {this.props.attending}
              </Statistic.Value>
              <Statistic.Label>attending</Statistic.Label>
            </Statistic>
            <p>{this.renderAttendingInsight()}</p>
          </Grid.Column>
        </Grid>

        {this.props.designers.count > 0 ? this.renderDesigners() : null}

        {this.props.loggedIn ? this.renderCommentsSection() : null}
        <Divider hidden />
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
    comments: state.currentEvent.comments,
    attending: state.currentEvent.attending,
    designers: state.currentEvent.designers
  };
};
export default withRouter(connect(mapStateToProps, actions)(EventShow));
