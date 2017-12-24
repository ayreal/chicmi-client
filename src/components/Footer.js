import React from "react";
import {
  Container,
  Grid,
  Header,
  List,
  Segment,
  Icon
} from "semantic-ui-react";

const Footer = props => (
  <Segment inverted vertical style={{ padding: "5em 0em" }}>
    <Container>
      <Grid divided inverted stackable>
        <Grid.Row>
          <Grid.Column width={3}>
            <Header inverted as="h4" content="GET INVOLVED" />
            <List link inverted>
              <List.Item as="a">Email Fashion Alerts</List.Item>
              <List.Item as="a">Become a VIP</List.Item>
              <List.Item as="a">Get the App</List.Item>
              <List.Item as="a">List Your Event</List.Item>
              <List.Item as="a">For Business</List.Item>
              <List.Item as="a">Tools for Bloggers</List.Item>
            </List>
          </Grid.Column>
          <Grid.Column width={3}>
            <Header inverted as="h4" content="ABOUT" />
            <List link inverted>
              <List.Item as="a">Who We Are</List.Item>
              <List.Item as="a">News</List.Item>
              <List.Item as="a">Contact Us</List.Item>
              <List.Item as="a">Link</List.Item>
            </List>
          </Grid.Column>
          <Grid.Column width={7}>
            <Header as="h4" inverted>
              FOLLOW US
            </Header>
            <Icon name="instagram" size="large" />
            <Icon name="facebook" size="large" />
            <Icon name="twitter" size="large" />
            <Icon name="snapchat" size="large" />
            <Icon name="google" size="large" />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Container>
  </Segment>
);
export default Footer;
