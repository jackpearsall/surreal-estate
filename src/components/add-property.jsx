import React, { Component } from 'react';
import '../styles/add-property.css';

class AddProperty extends Component {
  state = {
    fields: {
      title: '',
    },
  };

  handleAddProperty = event => {
    event.preventDefault();
    console.log(this.state.fields);
  };

  render() {
    return (
      <div className="AddProperty">
        <form onSubmit={this.handleAddProperty}>
          <button type="submit">Add</button>
        </form>
      Add Property Page
      </div>
    );
  }
}
export default AddProperty;
