import React, { Component } from 'react';
import Map from './Map';

// I created this component based on the source https://tomchentw.github.io/react-google-maps/#installation
class MapContainer extends Component {

  render() {
    return(
        <Map
          {...this.props}
          googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyA2xnYojYwahl1LCCdN6V7dXm8ptWAdXbc&v=3"
          loadingElement={<div style={{ height: `100%` }} />}
          containerElement={<div style={{ height: `calc(100vh - 60px)` }} />}
          mapElement={<div style={{ height: `100%` }} />}
        />
    );
  }
}

export default MapContainer
