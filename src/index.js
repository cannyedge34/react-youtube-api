import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Yt_Search from 'youtube-api-search';
import SearchBar from './components/SearchBar';
import VideoList from './components/VideoList';
import VideoDetails from './components/VideoDetails';
import '../style/style.css';
import '../style/bootstrap.css';
const API_KEY = 'AIzaSyCV4wSQ9bZH_llN1GrhoreT-ciozsLrJaA';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      videos: [],
      selectedVideo: null
    };
    this.videoSearch('hello kityy');
  }

  videoSearch(term) {
    Yt_Search({ key: API_KEY, term: term }, videos => {
      this.setState({
        videos: videos,
        selectedVideo: videos[0]
      });
    });
  }

  render() {
    return (
      <div className="container-fluid">
        <SearchBar onSearchTermChange={term => this.videoSearch(term)} />
        <div className="row align-items-start">
          <VideoDetails video={this.state.selectedVideo} />
          <VideoList
            onVideoSelect={selectedVideo => this.setState({ selectedVideo })}
            videos={this.state.videos}
          />
        </div>
      </div>
    );
  }
}
ReactDOM.render(<App />, document.querySelector('#root'));
