import React, { Component } from 'react';


class ListLocations extends Component {

  render() {
    const { locations, onItemClick } =this.props;

    return(
      <div className="list-places">
        <ul>
          {locations.map((loc, index) => {
            return(
              <li key={loc.venue.id}>
                <div
                  className="place-item"
                  onClick={() => onItemClick(index, {lat: loc.venue.location.lat, lng: loc.venue.location.lng})}
                  role="button"
                  >
                    <p className="place-name">
                      {loc.venue.name}
                    </p>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default ListLocations
