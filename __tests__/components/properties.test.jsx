import React from 'react';
import Enzyme from 'enzyme';
import Property from '../../src/components/property-card';
import Properties from '../../src/components/propeties';

let properties;
beforeEach(() => {
  properties = [
    {
      title: 'Test title',
      type: 'Test type',
      bedrooms: 2,
      bathrooms: 2,
      price: 10000,
      city: 'Manchester',
      email: 'test@test.com',
    },
    {
      title: 'Test title',
      type: 'Test type',
      bedrooms: 2,
      bathrooms: 2,
      price: 10000,
      city: 'Manchester',
      email: 'test@test.com',
    },
  ];
});

it('renders the correct amount of Property components', () => {
  const wrapper = Enzyme.shallow((
    <Properties properties={properties} />
  ));
  expect(wrapper.find(Property).length).toEqual(2);
});
