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
    this.state = {};
  }

  handleChange (value) {

  };

  render() {
    return (
      <div className="SearchComponent">
        <MuiThemeProvider>
          <AutoComplete
              hintText="Type anything"
              dataSource={source}
              onUpdateInput={this.handleChange}
           />
         </MuiThemeProvider>
      </div>
    );
  }
}
