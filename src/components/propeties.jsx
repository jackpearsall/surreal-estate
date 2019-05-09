import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import Property from './property-card';
import axios from 'axios';
import Alert from './alert';
import qs from 'qs';
import '../styles/properties.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

library.add(faSearch);


const baseUrl = 'http://localhost:3000/api/v1';

class Properties extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      properties: [],
      error: false,
      alertMessage: '',
      search: '',
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
      [operation]: JSON.stringify({
        ...JSON.parse(currentQueryParams[operation] || '{}'),
        ...valueObj,
      }),
    };
    return qs.stringify(newQueryParams, { addQueryPrefix: true, encode: false });
  };

  handleSearch = event => {
    event.preventDefault();
    const { search } = this.state;
    const newQueryString = this.buildQueryString('query', { title: { $regex: search } });
    const { history } = this.props;
    history.push(newQueryString);
    this.state.search = '';
  };

  render() {
    return (
      <Fragment>
        {this.state.error && <Alert message={this.state.alertMessage} />}
        <div className="wrapper">
          <div className="filters">
            <div className="title-search">
              <span> Search by title</span>
              <form onSubmit={this.handleSearch}>
                <input
                  type="text"
                  value={this.state.search}
                  onChange={event => this.setState({ search: event.target.value })}
                />
                <button type="submit"><FontAwesomeIcon icon="search" /></button>
              </form>
            </div>
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
