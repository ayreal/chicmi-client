import React, { Component } from "react";
import { connect } from "react-redux";
import { Route } from "react-router-dom";
import * as actions from "../actions";
import Events from "./Events";
import Login from "./Login";
import Signup from "../components/Signup";
import Profile from "./Profile";
import EventShow from "./EventShow";

class Main extends Component {
  componentDidMount() {
    this.props.fetchRemoteEvents();
  }

  // componentWillReceiveProps(nextProps) {
  //   this.props.fetchRemoteEvents();
  // }

  render() {
    console.log("%c>> Inside render Main \n", "color: #bada55");
    console.log("PROPS: ", this.props);
    console.log("----------------------- \n");

    return (
      <div className="Main">
        <Route exact path="/" component={Events} />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} />
        <Route path="/profile" component={Profile} />
        <Route
          path="/events/:slug"
          render={props => <EventShow {...props} />}
        />
      </div>
    );
  }
}

export default connect(null, actions)(Main);
