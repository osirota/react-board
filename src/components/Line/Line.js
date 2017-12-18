import React, { Component } from 'react';
import Card from '../Card/Card';

import './Line.css';

class Line extends Component {
    renderCards() {
        const cards = this.props.line.cards;
        return cards.map(card => <Card onCardDelete={() => this.props.onCardDelete(card.id)} key={card.id} card={card} />)
    }
    render() {
        return (
            <div className='board-row'>
                <h2 className='board-title' key={this.props.line.id}>{this.props.line.title}</h2>
                {this.renderCards()}
            </div>
        );
    }
} 
export default Line;
