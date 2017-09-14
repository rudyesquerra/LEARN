import React, { Component } from 'react';
import galaxy from './galaxy.jpg';
import './content.css';
import {
Jumbotron,
Button
} from 'react-bootstrap';

class Content extends Component {
  render() {
    return (
      <div>
      <Jumbotron className = "contentbackground">
        <h1>Welcome to our NASA website</h1>
        <p>This is an example of how to build our application using the REACT framework and REACT bootstrap to make it look pretty.</p>
        <p><Button bsStyle="danger" href="https://www.youtube.com/watch?v=vdpP_NTlogk">Learn more</Button></p>
      </Jumbotron>
      </div>
    );
  }
}

export default Content;
