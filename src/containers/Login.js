import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { Container, Header, Form, Input, Button } from "semantic-ui-react";
import * as actions from "../actions";

class Login extends Component {
  state = {
    username: "",
    password: ""
  };

  handleSubmit = e => {
    e.preventDefault();
    // console.log("Inside handleSubmit, this.state is:", this.state);
    this.props.fetchProfile(this.state);
  };

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <Container text style={{ marginTop: "7em" }}>
        <Header as="h1">Login</Header>

        <Form onSubmit={this.handleSubmit}>
          <Input
            type="text"
            name="username"
            value={this.state.username}
            onChange={this.handleChange}
          />
          <Input
            type="text"
            name="password"
            value={this.state.password}
            onChange={this.handleChange}
          />
          <Button type="submit">Login</Button>
        </Form>
      </Container>
    );
  }
}

const mapStateToProps = ({ loading, currentUser }) => {
  return {
    loading,
    currentUser
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchProfile: data => {
      return dispatch(actions.fetchProfile(data));
    }
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Login));
