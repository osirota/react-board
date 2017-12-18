import React, { Component } from 'react';
import './Card.css';



class Card extends Component {
    constructor(props) {
        super(props);

    }
    render() {
    const priority = 'priority' + this.props.card.priority;
        return (
           <div className={['board-card', priority].join(' ')}>
                <h4 key={this.props.card.id}>{this.props.card.title}</h4>
                <p>{this.props.card.description}</p>
                
                <button onClick={() => this.props.onClick}>Remove</button>
           </div>
        )   
    }
} 

export default Card;
