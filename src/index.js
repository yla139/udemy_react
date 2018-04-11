import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';
import _ from 'lodash';

const API_KEY = 'AIzaSyCv8RiCcWGymN0TYhqy4jRB3oAXe1-vE2g';

// create a new component. This component should product some html
class App extends Component {
    constructor(props) {
        super(props);

        // initialize video
        this.state = { 
            videos: [],
            selectedVideo: null 
        };

        // initialize search
        this.videoSearch('ichiro');
    }

    // call api and get video data - return a list of videos
    videoSearch(term) {
        YTSearch({key: API_KEY, term: term}, (videos) => {
            this.setState({ 
                videos: videos,
                selectedVideo: videos[0],
            });
        });
    }

    render() {

        const videoSearch = _.debounce((term) => { this.videoSearch(term) }, 300)
        return (
        <div>
            <SearchBar onSearchTermChange={term => this.videoSearch(term) }/>
            <VideoDetail video={this.state.selectedVideo} />
            <VideoList
                onVideoSelect={ selectedVideo => this.setState({ selectedVideo }) }   // takes video and updates selectedvideo
                videos={this.state.videos} />
        </div>
        );
    }
}

// take this component's generated HTML and put it on the page 
ReactDOM.render(<App />, document.querySelector('.container'));
