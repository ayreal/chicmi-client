import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../actions";
import { Container, Image, Menu } from "semantic-ui-react";

class Navbar extends Component {
  render() {
    console.log("%c Inside render containers/Navbar.js \n", "color: #bada55");
    console.log("----------------------- \n");

    return (
      <Menu fixed="top" inverted>
        <Container>
          <Menu.Item as="a" header>
            <Image
              size="mini"
              src="/logo.png"
              style={{ marginRight: "1.5em" }}
            />
            ChicMi
          </Menu.Item>
          <Menu.Item as="a">Home</Menu.Item>
        </Container>
      </Menu>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchProfile: () => {
      return dispatch(actions.fetchProfile());
    }
  };
};

export default connect(null, null)(Navbar);
