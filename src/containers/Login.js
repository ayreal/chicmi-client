import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter, Link } from "react-router-dom";
import { Container, Header, Form, Input, Button } from "semantic-ui-react";
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

  render() {
    console.log("%c >> Inside render Login \n", "color: #bada55");
    console.log("---------------------");

    return (
      <Container>
        <br />
        <br />
        <br />
        <br />
        <Header as="h1">Login</Header>

        <Form onSubmit={this.handleSubmit}>
          <Input
            type="text"
            name="username"
            value={this.state.username}
            onChange={this.handleChange}
          />
          <Input
            type="password"
            name="password"
            value={this.state.password}
            onChange={this.handleChange}
          />
          <Button type="submit">Login</Button>
        </Form>

        <Link to="/signup">Signup</Link>
      </Container>
    );
  }
}

export default withRouter(connect(null, actions)(Login));
