import React from 'react';
import { withScriptjs, withGoogleMap, GoogleMap, Marker, InfoWindow } from 'react-google-maps'
import InfoWindowText from './InfoWindowText'

// I created this component based on the source https://tomchentw.github.io/react-google-maps/#installation

const Map = withScriptjs(withGoogleMap(props =>{

  const { locations, centerMap, selectedIdx, onMarkerClick, closeInfoWindow } = props;

  return(
    <GoogleMap
      center = { centerMap }
      defaultZoom = { 14 }
    >
      {locations.map((loc, idx) => {
        let animationMarker = idx === selectedIdx ? window.google.maps.Animation.BOUNCE : null
        return(
          <Marker
            key={ loc.venue.id }
            position={{
              lat: loc.venue.location.lat,
              lng: loc.venue.location.lng
            }}
            onClick= {() => onMarkerClick(idx, this.position)}
            animation={animationMarker}
          >
          {idx === selectedIdx && (
            <InfoWindow
              position={{
                lat: loc.venue.location.lat,
                lng: loc.venue.location.lng,
              }}
              onCloseClick={ closeInfoWindow }>

                <InfoWindowText id={ loc.venue.id } />

            </InfoWindow>
          )}

          </Marker>
        );
      })}

    </GoogleMap>
  );
}));

export default Map
