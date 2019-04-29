import React from 'react';
import '../styles/alert.css';

const alert = ({ message, success }) => (
  <div className={`alert${success ? ' success' : ''}`}>
    {message}
  </div>
);

export default alert;
