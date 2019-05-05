import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import Property from './property-card';
import axios from 'axios';
import Alert from './alert';
import qs from 'qs';
import '../styles/properties.css';

const baseUrl = 'http://localhost:3000/api/v1';

class Properties extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      properties: [],
      error: false,
      alertMessage: '',
    };
  }

  componentDidMount() {
    axios.get(`${baseUrl}/PropertyListing`)
      .then(({ data: properties }) => this.setState({ properties }))
      .catch(() => {
        this.setState({
          error: true,
          alertMessage: 'There was a problem retrieving the properties, please try again later',
        });
      });
  }

  componentDidUpdate(prevProps) {
    const { search } = this.props.location;
    if (prevProps.location.search !== search) {
      axios.get(`${baseUrl}/PropertyListing${search}`)
        .then(({ data: properties }) => {
          this.setState({ properties });
        })
        .catch(() => {
          this.setState({
            error: true,
            alertMessage: 'There was a problem retrieving the properties, please try again later',
          });
        });
    }
  }

  buildQueryString = (operation, valueObj) => {
    const { location: { search } } = this.props;
    const currentQueryParams = qs.parse(search, { ignoreQueryPrefix: true });
    const newQueryParams = {
      ...currentQueryParams,
      [operation]: JSON.stringify(valueObj),
    };
    return qs.stringify(newQueryParams, { addQueryPrefix: true, encode: false });
  };

  render() {
    return (
      <Fragment>
        {this.state.error && <Alert message={this.state.alertMessage} />}
        <div className="wrapper">
          <div className="filters">
            <div className="city-search">
              <span>Filter by city</span>
              <Link to={''}>All</Link>
              <Link to={this.buildQueryString('query', { city: 'Manchester' })}>Manchester</Link>
              <Link to={this.buildQueryString('query', { city: 'Leeds' })}>Leeds</Link>
              <Link to={this.buildQueryString('query', { city: 'Sheffield' })}>Sheffield</Link>
              <Link to={this.buildQueryString('query', { city: 'Liverpool' })}>Liverpool</Link>
            </div>
            <div className="price-sort">
              <span>Sort by price</span>
              <Link to={this.buildQueryString('sort', { price: -1 })}>Price Descending</Link>
              <Link to={this.buildQueryString('sort', { price: 1 })}>Price Ascending</Link>
            </div>
          </div>
          <div className="properties">
            {this.state.properties.map(property => (
              <Property 
                key={property._id}
                {...property}
              />
            ))}
          </div>
        </div>
      </Fragment>
    );
  }
}

export default Properties;
