import React, {Component} from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import FlatButton from 'material-ui/FlatButton';
import { Player } from 'video-react';

export default class VideoComponent extends Component {

  constructor(props){
    super(props);
    this.props = props;
  }

  render() {
    var video = <div></div>
    console.dir(this.props.movie);

    if(this.props.movie.trackName != null){
      video = <div className="VideoComponent">
                <Player
                  playsInline
                  poster="/assets/poster.png"
                  src={this.props.movie.previewUrl} />
              </div>
    }
    return(
      <div>
        {video}
      </div>


    );

  }
}
