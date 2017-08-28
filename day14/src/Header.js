import React, { Component } from 'react';
import logo from './nasalogo.gif';
import './header.css';
import {
  Nav,
  NavItem,
  MenuItem,
  NavDropdown,
  Row,
  Col
} from 'react-bootstrap';

class Header extends Component {
  render() {
    return (
      <div>
        <div>

          <Nav bsStyle="tabs" activeKey="1" onSelect={this.handleSelect}>
            <NavItem><img className = "logo" src={logo} alt="logo" /></NavItem>
            <NavItem eventKey="2" href="/home">Home</NavItem>
            <NavItem eventKey="2" title="more pugs" href="http://www.funnypugsite.com/">More NASA stuff</NavItem>
            <NavItem eventKey="3" disabled>NavItem 3 content</NavItem>
            <NavDropdown eventKey="4" title="Dropdown" id="nav-dropdown">
              <MenuItem eventKey="4.1">Action</MenuItem>
              <MenuItem eventKey="4.2">Another action</MenuItem>
              <MenuItem eventKey="4.3">Something else here</MenuItem>
              <MenuItem divider />
              <MenuItem eventKey="4.4">Separated link</MenuItem>
            </NavDropdown>
          </Nav>
        </div>
      </div>
    );
  }
}

export default Header;
