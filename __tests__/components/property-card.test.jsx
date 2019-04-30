import React from 'react';
import { shallow } from 'enzyme';
import Property from '../../src/components/property-card';

describe('Renders a property card for a given property', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow((
      <Property
        title="Test title"
        type="Test type"
        bedrooms={2}
        bathrooms={2}
        price={10000}
        city="Manchester"
        email="test@test.com"
      />
    ));
  });
  it('renders the title', () => {
    expect(wrapper.find('.card-title').text()).toEqual('Test title');
  });
  it('renders the type', () => {
    expect(wrapper.find('.card-type').text()).toEqual('Test type');
  });
  it('renders the number of bedrooms', () => {
    expect(wrapper.find('.card-beds').text()).toEqual('2 bedroom(s)');
  });
  it('renders the title', () => {
    expect(wrapper.find('.card-title').text()).toEqual('Test title');
  });
  it('renders the title', () => {
    expect(wrapper.find('.card-title').text()).toEqual('Test title');
  });
});
