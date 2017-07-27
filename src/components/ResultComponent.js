import React, {Component} from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import FlatButton from 'material-ui/FlatButton';

export default class ResultComponent extends Component {

  constructor(props){
    super(props);
    this.props = props;
  }

  render() {
    var result = <div></div>
    console.dir(this.props.movie);

    if(this.props.movie.trackName != null){
      result = <div className="ResultComponent">
                <img src={this.props.movie.artworkUrl100}
                  className="ResultComponent-image"/>
                  <b className="Title">
                    {this.props.movie.trackName}
                  </b>
                  <p className="MovieDescription">{this.props.movie.longDescription}</p>
              </div>
    }
    return(
      <div>
        {result}
      </div>


    );

  }
}
