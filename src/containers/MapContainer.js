import React, { Component } from "react";
import { Map, InfoWindow, Marker, GoogleApiWrapper } from "google-maps-react";
import { config } from "../config";
const mapStyles = require("./mapStyles.json");
// const KEY = config.GOOGLE;
const markerStyles = {
  path:
    "M0-48c-9.8 0-17.7 7.8-17.7 17.4 0 15.5 17.7 30.6 17.7 30.6s17.7-15.4 17.7-30.6c0-9.6-7.9-17.4-17.7-17.4z",
  scale: 0.5,
  fillColor: "#f54f59",
  fillOpacity: 0.8,
  strokeColor: "#f54f59",
  strokeWeight: 5
};

export class MapContainer extends Component {
  state = {
    showingInfoWindow: false,
    activeMarker: {},
    selectedPlace: {}
  };

  onMarkerClick = (props, marker, e) => {
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });
    this.props.setCalendarEvent(props);
  };

  onMapClicked = props => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      });
    }
  };

  render() {
    console.log("%c Inside render MapContainer \n", "color: #bada55");
    console.log("PROPS: ", this.props);
    console.log("----------------------- \n");

    return (
      <Map
        className={"map"}
        google={this.props.google}
        zoom={13}
        style={{
          width: "100%",
          height: "100%",
          position: "relative"
        }}
        styles={mapStyles}
        initialCenter={{
          lat: 40.7433809,
          lng: -73.9912899
        }}
        onClick={this.onMapClicked}
      >
        {this.props.events.map(myEvent => (
          <Marker
            key={myEvent.id}
            title={myEvent.event_name_en}
            name={myEvent.event_name_en}
            data={myEvent}
            position={{
              lat: myEvent.latitude,
              lng: myEvent.longitude
            }}
            onClick={this.onMarkerClick}
            icon={markerStyles}
          />
        ))}
        <InfoWindow
          marker={this.state.activeMarker}
          visible={this.state.showingInfoWindow}
        >
          <div>
            <h4 style={{ fontFamily: "Karla" }}>
              {this.state.selectedPlace.name}
            </h4>
          </div>
        </InfoWindow>
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyAole5aYswLbjR4-ah12Q6uLvIBPdS8rxI"
})(MapContainer);
