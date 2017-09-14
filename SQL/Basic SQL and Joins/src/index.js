import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Game extends React.Component {
  constructor() {
    super();
    //sets the initial state
    this.state = {
      //history object - incomplete
      history: [{
        squares: Array(9).fill(null),//there's 9 squares in the array, and then it'll fill from a start index to an end index, it's value is null because we don't know whether it'll be filled with X or O yet
      }],
      stepNumber: 0, //this sets the start index to 0
      xIsNext: true,//this sets the state of xIsNext, which is the player in turn to true, which means in this case 'X' because that is how we defined it in the ternary statement
    };
  }

  handleClick(i) {
    const history = this.state.history.slice(0, this.state.stepNumber + 1);//slice extracts a portion of an array and copies it
    const current = history[history.length - 1];
    const squares = current.squares.slice();
    if (calculateWinner(squares) || squares[i]) {
       return;
     }
     // ternary
     squares[i] = this.state.xIsNext ? 'X' : 'O';
     this.setState({
       history: history.concat([{
         squares: squares,
       }]),
       stepNumber: history.length,
       xIsNext: !this.state.xIsNext,
    });
  }

  jumpTo(step) {
    this.setState({
      stepNumber: step,
      xIsNext: (step % 2) === 0, //We set xIsNext to true if the index of the move number is an even number
    });
  }

  render() {
    const history = this.state.history;
    const current = history[this.state.stepNumber];
    const winner = calculateWinner(current.squares);

    const moves = history.map((step, move) => {
        const desc = move ?
          'Move #' + move :
          'Game start';
        return (
          //this adds a unique ID to each move that has been played
          <li key={move}>
            <a href="#" onClick={() => this.jumpTo(move)}>{desc}</a>
          </li>
        );
      });

    let status;
    if (winner) {
     status = 'Winner: ' + winner;
    } else {
     status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');
    }
    return (
      <div className="game">
        <div className="game-board">
          <Board
            squares={current.squares}
            onClick={(i) => this.handleClick(i)}
          />
        </div>
        <div className="game-info">
          <div>{status}</div>
          <ol>{moves}</ol>
        </div>
      </div>
    );
  }
}

class Board extends React.Component {

  renderSquare(i) {
    return (
      <Square
        value={this.props.squares[i]}
        onClick={() => this.props.onClick(i)}
      />
    );
  }

  render() {
    // const winner = calculateWinner(this.state.squares);
    //    let status;
    //    if (winner) {
    //      status = 'Winner: ' + winner;
    //    } else {
    //      status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');
    //    }
    return (
      <div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
}

function Square(props) {
  return (
    <button className="square" onClick={props.onClick}>
      {props.value}
    </button>
  );
}


function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

// ========================================

ReactDOM.render(
  <Game />,
  document.getElementById('root')
);
