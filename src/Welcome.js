import React, { Component } from 'react';
import { Jumbotron } from 'react-bootstrap';
class WelcomeJumbotron extends Component {
  render() {
    return (
      <Jumbotron>
        <h2>{this.props.title}</h2>
        <p>{this.props.alt}</p>
      </Jumbotron>
    );
  }
}

export default WelcomeJumbotron;
