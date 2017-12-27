import React, { Component } from 'react';

import './Search.css';

class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: ''
        };

        this.titleChange = this.titleChange.bind(this);
    }
    titleChange(event) {
        this.setState({title: event.target.value});
    }
    render() {
        return (
            <div className='search-wrapper'>
                <input className='search-input' onChange={this.titleChange} value={this.state.title} type="text"/>
                <button onClick={() => {this.props.searchShow(); this.props.searchCard(this.state.title)}} className='search-button'>Search</button>
            </div>
        )
    }
}

export default Search;
