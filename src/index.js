import React from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
const API_KEY = 'AIzaSyCv8RiCcWGymN0TYhqy4jRB3oAXe1-vE2g';


YTSearch({key: API_KEY, term: 'surfboards'}, function(data) {
    console.log(data);
});

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



