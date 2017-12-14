import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../actions";

class LoginForm extends Component {
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
      <div>
        Login Form:
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
      </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
