import React from 'react';

// create stateless component for filter input

const FilterInput = (props) => {
  return(
    <div className="list-places-top">
      <label>
        You can filter places:
          <br></br>
          <input
            type="text"
            className="search-places"
            placeholder="Search places"
            value={props.query}
            onChange={props.onQueryUpdate}
          />
      </label>
    </div>
  );
}


export default FilterInput
