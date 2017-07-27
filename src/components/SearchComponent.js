import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AutoComplete from 'material-ui/AutoComplete';
import {orange500, blue500} from 'material-ui/styles/colors';

export default class SearchComponent extends Component {

  constructor(props) {
    super();
    this.callback = props.callback;
    this.state = {
      searchReuslt: [],
      hideSearch: false,
    };
  }

  fetchMovies = (input) => {

      fetch('https://itunes.apple.com/search?term='
        + input + '&media=movie&entity=movie&country=se&limit=20')
        .then((response) => response.json())
        .then((responseJson) => {
          this.setState({
            searchReuslt: responseJson.results,
            hideSearch: false,
          });

          return;
        })
        .catch((error) => {
          console.error(error);
        });
  }

  movieSelected = (movieName) => {
    this.callback(this.state.searchReuslt.find(m => m.trackName == movieName))
  }

  render() {
    return (
      <div className="SearchComponent">
        <MuiThemeProvider>
          <AutoComplete
              hintText="Type anything"
              fullWidth={true}
              dataSource={this.state.searchReuslt.map(movie => {return movie.trackName})}
              onUpdateInput={this.fetchMovies.bind(this)} // when user enters character in search field
              onNewRequest={this.movieSelected.bind(this)} // when user clicks a search result
           />
         </MuiThemeProvider>
      </div>
    );
  }
}
