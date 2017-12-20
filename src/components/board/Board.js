import React, { Component } from 'react';
import Line from '../Line/Line';
import BoardService from '../../service/board.service';

import './Board.css';

class Board extends Component {
  constructor(props) {
    super( props);
    this.handleOnDelete = this.handleOnDelete.bind(this);
    this.addNewCard = this.addNewCard.bind(this);
    this.state = {
      lines: BoardService.getLanes()
    }
  }
  handleOnDelete(cardId, lineId) {
     BoardService.onCardDelete(cardId, lineId);
     this.setState({lines:BoardService.getLanes()});
  }
  addNewCard(id, title, desctiption, tit) {
      BoardService.addCard(id, title, desctiption, tit);
      this.setState({lines:BoardService.getLanes()});
  }
  renderLanes() {
    return this.state.lines.map(line => <Line addNewCard={this.addNewCard} onClick={this.handleOnDelete} key={line.id} line={line}/>)
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
