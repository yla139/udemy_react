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
                 onChange={ event => this.onInputChange(event.target.value)} />
            </div>
        );
    }

    onInputChange(term) {
        this.setState({term});
        this.props.onSearchTermChange(term);
    }

}

export default SearchBar;
