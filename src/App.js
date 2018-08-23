import React, { Component } from 'react';
import './App.css';
import * as LocationsAPI from './LocationsAPI';
import ErrorBoundary from './components/ErrorBoundary';
import escapeRegExp from 'escape-string-regexp';
import sortBy from 'sort-by';
import FilterInput from './components/FilterInput';
import ListLocations from './components/ListLocations';
import MapContainer from './components/MapContainer';
import HeaderApp from './components/HeaderApp';


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      centerMap: { lat: 52.229676, lng: 21.012229}, // center lat/lng of Warsaw City
      locations:[], // theaters taken from the location of Warsaw
      query: '', // filter input value
      selectedIdx: null, // index of selected/clicked location
      isMenuOpen: false
    };
  }
  // download locations/theaters in Warsaw from Foursquare API
  componentDidMount() {
    LocationsAPI.getLocations()
      .then(res => {
        let locations = res.response.groups[0].items;
        this.setState( {locations} )
      });
  }

  // updating the query state with user text entered
  queryUpdate = (event) => {
    this.setState({
      query: event.target.value
    });
  }

  // control of the left column with filter input and locations list
  toggleClassMenu = () => {
    this.setState({
      isMenuOpen: !this.state.isMenuOpen
    });
  }

  // position of clicked locations is used to center the map
  locationClick = (index, position) => {
    this.setState({
      centerMap: position,
      selectedIdx: index
    });
  }

  closeInfoWindow = () => {
    this.setState({
      selectedIdx: null
    });
  }

  render() {
  //console.log(this.state.locations);

  const { locations, centerMap, selectedIdx, query, isMenuOpen } = this.state;

  const openClass = isMenuOpen ? 'open' : '';
  const closeClass = isMenuOpen ? '' : 'close';

  let showingLocations;
  if (query) {
    const match = new RegExp(escapeRegExp(query), 'i');
    showingLocations = locations.filter((location) => match.test(location.venue.name));
  } else {
    showingLocations = locations;
  }

  showingLocations.sort(sortBy('name'))

    return (
      <div className="App">
        <div className={'col-left '+ closeClass}>
          <ErrorBoundary>
            <FilterInput query={query} onQueryUpdate={this.queryUpdate} />
          </ErrorBoundary>
          <ErrorBoundary>
            <ListLocations locations={showingLocations} onItemClick={this.locationClick} />
          </ErrorBoundary>
          <p className="info-fapi">
            List of this places and detailed information are downloaded from Foursquare API.
          </p>
        </div>

        <ErrorBoundary>
          <div className={'col-right ' + openClass}>
            <HeaderApp onToggleClassMenu={this.toggleClassMenu} />

            <MapContainer
              centerMap={centerMap}
              locations={showingLocations}
              selectedIdx={selectedIdx}
              onMarkerClick={this.locationClick}
              closeInfoWindow={this.closeInfoWindow}
            />
          </div>
        </ErrorBoundary>
      </div>
    );
  }
}

export default App;
