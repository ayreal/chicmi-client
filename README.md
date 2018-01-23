View server-side repo [here](https://github.com/ayreal/chicmi-server).

## Chicmi

A web app designed to connect style-conscious New Yorkers with upcoming fashion sample sales. Users can view current events in New York, comment on them, and change their "attending" status. From a profile page, a user can also view their own past/present events as well as track them on a calendar and map. UX/UI-focused redesign of the original [Chicmi](https://www.chicmi.com) using their API to source current sales and project's own API to persist/interact with that data.

## Key Technologies, Packages, and Gems

* Front End

  * React.js with Redux
  * redux-thunk
  * Semantic UI with custom stylesheet
  * Google Maps React
  * Moment.js

* Back End

  * Rails 5 API
  * JWT token authentication
  * Postgres database

## Core Features

* Users who are not authorized can view and search events but are prevented from interacting with them
* Events and designers can be followed/unfollowed
* An event show page displays the events details, comments, and associated designers
* Events with higher attendance rates display an advisory to the user
* Events link out to their respective social media pages and can be added to a user's gCal
* Users can make comments on events and delete them if they are the authenticated user
* An alert notification on login shows events a user is attending that are within a few days of ending
* Events can be searched by name
* On a profile page, users can view all events they have followed sorted by past and upcoming events,
* On a profile page, users can view their events on a calendar and a Google Map

## Demo

[View live demo here](https://chicmi.herokuapp.com)

![chicmi login](https://media.giphy.com/media/3o751V6TGDc3aaRfOM/giphy.gif)

Logging in shows the user's attending events and alerts

 <br />

![add to gcal](https://media.giphy.com/media/26CaMrSZLgiabbIE8/giphy.gif)

An event can be added to gCal (with prior Google authentication)

  <br />

![follow and unfollow](https://media.giphy.com/media/3ohc1bDJlf13oqzwfm/giphy.gif)

Choosing to follow/unfollow an event changes the event's attendance and adds/removes it from the user's events

  <br/>

![comments](https://media.giphy.com/media/3oFzlUZF2yFmQZ9rLG/giphy.gif)

Users can comment on events and delete their own comments

  <br />

![search](https://media.giphy.com/media/3oFzmqRhFl5IRld90k/giphy.gif)

Events can be searched by name

  <br />

![profile](https://media.giphy.com/media/l49JMoyQWfWG1sF5S/giphy.gif)

Users can manage their events from a profile page and view events on a map/calendar
