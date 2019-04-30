import React, { Fragment } from 'react';
import Property from './property-card';

const Properties = () => (
  <Fragment>
    <Property title="Test title" type="Test type" bedrooms="2" bathrooms="2" price="10000" city="Manchester" email="test@test.com" />
  </Fragment>
);

export default Properties;
