import React from 'react';
import './App.css';
//import Board from './Board';

class Square extends React.Component {
  render() {
    return <button className="square">{this.props.value}</button>;
  }
}

class Board extends React.Component {
  renderSquare(i) {
    return <Square value={i} />;
  }
}

export default class App extends React.Component() {
  render() {
    return (
      <div className="game">
        <div className="game-board">
          <Board />
        </div>
        <div className="game-info">
          <div>{/* status */}</div>
          <ol>{/* TODO */}</ol>
        </div>
      </div>
    );
  }
}
