import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import SearchComponent from './components/SearchComponent.js';
import './App.css';

class App extends Component {

  constructor() {
    super();
    this.state = {};
  }

  movieSelected(movie) {
    this.setState({
      selectedMovie: movie
    });
  }

  render() {

    var result = <div></div>

    console.dir(this.state);

    if(this.state.selectedMovie != null) {
      result = <div><img src={this.state.selectedMovie.artworkUrl100}/></div>
      //result = <ResultComponent movie={this.state.selectedMovie} />
    }

    return (
      <div className="App">
        <div className="App-header">
          <h2>Welcome to React</h2>
        </div>
        <div className="App-body">
          <div>
            <SearchComponent callback={this.movieSelected.bind(this)}/>
          </div>
          <div>
            {result}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
