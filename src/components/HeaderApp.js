import React from 'react';
import logo from '../menu.png';

// create stateless component for Header application

const HeaderApp = (props) => {
  return(
    <header className="App-header" role="banner">
      <a
        className="App-menu"
        onClick={props.onToggleClassMenu}
        role="navigation"
        aria-label="toggle class menu" >
        <img src={logo} className="App-menu-logo" alt="logo of hamburger menu"></img>
      </a>
      <h1 className="App-title">
        Theatres in <span>Warsaw City</span>
      </h1>
    </header>
  );
}


export default HeaderApp
