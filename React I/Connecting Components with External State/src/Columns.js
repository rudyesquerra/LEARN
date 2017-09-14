import React, { Component } from 'react';
import './Columns.css';
import astro from './astronaut.jpg';
import ufo from './UFO.jpg';
import {
Grid,
Row,
Col
} from 'react-bootstrap';

class Columns extends Component {
  render() {
    return (
      <div>
      <Grid>
       <Row className="show-grid">
         <Col xs={12} md={8}>NASA Prepares for August 21 Total Solar Eclipse
        On Monday, August 21, 2017, all of North America will be treated to an eclipse of the sun. The eclipse&apos;s path will stretch from Salem, Oregon to Charleston, South Carolina. Observers outside this path will still see a partial solar eclipse. NASA will cover the eclipse live from coast to coast, beginning at noon EDT.</Col>
        <Col xs={6} md={4}><img className="astro" src={astro} alt="astro" /></Col>
        <div className="margin">
           <Col xs={12} md={8}>On Monday, August 21, 2017, all of North America will be treated to an eclipse of the sun. Anyone within the path of totality can see one of nature’s most awe inspiring sights - a total solar eclipse. This path, where the moon will completely cover the sun and the sun's tenuous atmosphere - the corona - can be seen, will stretch from Salem, Oregon to Charleston, South Carolina. Observers outside this path will still see a partial solar eclipse where the moon covers part of the sun's disk. NASA created this website to provide a guide to this amazing event. Here you will find activities, events, broadcasts, and resources from NASA and our partners across the nation.</Col>
           <Col xs={6} md={4}><img className = "ufo"src={ufo} alt="" /></Col>
        </div>
       </Row>
      </Grid>
      </div>
    );
  }
}

export default Columns;
