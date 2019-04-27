import React from 'react';
import '../styles/nav-bar.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faIgloo } from '@fortawesome/free-solid-svg-icons';
import {
  Link,
} from 'react-router-dom';

library.add(faIgloo);

// import PropTypes from 'prop-types';

const NavBar = () => (

  <div className="NavBar">
    <div className="logo-icon">
      <Link to="/">
        <FontAwesomeIcon icon="igloo" size="2x" style={{ color: 'purple' }} />
      </Link>
    </div>
    <div className="logo-text">
    Surreal Estate
    </div>
    <ul className="nav">
      <Link className="item" to="/">View Properties</Link>
      <Link className="item" to="/add-property">Add a Property</Link>
    </ul>
  </div>

);

export default NavBar;
