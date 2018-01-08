import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter, Link } from "react-router-dom";
import {
  Button,
  Form,
  Grid,
  Header,
  Message,
  Divider,
  Segment
} from "semantic-ui-react";

import * as actions from "../actions";

class Login extends Component {
  state = {
    username: "",
    password: ""
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.fetchProfile(this.state, this.props.history);
  };

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleErrors = () => {
    console.log(this.props.errors);
    debugger;
  };

  render() {
    console.log("%c >> Inside render Login \n", "color: #bada55");
    console.log("STATE:", this.state);
    console.log("---------------------");

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
              Log-in to your account
            </Header>
            {this.props.errors ? this.handleErrors() : null}
            <Form size="large" onSubmit={this.handleSubmit}>
              <Segment>
                <Form.Input
                  fluid
                  icon="user"
                  iconPosition="left"
                  placeholder="Username"
                  type="text"
                  name="username"
                  value={this.state.username}
                  onChange={this.handleChange}
                />
                <Form.Input
                  fluid
                  icon="lock"
                  iconPosition="left"
                  placeholder="Password"
                  type="password"
                  name="password"
                  value={this.state.password}
                  onChange={this.handleChange}
                />

                <Button type="submit" fluid size="large" secondary>
                  Login
                </Button>
              </Segment>
            </Form>
            <Message>
              New to us? <Link to="/signup">Signup</Link>
            </Message>
          </Grid.Column>
        </Grid>
        <Divider hidden />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    errors: state.currentUser.errors
  };
};

export default withRouter(connect(mapStateToProps, actions)(Login));
