import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AutoComplete from 'material-ui/AutoComplete';

const source = [
  'ES-es',
  'Spain',
  'TH-th',
  'Thailand',
  'EN-gb',
  'England',
  'EN-en',
  'USA'
];

export default class SearchComponent extends Component {

  constructor() {
    super();
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

  render() {
    return (
      <div className="SearchComponent">
        <MuiThemeProvider>
          <AutoComplete
              hintText="Type anything"
              dataSource={this.state.searchReuslt.map(movie => {return movie.trackName})}
              onUpdateInput={this.fetchMovies.bind(this)}
           />
         </MuiThemeProvider>
      </div>
    );
  }
}
