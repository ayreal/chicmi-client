import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import {
  Container,
  Header,
  Form,
  Input,
  Button,
  Grid,
  Segment,
  Divider,
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
    this.props.signupUser(this.state, this.props.history);
  };

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className="login-form">
        <br />
        <br />
        <br />
        <br />
        <br />
        {/*
          Heads up! The styles below are necessary for the correct render of this example.
          You can do same with CSS, the main idea is that all the elements up to the `Grid`
          below must have a height of 100%.
        */}
        <style>{`
          body > div,
          body > div > div,
          body > div > div > div.login-form {
            height: 100%;
          }
        `}</style>
        <Grid
          textAlign="center"
          style={{ minHeight: "620px" }}
          verticalAlign="middle"
        >
          <Grid.Column style={{ maxWidth: 450 }}>
            <Header as="h2" textAlign="center">
              Sign up for a Chicmi account
            </Header>
            <Form size="large" onSubmit={this.handleSubmit}>
              <Segment>
                <Input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={this.state.name}
                  onChange={this.handleChange}
                />
                <Input
                  type="password"
                  name="password"
                  placeholder="Choose a password"
                  value={this.state.password}
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

                <Button type="submit" fluid size="large" secondary>
                  Signup
                </Button>
              </Segment>
            </Form>
          </Grid.Column>
        </Grid>
        <Divider hidden />
      </div>
    );
  }
}

export default withRouter(connect(null, actions)(Signup));
