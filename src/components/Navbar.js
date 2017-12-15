import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import * as actions from "../actions";
import { Container, Image, Menu, Button, Icon } from "semantic-ui-react";
import logo from "../logo.svg";

class Navbar extends Component {
  renderProfileAndLogout = props => {
    if (this.props.loggedIn) {
      return (
        <Menu.Item as={Link} to="/profile">
          <Icon name="user" />
          <Button>Logout</Button>
        </Menu.Item>
      );
    } else {
      return (
        <Menu.Item as="a" to="/login">
          <Icon name="user" />
        </Menu.Item>
      );
    }
  };

  render() {
    return (
      <Menu fixed="top">
        <Container>
          <Menu.Item as="a" header>
            <Image size="mini" src={logo} style={{ marginRight: "1.5em" }} />
            ChicMi
          </Menu.Item>
          <Menu.Item as="a">Home</Menu.Item>
          {this.renderProfileAndLogout()}
        </Container>
      </Menu>
    );
  }
}

export default Navbar;
