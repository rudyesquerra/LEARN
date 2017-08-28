import { Grid, Navbar, Jumbotron, Button } from 'react-bootstrap';
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Header'
import Recipes from './Recipes'
import Footer from './Footer'

class App extends Component {
  render() {
    return (
      <div className="App">
      <Navbar className="nav" inverse fixedTop>
        <Grid>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="/">React App</a>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
        </Grid>
      </Navbar>
      <div className = "header">
        <Header />
      </div>
        <Jumbotron className = "jumbo">
          <Grid>
            <h1>Welcome to LEARN</h1>
            <p>
              <Button
                bsStyle="danger"
                bsSize="small"
                href="http://react-bootstrap.github.io/components.html"
                target="_blank">
                Red Pill
              </Button>
            </p>
            <img src = "https://media.tenor.com/images/5b04f7e51bd8659b985b8aa4f86ffedc/tenor.gif" />
          </Grid>
        </Jumbotron>
        <div>
          <Recipes />
        </div>
        <div>
          <Footer />
        </div>
      </div>
    );
  }
}

export default App;
