import React, { Component } from "react";
import { Map, InfoWindow, Marker, GoogleApiWrapper } from "google-maps-react";

const style = {
  width: "50%",
  height: "50%"
};
export class MapContainer extends Component {
  render() {
    console.log("%c Inside render MapContainer \n", "color: #bada55");
    console.log("PROPS: ", this.props);
    console.log("----------------------- \n");

    return (
      <Map google={this.props.google} zoom={14} style={style}>
        <Marker onClick={this.onMarkerClick} name={"Current location"} />

        <InfoWindow onClose={this.onInfoWindowClose}>
          <div />
        </InfoWindow>
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyAole5aYswLbjR4-ah12Q6uLvIBPdS8rxI"
})(MapContainer);
