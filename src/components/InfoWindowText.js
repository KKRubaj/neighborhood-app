import React, { Component } from 'react';
import * as LocationsAPI from '../LocationsAPI';

// component responsible for displaying Infowindow content after clicking on a marker or list element
class InfoWindowText extends Component {
  constructor(props){
    super(props);

    this.state = {
      selectedLocation: {},
      err: false,
      load: false
    };
  }

 // download detailed data of individual theaters from the Foursquare API
  componentDidMount() {
    LocationsAPI.getLocationDetails(this.props.id)
    .then(res => {
      //console.log(res);
      if ( res !== undefined && res.meta.code === 200) {
        this.setState({
          load: true,
          selectedLocation: res.response.venue
        });
      } else {
        this.setState({
          err: true
        })
      }
    })
    .catch(error => alert("Ups, I can not download the details of the selected theater. Try again later"))
  }

  render() {
    const { load, err, selectedLocation } = this.state;

    return(
      <div className="info-window-content" aria-label="Info window content">
      {load && selectedLocation && (
        <div>
          <h2>{ selectedLocation.name }</h2>
          <p>{ selectedLocation.location.address }</p>
          <p>{ selectedLocation.location.city }</p>
          <p>{ selectedLocation.location.country }</p>
          {selectedLocation.rating && <p style={{color: 'red'}}>Rating: {selectedLocation.rating}</p>}
        </div>
      )}
      {err && <h1 style={{color: 'red'}}>I can not load any theater due to an error. Please try later.</h1>}
      </div>
    );
  }
}


export default InfoWindowText
