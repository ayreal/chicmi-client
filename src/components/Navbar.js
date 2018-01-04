import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { Link, withRouter } from "react-router-dom";
import { logoutUser } from "../actions";
import { Container, Image, Menu, Icon, Popup } from "semantic-ui-react";
import SearchBarWrapper from "./SearchBarWrapper";
import logo from "../logo2.svg";

class Navbar extends Component {
  renderProfileLink = props => {
    if (this.props.loggedIn) {
      return (
        <Menu.Item as={Link} to="/profile">
          <Icon name="user" size="large" />
        </Menu.Item>
      );
    } else {
      return (
        <Menu.Item as={Link} to="/login">
          <Icon name="user" size="large" />
        </Menu.Item>
      );
    }
  };

  renderAlertLink = () => {
    if (this.props.loggedIn && this.props.events.length > 0) {
      const nextEvent = this.getNextEvent();
      return (
        <Menu.Item>
          <Popup
            trigger={<Icon name="star" size="large" />}
            on="click"
            as="a"
            content={nextEvent.address_business_name}
            style={{
              borderRadius: 0,
              opacity: 0.7,
              padding: "2em"
            }}
            inverted
          />
        </Menu.Item>
      );
    } else {
      return null;
    }
  };

  renderLogoutLink = props => {
    if (this.props.loggedIn) {
      return <Menu.Item onClick={this.handleLogout}>Logout</Menu.Item>;
    } else {
      return null;
    }
  };

  handleLogout = e => {
    console.log("Inside components/Navbar handleLogout");
    e.preventDefault();
    this.props.logoutUser();
  };

  getNextEvent = () => {
    return this.props.events.sort(function(a, b) {
      return new Date(a.end_date) - new Date(b.end_date);
    })[0];
  };

  render() {
    return (
      <Menu inverted borderless fixed="top">
        <Container>
          <Menu.Item as={Link} to="/" header>
            <Image size="mini" src={logo} style={{ marginRight: "1.5em" }} />
          </Menu.Item>
          <Menu.Item as={Link} to="/" style={{ fontFamily: "Orbitron" }} header>
            C H I C M I
          </Menu.Item>
          <Menu.Menu position="right">
            <Menu.Item>
              <SearchBarWrapper />
            </Menu.Item>
            {this.renderProfileLink()}
            {this.renderAlertLink()}
            {this.renderLogoutLink()}
          </Menu.Menu>
        </Container>
      </Menu>
    );
  }
}

const mapStateToProps = state => {
  return {
    events: state.currentUser.events
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      logoutUser: logoutUser
    },
    dispatch
  );
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Navbar));
