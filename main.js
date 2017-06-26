import React from 'react';
import { render } from 'react-dom';

class HelloWorldComponent extends React.Component {
  render() {
    return <h1>Hello from {this.props.phrase}!</h1>;
  }
}

function init() {
  var rootElement = document.createElement('div');
  rootElement.className = 'root';
  document.body.appendChild(rootElement);

  render(
    <HelloWorldComponent phrase='ES6' />,
    rootElement
  );
}

// Initialize
init();
