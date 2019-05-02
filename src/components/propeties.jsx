import React from 'react';
import Property from './property-card';
import axios from 'axios';
import Alert from './alert';
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
      .catch(err => {
        this.setState({
          error: true,
          alertMessage: 'There was a problem retrieving the properties, please try again later',
        });
      });
  }

  render() {
    return (
      <div className="properties">
        {this.state.error && <Alert message={this.state.alertMessage} />}
        {this.state.properties.map(property => (
          <div key={property._id} className="col">
            <Property {...property} />
          </div>
        ))}
      </div>
    );
  }
}

export default Properties;
