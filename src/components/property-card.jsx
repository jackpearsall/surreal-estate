import React from 'react';
import { number, string, func } from 'prop-types';
import '../styles/property-card.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faPoundSign, faBath, faBed, faEnvelope, faStar,
} from '@fortawesome/free-solid-svg-icons';


library.add(faPoundSign, faBath, faBed, faEnvelope, faStar);

const Property = props => (
  <div className="property-card">
    <div className="header">
      <FontAwesomeIcon icon="igloo" className="logo-icon fa-lg" />
    </div>
    <h4 className="title">{props.title}</h4>
    <div>
      <span className="type">{props.type}</span>
        -
      <span className="city">{props.city}</span>
    </div>
    <div>
      <FontAwesomeIcon icon="bath" />
      <span className="bathrooms">{props.bathrooms}</span>
    </div>
    <div>
      <FontAwesomeIcon icon="bed" />
      <span className="bedrooms">{props.bedrooms}</span>
    </div>
    <div>
      <FontAwesomeIcon icon="pound-sign" />
      <span className="price">{props.price}</span>
    </div>
    <div className="email" />
    <a className="email-button" href={`mailto:${props.email}?Subject="${props.title}"`}>
      <FontAwesomeIcon icon="envelope" />
      <span>Email</span>
    </a>
    {props.userID && props.isFavourite === true &&
        (
          <div className="saved" onClick={() => props.onRemoveProperty(props._id)}>
            <FontAwesomeIcon icon="star" />
            <span>Saved Properties</span>
          </div>
        )
      }
    { props.userID && !props.isFavourite &&
      (
        <div className="save" onClick={() => props.onSaveProperty(props._id)}>
          <FontAwesomeIcon icon="star" />
          <span>Save</span>
        </div>
      )
    }
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
  userId: string,
  onSaveProperty: func.isRequired,
};

export default Property;
