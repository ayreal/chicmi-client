import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { Link, withRouter } from "react-router-dom";
import { logoutUser } from "../actions";
import { Container, Image, Menu, Button, Icon } from "semantic-ui-react";
import SearchBarWrapper from "./SearchBarWrapper";
import logo from "../logo.svg";

class Navbar extends Component {
  renderProfileLink = props => {
    if (this.props.loggedIn) {
      return (
        <Menu.Item as={Link} to="/profile">
          <Icon name="user" />
        </Menu.Item>
      );
    } else {
      return (
        <Menu.Item as={Link} to="/login">
          <Icon name="user" />
        </Menu.Item>
      );
    }
  };

  renderLogoutLink = props => {
    if (this.props.loggedIn) {
      return (
        <Menu.Item>
          <Button onClick={this.handleLogout}>Logout</Button>
        </Menu.Item>
      );
    } else {
      return null;
    }
  };

  handleLogout = e => {
    console.log("Inside components/Navbar handleLogout");
    e.preventDefault();
    this.props.logoutUser();
  };

  render() {
    return (
      <Menu fixed="top">
        <Container>
          <Menu.Item as="a" header>
            <Image size="mini" src={logo} style={{ marginRight: "1.5em" }} />
            ChicMi
          </Menu.Item>
          <Menu.Item as={Link} to="/">
            Home
          </Menu.Item>
          <Menu.Item>
            <SearchBarWrapper />
          </Menu.Item>
          {this.renderProfileLink()}
          {this.renderLogoutLink()}
        </Container>
      </Menu>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      logoutUser: logoutUser
    },
    dispatch
  );
};

export default withRouter(connect(null, mapDispatchToProps)(Navbar));
