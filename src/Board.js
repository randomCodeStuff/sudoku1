import React from 'react';
import Square from './Square';

class Board extends React.Component {
  renderSquare(i) {
    return (
      <Square
      // value={this.props.squares[i]}
      // onClick={() => this.props.onClick(i)}
      />
    );
  }

  render() {
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    return (
      <div>
        {numbers.map((n) => (
          <div key={n} className="board-row">
            {numbers.map((m) => this.renderSquare(m))}
          </div>
        ))}
      </div>
      // <div className="board-row">
      //   {this.renderSquare(3)}
      //   {this.renderSquare(4)}
      //   {this.renderSquare(5)}
      // </div>
      // <div className="board-row">
      //   {this.renderSquare(6)}
      //   {this.renderSquare(7)}
      //   {this.renderSquare(8)}
    );
  }
}

export default Board;
