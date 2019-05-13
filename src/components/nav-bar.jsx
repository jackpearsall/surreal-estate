import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import '../styles/nav-bar.css';
import FacebookLogin from 'react-facebook-login';

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faIgloo } from '@fortawesome/free-solid-svg-icons';


library.add(faIgloo);

const NavBar = (props) => (

  <div className="NavBar">
    <div className="logo-icon">
      <Link to="/">
        <FontAwesomeIcon icon="igloo" size="2x" style={{ color: 'purple' }} />
        <div className="logo-text">
          Surreal Estate
        </div>
      </Link>
    </div>
    <div className="nav">
      <Link className="item" to="/">View Properties</Link>
      <Link className="item" to="/add-property">Add a Property</Link>
      <div className="auth">
        {props.userID
          ? (
            <Fragment>
              <Link onClick={props.onLogout} className="item" to="/">Sign Out</Link>
              <Link className="item" to="/saved-properties">Saved Properties</Link>
            </Fragment>
          )
          : (
            <FacebookLogin
              appId={2067484850218682}
              autoLoad
              callback={props.onLogin}
            >
              Sign In With Facebook
            </FacebookLogin>
          )
        }
      </div>
    </div>
  </div>
);

export default NavBar;
