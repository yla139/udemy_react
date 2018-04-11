import React, { Component } from 'react';

class SearchBar extends Component {

    // initialize state exists in class based component, using syntax this.state
    // state = a pure js obj that used to record and to react to javascript event
    constructor(props) {
        super(props);

        // term = 'search term', the property we want to update
        this.state = { term: '' };
    }


    render() {
        // update state with setState()
        return (
            <div className="search-bar"> 
                <input
                 value={this.state.term}
                 onChange={ event => this.setState({ term: event.target.value })} />
                 { this.state.term }
            </div>
        );
    }

    // event object descrirbe the context of the event occurred

}

export default SearchBar;
