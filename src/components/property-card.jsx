import React from 'react';
import { number, string } from 'prop-types';
import '../styles/property-card.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faPoundSign, faBath, faBed, faEnvelope,
} from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';


library.add(faPoundSign, faBath, faBed, faEnvelope);

const Property = props => (
  <div className="property-card">
    <h3 className="card-title">{props.title}</h3>
    <p className="card-type-city">{props.type} - {props.city}</p>
    <ul className="card-details">
      <li className="card-beds"><div className="icon"> <FontAwesomeIcon icon="bed" /></div>{props.bedrooms}</li>
      <li className="card-baths"><div className="icon"> <FontAwesomeIcon icon="bath" /></div>{props.bathrooms}</li>
      <li className="card-price"><div className="icon"> <FontAwesomeIcon icon="pound-sign" /></div>{props.price}</li>
      <Link className="card-email" to="/"><div className="icon"> <FontAwesomeIcon icon="envelope" /></div>{props.email}</Link>
    </ul>
  </div>
);

Property.propTypes = {
  title: string.isRequired,
  type: string.isRequired,
  bedrooms: number.isRequired,
  bathrooms: number.isRequired,
  price: number.isRequired,
  city: string.isRequired,
  email: string.isRequired,
};

export default Property;
