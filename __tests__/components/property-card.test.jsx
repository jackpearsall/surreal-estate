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
    expect(wrapper.find('.title').text()).toEqual('Test title');
  });
  it('renders the type', () => {
    expect(wrapper.find('.type').text()).toEqual('Test type');
  });
  it('renders the number of bedrooms', () => {
    expect(wrapper.find('.bedrooms').text()).toEqual('2');
  });
  it('renders the number of bedrooms', () => {
    expect(wrapper.find('.bathrooms').text()).toEqual('2');
  });
  it('renders the price', () => {
    expect(wrapper.find('.price').text()).toEqual('10000');
  });
  it('renders the city', () => {
    expect(wrapper.find('.city').text()).toEqual('Manchester');
  });
});
