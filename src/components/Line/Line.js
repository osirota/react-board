import React, { Component } from 'react';
import Card from '../Card/Card';

import './Line.css';

class Line extends Component {
    renderCards() {
        const {cards, id} = this.props.line;
        return cards.map(card => <Card onClick={() => this.props.onClick(card.id, id)} key={card.id} card={card} />)
    }
    render() {
        return (
            <div className='board-row'>
                <div className='board-header'>
                    <h2 className='board-title' key={this.props.line.id}>{this.props.line.title}</h2>
                    <span>{this.props.count(this.props.line.id)}</span>
                </div>
                {this.renderCards()}
            </div>
        );
    }
} 
export default Line;
