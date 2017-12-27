import React, { Component } from 'react';

import './EditCard.css'

class EditCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: this.props.card.title,
            description: this.props.card.description
        };


    }

    titleChange = (event) => {
        this.setState({title: event.target.value});
    };
    descriptionChange = (event) => {
        this.setState({description: event.target.value});
    };
    render() {
        return (
            <div className='edit-card'>
                <input className='edit-input' type="text" onChange={this.titleChange} value={this.state.title}/>
                <textarea className='edit-textarea' onChange={this.descriptionChange} value={this.state.description} />

                <button onClick={() => {this.props.hideEdit(); this.props.editCard(this.props.lineId, this.props.card.id, this.state.title,
                    this.state.description, this.props.card)}}>Submit</button>
            </div>
        )
    }
}

export default EditCard;
