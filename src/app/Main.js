/**
 * In this file, we create a React component
 * which incorporates components provided by Material-UI.
 */
import React from 'react';


import HomePage from './page/HomePage.js';

class Main extends React.Component {
  constructor(props, context) {
    super(props, context);

  }


  render() {
    return (
      <HomePage/>
    );
  }
}

export default Main;
