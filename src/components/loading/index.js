import React from 'react';
import logo from '../../logo.svg';

const LoadingComponent = (props) => {
  return (
    <div>
      <img src={logo} className="App-logo" alt="logo" />
      <p>Loading...</p>
    </div>
  );
}

export default LoadingComponent;
