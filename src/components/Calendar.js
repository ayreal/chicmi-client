import React, { Component } from "react";
import BigCalendar from "react-big-calendar";
import moment from "moment";
import events from "./events";
import "react-big-calendar/lib/css/react-big-calendar.css";

BigCalendar.momentLocalizer(moment);

let allViews = Object.keys(BigCalendar.Views).map(k => BigCalendar.Views[k]);

class Calendar extends Component {
  render() {
    return (
      <BigCalendar
        {...this.props}
        events={events}
        views={allViews}
        step={60}
        defaultDate={new Date(2015, 3, 1)}
      />
    );
  }
}

export default Calendar;
