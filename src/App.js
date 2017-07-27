import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import SearchComponent from './components/SearchComponent.js';
import ResultComponent from './components/ResultComponent.js';
import VideoComponent from './components/VideoComponent.js';
import './App.css';
import "../node_modules/video-react/dist/video-react.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      selectedMovie: {}
    };
  }

  movieSelected(movie) {
    this.setState({
      selectedMovie: movie
    });
  }

  render() {

    return (
      <div className="App">
        <div className="App-body">
          <div className="Search-box-background">
            <SearchComponent
              className="Search-box-field"
              callback={this.movieSelected.bind(this)}/>
          </div>
          <div>
            <div>
              <ResultComponent movie={this.state.selectedMovie} />
            </div>
            <div>
              <VideoComponent movie={this.state.selectedMovie} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
