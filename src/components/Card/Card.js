import React, { Component } from 'react';
import EditCard from '../EditCard/EditCard'
import { Draggable } from 'react-beautiful-dnd';

import './Card.css';

class Card extends Component {
    constructor(props) {
        super( props);

        this.state = {
            showEdit: false
        }
    }
    showEdit = () => {
        this.setState({showEdit: true});
    };
    hideEdit = () => {
        this.setState({showEdit: false});
    };
    render() {
    const priority = 'priority' + this.props.card.priority;
        return (
            <Draggable draggableId={this.props.card.id}>
               {(provided, snapshot) =>(
                   <div ref={provided.innerRef} {...provided.dragHandleProps} className={['board-card', priority].join(' ')}>
                       {!this.state.showEdit && <h4 key={this.props.card.id}>{this.props.card.title}</h4>}
                       {!this.state.showEdit && <p>{this.props.card.description}</p>}

                       {this.state.showEdit && <EditCard lineId={this.props.lineId} hideEdit={this.hideEdit} editCard={this.props.editCard} card={this.props.card}/>}

                       <button onClick={this.props.onClick}>Remove</button>
                       <button onClick={this.showEdit}>Edit</button>
                   </div>
               )}
            </Draggable>
        )   
    }
} 

export default Card;
