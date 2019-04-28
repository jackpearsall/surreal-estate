import React from 'react';

const alert = ({ message, success }) => (
  <div className={`alert${success ? ' success' : ''}`}>
    {message}
  </div>
);

export default alert;
