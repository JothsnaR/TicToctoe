import React, { Component } from 'react';
import './App.css';
import Square from './Square'


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isplayer: true,
      squares: Array(9).fill(null),
      total: 0
    };
    this.handle = this.handle.bind(this);
  }

  renderSquare(i) {
    return <Square value={this.state.squares[i]} onClick={(e) => { this.handle(i) }} />;
  }

  handle(i) {
    let box = this.state.squares.slice();
    if (this.CheckWinner(box) || box[i]) {
      return;
    }
    box[i] = this.state.isplayer ? 'X' : 'O';
    this.setState({
      total: this.state.total + 1,
      squares: box,
      isplayer: !this.state.isplayer
    })

  }

  CheckWinner() {
    let board = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];
    let moves = this.state.squares;
    for (let i = 0; i < board.length; i++) {
      if (moves[board[i][0]] === moves[board[i][1]] && moves[board[i][1]] === moves[board[i][2]]) {
        return moves[board[i][0]];
      }
      else if (this.state.total === 9) {
        return "draw";
      }
    }
  }

  render() {
    const Winner = this.CheckWinner();
    let status;
    if (Winner === 'X') {
      status = 'The Winner is:' + Winner;
    }
      else if (Winner === 'O') {
        status = 'The Winner is :' + Winner;
    } else if (Winner === 'draw') {
        status = 'The match is:' + Winner;
    } else {
        status = 'Next Player is: ' + (this.state.isplayer ? 'X' : 'O');
    }

    return (
      <div>
        <div className="status"><b>{status}</b></div>
        <div className="board-row" >
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
}

export default App;
