import React, { Component } from 'react';
import Line from '../Line/Line';
import BoardService from '../../service/board.service';

import './Board.css';

class Board extends Component {
  handleOnDelete(id) {
    BoardService.onCardDelete(id);
    this.setState({
      lanes: BoardService.getLanes()
    })
  }
  renderLanes() {
    this.lines = BoardService.getLanes();
    console.log(this.lines)
    return this.lines.map(line => <Line onClick={this.handleOnDelete} key={line.id} line={line}/>)
  }
  componentDidMount() {
    this.setState({
      lanes: BoardService.onCardDelete()
    })
  }

  render() {
    return (
      <div className='BoardLines'>
        {this.renderLanes()}
      </div>
    );
  }
}

export default Board;
