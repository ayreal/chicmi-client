import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../actions";

class LoginForm extends Component {
  state = {
    username: "",
    password: ""
  };

  handleSubmit(e) {
    e.preventDefault();
    this.props.fetchProfile();
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          name="username"
          value={this.state.username}
          onChange={this.handleChange}
        />
        <input
          type="text"
          name="password"
          value={this.state.password}
          onChange={this.handleChange}
        />
        <button type="submit">Login</button>
      </form>
    );
  }
}

export default LoginForm;
