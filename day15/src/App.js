import React, { Component } from 'react';
import {
  Col,
  Button,
  Grid,
  PageHeader,
  Row,
} from 'react-bootstrap'

class App extends Component {
  constructor(props){
     super(props)
     this.state = {
        buttonText: "Play Game",
        gameWon: false,
        coin: " "
      }
    }
    toggleResult(){
      const newButtonText = this.state.gameWon ? "Play again" : "Excellent!"
      const newGameWon = this.state.gameWon ? false : true
      const newCoin = Math.floor(Math.random() * 2) === 0 ? "Heads" : "Tails"
      this.setState({ buttonText: newButtonText, gameWon: newGameWon, coin:newCoin})
}

  render() {
    return (
      <Grid>
        <PageHeader>
          Testing Example
        </PageHeader>
        <Row>
          <Col xs={4}>
            <Button onClick={this.toggleResult.bind(this)}>
              {this.state.buttonText}
            </Button>
          </Col>
          <Col xs={8}>
          <div id="main_text2">
            <h4>You&apos;ve Got {this.state.coin}</h4>
          </div>
            <div id="main_text">
              {this.state.gameWon &&
              <h4>Good Job, You have won a free meal</h4>
              }
            </div>
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default App;
