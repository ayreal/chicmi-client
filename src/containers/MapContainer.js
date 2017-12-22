import React, { Component } from "react";
import { Map, InfoWindow, Marker, GoogleApiWrapper } from "google-maps-react";
// import { Container } from "semantic-ui-react";

const style = {
  width: "100%",
  height: "100%",
  position: "relative"
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
        zoom={14}
        style={style}
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
            position={{
              lat: myEvent.latitude,
              lng: myEvent.longitude
            }}
            onClick={this.onMarkerClick}
          />
        ))}
        <InfoWindow
          marker={this.state.activeMarker}
          visible={this.state.showingInfoWindow}
        >
          <div>
            <h4>{this.state.selectedPlace.name}</h4>
          </div>
        </InfoWindow>
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyAole5aYswLbjR4-ah12Q6uLvIBPdS8rxI"
})(MapContainer);
