import React, { Component } from 'react';
import { connect } from 'react-redux';
import Line from '../Line/Line';
import BoardService from '../../service/board.service';
import Search from '../Search/Search'
import { DragDropContext } from 'react-beautiful-dnd';

import './Board.css';

class Board extends Component {
  constructor(props) {
    super( props);


    this.state = {
      searchCard: '',
      search: false
    }

  }
  componentDidMount() {
    const lines = BoardService.getLanes();
    this.props.linesLoaded(lines)
  }
  handleOnDelete = (cardId, lineId) => {
     BoardService.onCardDelete(cardId, lineId);
     this.setState({lines:BoardService.getLanes()});
  };
  editCard = (lineId, cardId, title, description, oldCard) => {
      BoardService.editCard(lineId, cardId, title, description, oldCard);
      this.setState({lines:BoardService.getLanes()});
  };
  addNewCard = (id, title, desctiption, tit) => {
      BoardService.addCard(id, title, desctiption, tit);
      this.setState({ lines:BoardService.getLanes() });
  };
  searchCard = (cardTitle) => {
      this.setState({searchCard: BoardService.searchCard(cardTitle)});
  };
  showSearch = () => {
      this.setState({search: true});
  };
  hideSearch = () => {
      this.setState({search: false});
  };
  renderLanes = () => {

    return this.props.lines.map(line => <Line addNewCard={this.addNewCard} editCard={this.editCard} onClick={this.handleOnDelete} key={line.id} line={line}/>)
  };

  onDragEnd = (result) => {
      if(!result.destination) {
          return;
      }

      const lines = BoardService.reorder(result.source.droppableId,result.source.index,result.destination.droppableId, result.destination.index);
      console.log(lines);
      this.setState({
         lines: lines
      });
  };

  render() {
    return (
        <DragDropContext onDragEnd={this.onDragEnd}>
            <div>
                <Search searchShow={this.showSearch} searchCard={this.searchCard}/>
                {this.state.search &&
                    <div>
                        <button onClick={() => this.hideSearch()}>Back</button>

                        <div className='board-card'>
                            <h4 key={this.state.searchCard['0'].id}>{this.state.searchCard['0'].title}</h4>
                            <p>{this.state.searchCard['0'].description}</p>
                        </div>
                    </div>
                }
                {!this.state.search && <div className='BoardLines'>
                    {this.renderLanes()}
                </div>}
            </div>
        </DragDropContext>
    );
  }
}

const mapStateToProps = (state) => {
    console.log('state', state)
    return {
        lines: state.todo.lanes
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        linesLoaded: (lines) => {
            dispatch({
                type: 'LINES_LOADED',
                payload: lines 
            })
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Board);
