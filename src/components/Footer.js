import React from "react";
import PropTypes from "prop-types";

import CurrentSong from "./CurrentSong";
import Slider from "./Slider";
import PlayPauseButton from "./PlayPauseButton";

export default class Footer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      durationVal: 0,
      currentSong: {},
      progressInterval: null,
      alternativeMounts: null
    };
    this.updateProgress = this.updateProgress.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    // if the song is new and we have all required props,
    // reset setInterval and currentSong
    if (
      this.state.currentSong.id !== nextProps.currentSong.id &&
      nextProps.songStartedAt
    ) {
      this.setState({
        currentSong: nextProps.currentSong,
        progressInterval: setInterval(this.updateProgress, 100),
        alternativeMounts: [].concat(nextProps.remotes, nextProps.mounts)
      });
    }
  }

  updateProgress() {
    this.setState({
      durationVal: (new Date().valueOf() - this.props.songStartedAt) / 1000
    });
  }

  handleChange(e) {
    let { value } = e.target;
    this.props.setUrl(value);
  }

  render() {

    let durationVal = parseInt(this.state.durationVal.toFixed(2), 10);

    return (
      <footer>
        <CurrentSong
          currentSong={this.state.currentSong}
          durationVal={durationVal}
          fastConnection={this.props.fastConnection}
          listeners={this.props.listeners}
          playing={this.props.playing}
          songDuration={this.props.songDuration}
        />
        <PlayPauseButton
          playing={this.props.playing}
          togglePlay={this.props.togglePlay}
        >
        </PlayPauseButton>
        <Slider
          currentVolume={this.props.currentVolume}
          setTargetVolume={this.props.setTargetVolume}
        />
      </footer>
    );
  }
}

Footer.propTypes = {
  currentSong: PropTypes.object,
  currentVolume: PropTypes.number,
  fastConnection: PropTypes.bool,
  listeners: PropTypes.number,
  mounts: PropTypes.array,
  player: PropTypes.object,
  playing: PropTypes.bool,
  remotes: PropTypes.array,
  setTargetVolume: PropTypes.func,
  setUrl: PropTypes.func,
  songDuration: PropTypes.number,
  songStartedAt: PropTypes.number,
  togglePlay: PropTypes.func,
  url: PropTypes.string
};
