import React, { Component } from 'react';
import '../styles/add-property.css';
import axios from 'axios';
import Alert from './alert';

const baseUrl = 'http://localhost:3000/api/v1';

class AddProperty extends Component {
  state = {
    fields: {
      title: '',
      type: 'Flat',
      bedrooms: 0,
      bathrooms: 0,
      price: 0,
      city: 'Manchester',
      email: '',
      alertMessage: '',
      isSuccess: false,
      isError: false,
    },
  };

  handleAddProperty = event => {
    event.preventDefault();
    this.setState({
      alertMessage: '',
      isSuccess: false,
      isError: false,
    });
    axios.post(`${baseUrl}/PropertyListing`, {
      title: this.state.fields.title,
      type: this.state.fields.type,
      bedrooms: this.state.fields.bedrooms,
      bathrooms: this.state.fields.bathrooms,
      price: this.state.fields.price,
      city: this.state.fields.city,
      email: this.state.fields.email,
    })
      .then(() => this.setState({
        isSuccess: true,
        alertMessage: 'Property added.',
      }))
      .catch(err => {
        this.setState({
          alertMessage: 'Server error. Please try again later.',
          isError: true,
        });
      });
  };

  handleFieldChange = event => {
    this.setState({
      fields: {
        ...this.state.fields,
        [event.target.name]: event.target.value,
      },
    });
  };

  render() {
    return (
      <div className="add-property">
        {this.state.isSuccess && <Alert message={this.state.alertMessage} success />}
        {this.state.isError && <Alert message={this.state.alertMessage} />}
        <form onSubmit={this.handleAddProperty}>
          <label>
            <span>Title:</span>
            <input name="title" value={this.state.fields.title} type="text" placeholder="The property title" onChange={this.handleFieldChange} />
          </label>
          <label>
            <span>Type:</span>
            <select name="type" value={this.state.fields.type} onChange={this.handleFieldChange}>
              <option value="Flat">Flat</option>
              <option value="Detached">Detached</option>
              <option value="Semi-Detached">Semi-Detached</option>
              <option value="Terraced">Terraced</option>
              <option value="End of Terrace">End of Terrace</option>
              <option value="Cottage">Cottage</option>
              <option value="Bungalow">Bungalow</option>
            </select>
          </label>
          <label>
            <span>Bedrooms:</span>
            <input name="bedrooms" value={this.state.fields.bedrooms} type="number" onChange={this.handleFieldChange} />
          </label>
          <label>
            <span>Bathrooms:</span>
            <input name="bathrooms" value={this.state.fields.bathrooms} type="number" onChange={this.handleFieldChange} />
          </label>
          <label>
            <span>Price:</span>
            <input name="price" value={this.state.fields.price} type="number" onChange={this.handleFieldChange} />
          </label>
          <label>
            <span>City:</span>
            <select name="city" value={this.state.fields.city} onChange={this.handleFieldChange}>
              <option value="Manchester">Manchester</option>
              <option value="Leeds">Leeds</option>
              <option value="Sheffield">Sheffield</option>
              <option value="Liverpool">Liverpool</option>
            </select>
          </label>
          <label>
            <span>Email:</span>
            <input name="email" value={this.state.fields.email} type="email" placeholder="Contact email" onChange={this.handleFieldChange} />
          </label>
          <button type="submit" value="Submit">Add</button>
        </form>
      </div>
    );
  }
}
export default AddProperty;
