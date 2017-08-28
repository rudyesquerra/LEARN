import React, { Component } from 'react';

class Display extends Component {
  render() {
    return (
      <div>
        <h3>Good Robot&#58;</h3>
        <p>I hear you saying {this.props.greeting}. Is that correct&#63;</p>
      </div>
    )
  }

}

export default Display;
