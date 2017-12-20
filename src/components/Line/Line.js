import React, { Component } from 'react';
import Card from '../Card/Card';
import AddCard from '../AddCard/AddCard'

import './Line.css';

class Line extends Component {
    constructor(props) {
        super( props);
        this.showAdd = this.showAdd.bind(this);
        this.hideAdd = this.hideAdd.bind(this);
        this.state = {
            showAddNew: false
        }
    }
    renderCards() {
        const {cards, id} = this.props.line;
        return cards.map(card => <Card onClick={() => this.props.onClick(card.id, id)} key={card.id} card={card} />)
    }
    showAdd() {
       this.setState({showAddNew: true});
    }
    hideAdd() {
        this.setState({showAddNew: false});
    }
    render() {
        return (
            <div className='board-row'>
                <div className='board-header'>
                    <h2 className='board-title' key={this.props.line.id}>{this.props.line.title}</h2>
                    <span>{this.props.line.cards.length}</span>
                </div>
                {this.renderCards()}
                {!this.state.showAddNew && <button onClick={this.showAdd}>Add</button>}



                {this.state.showAddNew && <AddCard addNewCard={this.props.addNewCard} line={this.props.line} hideAdd={this.hideAdd}/>}
            </div>
        );
    }
}
export default Line;
