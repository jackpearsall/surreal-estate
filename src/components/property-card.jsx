import React from 'react';
import { number, string } from 'prop-types';
import '../styles/property-card.css';


const Property = props => (
  <div className="property-card">
    <h5 className="card-title">{props.title}</h5>
    <p className="card-type">{props.type}</p>
    <ul className="card-details">
      <li className="card-price">£{props.price}</li>
      <li className="card-beds">{props.bedrooms} bedroom(s)</li>
      <li className="card-baths">{props.bathrooms} bathroom(s)</li>
      <li className="card-city">{props.city}</li>
      <li className="card-email">{props.email}</li>
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
