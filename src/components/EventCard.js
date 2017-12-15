import React, { Component } from "react";
import { Card, Icon, Image, Button } from "semantic-ui-react";
import { connect } from "react-redux";

const EVENT = {
  id: 1,
  external_id: "11878",
  address_business_name: "Apropo Studio",
  address_street_1: "43 West 24th Street",
  address_street_2: "4th Floor",
  slug: "apropo-studio-sample-sale-october-2017",
  address_city: "New York",
  address_zip: "10010",
  event_name_en: "Apropo Studio Sample Sale",
  start_date: "2017-10-23 10:00:00",
  end_date: "2017-12-13 17:00:00",
  summary:
    "There'll be up to 60% off retail prices on men's and women's ready to wear plus homeware at this sample sale from Apropo Studio - featuring Avant Toi, AS65, Bazar Deluxe, Lost In Me, Gilda Midani, Faliero Sarti, Sanchita, Private 0204, Italia Indepen...",
  is_hot: "0",
  created_at: "2017-12-12T15:57:28.567Z",
  updated_at: "2017-12-15T19:02:02.515Z",
  event_hero_url: "https://d3e5kk0afz85hq.cloudfront.net/47092-preview.jpg"
};

class EventCard extends Component {
  parseDate = utcString => {
    // write this
    debugger;
  };

  renderShowAttending = props => {
    if (this.props.loggedIn) {
      return (
        <Card.Content extra>
          <a>
            <Button animated>
              <Button.Content visible>Add To My Events</Button.Content>
              <Button.Content hidden>
                <Icon name="check" />
              </Button.Content>
            </Button>
          </a>
        </Card.Content>
      );
    }
  };

  render() {
    return (
      <Card>
        <Image src={EVENT.event_hero_url} />
        <Card.Content>
          <Card.Header>{EVENT.event_name_en}</Card.Header>
          <Card.Meta>{EVENT.start_date}</Card.Meta>
          <Card.Description>{EVENT.summary}</Card.Description>
        </Card.Content>
        {this.renderShowAttending()}
      </Card>
    );
  }
}

const mapStateToProps = state => {
  // debugger;
  return {
    loggedIn: !!state.currentUser.id,
    user: state.currentUser
  };
};

export default connect(mapStateToProps)(EventCard);
