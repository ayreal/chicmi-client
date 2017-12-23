import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter, Link } from "react-router-dom";
import {
  Container,
  Header,
  Form,
  Input,
  Button,
  TextArea
} from "semantic-ui-react";
import * as actions from "../actions";

class Signup extends Component {
  state = {
    username: "",
    password: "",
    name: "",
    email: "",
    photo: "",
    city_id: 2990574,
    twitter: "",
    instagram: "",
    bio: ""
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.fetchProfile(this.state, this.props.history);
  };

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  render() {
    console.log("%c >> Inside render Signup \n", "color: #bada55");
    console.log("---------------------");

    return (
      <Container style={{ marginTop: "7em" }}>
        <Header as="h1">Signup</Header>
        <Form onSubmit={this.handleSubmit}>
          <Input
            type="text"
            name="name"
            placeholder="Your Name"
            value={this.state.name}
            onChange={this.handleChange}
          />
          <Input
            type="text"
            name="email"
            placeholder="you@youremail.com"
            value={this.state.email}
            onChange={this.handleChange}
          />
          <Input
            type="text"
            name="photo"
            placeholder="Link to your photo"
            value={this.state.photo}
            onChange={this.handleChange}
          />

          <Input
            type="text"
            name="username"
            placeholder="Choose a username"
            value={this.state.username}
            onChange={this.handleChange}
          />

          <Input
            type="text"
            name="twitter"
            placeholder="Your Twitter"
            value={this.state.twitter}
            onChange={this.handleChange}
          />
          <Input
            type="text"
            name="instagram"
            placeholder="Your Instagram"
            value={this.state.instagram}
            onChange={this.handleChange}
          />

          <TextArea
            name="bio"
            value={this.state.bio}
            onChange={this.handleChange}
            placeholder="Tell us about yourself"
          />

          <Button type="submit">Signup</Button>
        </Form>
      </Container>
    );
  }
}

export default withRouter(connect(null, actions)(Signup));
