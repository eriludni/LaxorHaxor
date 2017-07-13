import React, { Component } from 'react';
import Autocomplete from 'react-toolbox/lib/autocomplete';

const source = {
  'ES-es': 'Spain',
  'TH-th': 'Thailand',
  'EN-gb': 'England',
  'EN-en': 'USA'
};

export default class SearchComponent extends Component {


  handleChange (value) {
    this.setState({});
  };

  render() {
    return (
      <div className="SearchComponent">
        <Autocomplete
          direction="down"
          selectedPosition="above"
          label="Type an artist or film or whatevs"
          onChange={this.handleChange}
          source={source}/>
      </div>
    );
  }
}
