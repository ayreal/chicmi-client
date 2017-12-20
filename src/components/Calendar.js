import React, { Component } from "react";
import BigCalendar from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";

BigCalendar.momentLocalizer(moment);

let allViews = Object.keys(BigCalendar.Views).map(k => BigCalendar.Views[k]);

class Calendar extends Component {
  componentDidMount() {}

  parseUserEventsForCalendar = () => {
    return this.props.events.map(event => {
      // debugger;
      let newEvent = {};
      newEvent.title = event.event_name_en;
      newEvent.allDay = true;
      newEvent.start = new Date(event.start_date);
      newEvent.end = new Date(event.end_date);
      return newEvent;
    });
  };

  render() {
    return (
      <BigCalendar
        {...this.props}
        events={this.parseUserEventsForCalendar()}
        views={allViews}
        step={60}
        defaultDate={new Date()}
      />
    );
  }
}

export default Calendar;
