import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';
const API_KEY = 'AIzaSyCv8RiCcWGymN0TYhqy4jRB3oAXe1-vE2g';

// create a new component. This component should product some html
class App extends Component {
    constructor(props) {
        super(props);

        // initialize video
        this.state = { videos: [] };

        // call api and get video data
        YTSearch({key: API_KEY, term: 'softball'}, (videos) => {
            this.setState({ videos });
        });
    }

    render() {
        return (
        <div>
            <SearchBar />
            <VideoDetail video={this.state.videos[0]}/>
            <VideoList videos={this.state.videos} />
        </div>
        );
    }
}

// take this component's generated HTML and put it on the page 
ReactDOM.render(<App />, document.querySelector('.container'));
