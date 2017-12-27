import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../actions";
import { Container, Header, Card, Segment, Grid } from "semantic-ui-react";
import EventCard from "./EventCard";
import splash from "../images/splashtest.png";

// remove hardcode data later
const EVENTS = [
  {
    address_business_name: "The Museum at FIT",
    address_street_1: "7th Avenue at 27 Street",
    address_street_2: "",
    address_city: "New York",
    address_zip: "10001",
    country_id: "2085",
    event_id: "7515",
    event_name_en: "Expedition: Fashion from the Extremes",
    event_name_zh: "",
    event_is_featured: "1",
    event_eligibility_type_id: "1",
    event_logo: "19861",
    event_hero: "47092",
    start_date: "2017-09-15 12:00:00",
    utc_diff: "-4",
    end_date: "2018-01-06 17:00:00",
    event_type_id: "9",
    latitude: "40.74659882",
    longitude: "-73.99418724",
    is_hot: "0",
    created: "2017-01-08 17:36:32",
    page_views_total: "1305",
    hotness_value: "14",
    comment_count: "4",
    is_cancelled: "0",
    is_sold_out: "0",
    slug: "expedition-fashion-from-the-extremes-september-2017",
    icons: null,
    vip_level: "0",
    ticket_mode: "0",
    days: "113",
    summary_en:
      "Expedition: Fashion from the Extremes traces a few of the most challenging forms of human exploration and looks at how the clothes made for survival in these environments found their way into high fashion.",
    summary_zh: "",
    location_en: "The Museum at FIT, 7th Avenue at 27 Street, New York, 10001",
    location_zh: "The Museum at FIT, 7th Avenue at 27 Street, New York, 10001",
    price: "",
    action_type: "",
    action_url: "",
    event_name: "Expedition: Fashion from the Extremes",
    summary:
      "Expedition: Fashion from the Extremes traces a few of the most challenging forms of human exploration and looks at how the clothes made for survival in these environments found their way into high fashion.",
    location: "The Museum at FIT, 7th Avenue at 27 Street, New York, 10001",
    formatted_address:
      "The Museum at FIT, 7th Avenue at 27 Street, New York, 10001",
    detail_url:
      "https://www.chicmi.com/event/expedition-fashion-from-the-extremes-september-2017/?utm_source=embed&utm_medium=social&utm_campaign=7515",
    date_label: "On now",
    date_group: "today",
    date_local: "Sep 15 2017",
    event_type: "Exhibitions",
    event_type_noun: "Exhibition",
    event_tag_colour: "439600",
    event_eligibility_type: "Free Entry",
    event_hero_url: "https://d3e5kk0afz85hq.cloudfront.net/47092-preview.jpg",
    image_align: "top",
    event_logo_pin: "https://d3e5kk0afz85hq.cloudfront.net/19861-pin.png",
    event_logo_url: "https://d3e5kk0afz85hq.cloudfront.net/19861-logo.jpg"
  },
  {
    address_business_name: "MoMA",
    address_street_1: "11 West 53rd Street",
    address_street_2: "",
    address_city: "New York",
    address_zip: "10019",
    country_id: "2085",
    event_id: "3327",
    event_name_en: "Items: Is Fashion Modern?",
    event_name_zh: "",
    event_is_featured: "1",
    event_eligibility_type_id: "4",
    event_logo: "23380",
    event_hero: "23381",
    start_date: "2017-10-01 10:30:00",
    utc_diff: "-4",
    end_date: "2018-01-28 17:30:00",
    event_type_id: "9",
    latitude: "40.76141700",
    longitude: "-73.97712030",
    is_hot: "0",
    created: "2016-04-06 13:37:57",
    page_views_total: "959",
    hotness_value: "12",
    comment_count: "19",
    is_cancelled: "0",
    is_sold_out: "0",
    slug: "items-is-fashion-modern-october-2017",
    icons: null,
    vip_level: "0",
    ticket_mode: "0",
    days: "119",
    summary_en:
      " This exhibition from MoMA will explore the past, present and future of 99 items of fashion that have had a strong impact on society in the 20th and 21st centuries.",
    summary_zh: "",
    location_en: "MoMA, 11 West 53rd Street, New York, 10019",
    location_zh: "MoMA, 11 West 53rd Street, New York, 10019",
    price: "$25.00",
    action_type: "buy_tickets",
    action_url: "http://www.moma.org/calendar/exhibitions/1638",
    event_name: "Items: Is Fashion Modern?",
    summary:
      " This exhibition from MoMA will explore the past, present and future of 99 items of fashion that have had a strong impact on society in the 20th and 21st centuries.",
    location: "MoMA, 11 West 53rd Street, New York, 10019",
    formatted_address: "MoMA, 11 West 53rd Street, New York, 10019",
    detail_url:
      "https://www.chicmi.com/event/items-is-fashion-modern-october-2017/?utm_source=embed&utm_medium=social&utm_campaign=3327",
    date_label: "On now",
    date_group: "today",
    date_local: "Oct 1 2017",
    event_type: "Exhibitions",
    event_type_noun: "Exhibition",
    event_tag_colour: "439600",
    event_eligibility_type: "Paid Entry",
    event_hero_url: "https://d3e5kk0afz85hq.cloudfront.net/23381-preview.jpg",
    image_align: "top",
    event_logo_pin: "https://d3e5kk0afz85hq.cloudfront.net/23380-pin.png",
    event_logo_url: "https://d3e5kk0afz85hq.cloudfront.net/23380-logo.jpg"
  },
  {
    address_business_name: "American Stock Exchange Building",
    address_street_1: "86 Trinity Place",
    address_street_2: "",
    address_city: "New York",
    address_zip: "10006",
    country_id: "2085",
    event_id: "12176",
    event_name_en: "Louis Vuitton: Volez, Voguez, Voyagez",
    event_name_zh: "",
    event_is_featured: "1",
    event_eligibility_type_id: "2",
    event_logo: "4302",
    event_hero: "109489",
    start_date: "2017-10-27 00:00:00",
    utc_diff: "-4",
    end_date: "2018-01-07 23:59:00",
    event_type_id: "9",
    latitude: "40.70852130",
    longitude: "-74.01264380",
    is_hot: "0",
    created: "2017-10-27 07:38:03",
    page_views_total: "95",
    hotness_value: "17",
    comment_count: "14",
    is_cancelled: "0",
    is_sold_out: "0",
    slug: "louis-vuitton-volez-voguez-voyagez-october-2017",
    icons: "",
    vip_level: "0",
    ticket_mode: "0",
    days: "72",
    summary_en:
      " Uncover the adventures that formed the House of Louis Vuitton in this exhibition at the American Stock Exchange Building.",
    summary_zh: "",
    location_en:
      "American Stock Exchange Building, 86 Trinity Place, New York, 10006",
    location_zh:
      "American Stock Exchange Building, 86 Trinity Place, New York, 10006",
    price: "",
    action_type: "buy_tickets",
    action_url:
      "http://us.louisvuitton.com/eng-us/heritage-savoir-faire/nycvvv",
    event_name: "Louis Vuitton: Volez, Voguez, Voyagez",
    summary:
      " Uncover the adventures that formed the House of Louis Vuitton in this exhibition at the American Stock Exchange Building.",
    location:
      "American Stock Exchange Building, 86 Trinity Place, New York, 10006",
    formatted_address:
      "American Stock Exchange Building, 86 Trinity Place, New York, 10006",
    detail_url:
      "https://www.chicmi.com/event/louis-vuitton-volez-voguez-voyagez-october-2017/?utm_source=embed&utm_medium=social&utm_campaign=12176",
    date_label: "On now",
    date_group: "today",
    date_local: "Oct 27 2017",
    event_type: "Exhibitions",
    event_type_noun: "Exhibition",
    event_tag_colour: "439600",
    event_eligibility_type: "Booking Required",
    event_hero_url: "https://d3e5kk0afz85hq.cloudfront.net/109489-preview.jpg",
    image_align: "top",
    event_logo_pin: "https://d3e5kk0afz85hq.cloudfront.net/4302-pin.png",
    event_logo_url: "https://d3e5kk0afz85hq.cloudfront.net/4302-logo.jpg"
  }
];

