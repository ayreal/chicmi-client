import React, { Component } from "react";
import BigCalendar from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";

BigCalendar.momentLocalizer(moment);

let allViews = Object.keys(BigCalendar.Views).map(k => BigCalendar.Views[k]);

class Calendar extends Component {
  parseUserEventsForCalendar = props => {
    return this.props.events.map(event => {
      let newEvent = { ...event };
      newEvent.title = event.event_name_en;
      // newEvent.allDay = true;
      newEvent.start = new Date(event.start_date);
      newEvent.end = new Date(event.end_date);
      return newEvent;
    });
  };

  handleClick = event => {
    debugger;
  };

  render() {
    return (
      <BigCalendar
        {...this.props}
        selectable
        events={this.parseUserEventsForCalendar()}
        views={{
          month: true,
          week: true
        }}
        defaultView={"week"}
        step={60}
        defaultDate={new Date()}
        onSelectEvent={this.handleClick}
      />
    );
  }
}

export default Calendar;
