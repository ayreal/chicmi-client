import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { Link, withRouter } from "react-router-dom";
import { logoutUser } from "../actions";
import {
  Container,
  Icon,
  Image,
  Label,
  List,
  Menu,
  Popup
} from "semantic-ui-react";
import moment from "moment";
import SearchBarWrapper from "./SearchBarWrapper";
import logo from "../logo2.svg";

class Navbar extends Component {
  state = {
    showLabel: true
  };

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

  removeLabel = () => {
    this.setState({ showLabel: false });
  };

  renderAlertLink = () => {
    const alertEvents = this.getAlertEvents();
    if (this.props.loggedIn && alertEvents.length > 0) {
      return (
        <Menu.Item>
          {this.state.showLabel ? (
            <Label circular color="red">
              {alertEvents.length}
            </Label>
          ) : null}
          <Popup
            flowing
            trigger={<Icon name="bell" size="large" />}
            hideOnScroll
            onClose={this.removeLabel}
            on="click"
            as="a"
            style={{ fontFamily: "Karla" }}
          >
            {this.renderAlertList(alertEvents)}
          </Popup>
        </Menu.Item>
      );
    } else {
      return null;
    }
  };

  renderAlertList = alertEvents => {
    return (
      <List>
        <p>
          <strong>These sales are ending soon:</strong>
        </p>
        {alertEvents.map(myEvent => (
          <List.Item>
            <List.Icon name="exclamation" />
            <List.Content>
              <Link to={`/events/${myEvent.slug}`}>
                {myEvent.event_name_en}
              </Link>{" "}
              ({moment().to(new Date(myEvent.end_date))})
            </List.Content>
          </List.Item>
        ))}
      </List>
    );
  };

  renderLogoutLink = props => {
    if (this.props.loggedIn) {
      return <Menu.Item onClick={this.handleLogout}>Logout</Menu.Item>;
    } else {
      return null;
    }
  };

  handleLogout = e => {
    e.preventDefault();
    this.props.logoutUser();
  };

  getAlertEvents = () => {
    return this.props.events.filter(myEvent => this.isWithinFiveDays(myEvent));
  };

  isWithinFiveDays = myEvent => {
    const today = moment();
    const eventDate = moment(new Date(myEvent.end_date));
    const difference = eventDate.diff(today, "hours");
    if (difference > 0 && difference <= 120) {
      return true;
    }
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
            {this.props.loggedIn ? this.renderAlertLink() : null}
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
