import React from 'react';
import ReactDOM from 'react-dom';

import searchBar from './components/search_bar';
import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyDgJ6hKzLmWGWmDYZSucjGH6KN2nwOQ6Fk';


// create a new component. This component should product some html
const App = () => {
    return (
    <div>
        <SearchBar />
    </div>
    );
}

// take this component's generated HTML and put it on the page 
ReactDOM.render(<App />, document.querySelector('.container'));



