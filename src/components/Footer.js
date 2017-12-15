import React from "react";
import { Container, Grid, Header, List, Segment } from "semantic-ui-react";

const Footer = props => (
  <Segment inverted vertical style={{ padding: "5em 0em" }}>
    <Container>
      <Grid divided inverted stackable>
        <Grid.Row>
          <Grid.Column width={3}>
            <Header inverted as="h4" content="About" />
            <List link inverted>
              <List.Item as="a">Link</List.Item>
              <List.Item as="a">Link</List.Item>
              <List.Item as="a">Link</List.Item>
              <List.Item as="a">Link</List.Item>
            </List>
          </Grid.Column>
          <Grid.Column width={3}>
            <Header inverted as="h4" content="Services" />
            <List link inverted>
              <List.Item as="a">Link</List.Item>
              <List.Item as="a">Link</List.Item>
              <List.Item as="a">Link</List.Item>
              <List.Item as="a">Link</List.Item>
            </List>
          </Grid.Column>
          <Grid.Column width={7}>
            <Header as="h4" inverted>
              More
            </Header>
            <p>Stuff here.</p>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Container>
  </Segment>
);
export default Footer;
