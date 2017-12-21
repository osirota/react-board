import React, { Component } from 'react';

import './AddCard.css';

class AddCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            description: ''
        };

        this.titleChange = this.titleChange.bind(this);
        this.descriptionChange = this.descriptionChange.bind(this);
    }

    titleChange(event) {
        this.setState({title: event.target.value});
    }
    descriptionChange(event) {
        this.setState({description: event.target.value});
    }
    render() {
        return (
            <div className='add-cards'>
                <input
                    className='add-input'
                    value={this.state.title}
                    onChange={this.titleChange}
                    placeholder='Title' />
                <textarea
                    className='add-textarea'
                    value={this.state.description}
                    onChange={this.descriptionChange}
                    placeholder='Description'>
                </textarea>
                <button onClick={() => {
                this.props.hideAdd(); this.props.addNewCard(this.props.line.id, this.state.title, this.state.description, this.props.line.title)
            }}>Submit</button>
            </div>
        );
    }
}
export default AddCard;