class Events extends Component {
  renderEvents = () => {
    return EVENTS.map(event => {
      return <EventCard key={event.event_id} data={event} />;
    });
  };

  render() {
    console.log("%c >> Inside render Events \n", "color: #bada55");
    console.log("PROPS: ", this.props);
    console.log("PROPS EVENTS LENGTH:", this.props.events.length);
    console.log("----------------------- \n");
    return (
      <div style={{ marginTop: "4em" }}>
        <Segment
          inverted
          textAlign="center"
          style={{ minHeight: 700, padding: "1em 0em" }}
          vertical
        >
          <Container text>
            <Header
              as="h1"
              content="This is Chicmi"
              inverted
              style={{
                fontSize: "4em",
                fontWeight: "normal",
                marginBottom: 0,
                marginTop: "3em",
                background:
                  "url(/Users/ariel/dev/labs/chicmi/chicmi-client/src/images/splashtest.png) no-repeat center"
              }}
            />
            <Header
              as="h2"
              content="For sample sales in NYC, drama-free."
              inverted
              style={{ fontSize: "1.7em", fontWeight: "normal" }}
            />
          </Container>
        </Segment>

        <Container>
          <Header as="h1">This Week's Sample Sales</Header>
          <p>Some text here.</p>
          <Card.Group itemsPerRow={3}>
            {this.props.events ? this.renderEvents() : null}
          </Card.Group>
        </Container>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.currentUser,
    events: state.events
  };
};

export default connect(mapStateToProps, actions)(Events);
