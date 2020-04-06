import React, { Component } from "react";
import SnakeEatFood from "./../sound/snake_eat_food.mp3";
import Sound from "react-sound";
export default class Alert extends Component {
  render() {
    return (
      <Sound
        url={SnakeEatFood}
        playStatus={Sound.status.PLAYING}
        onLoading={this.handleSongLoading}
        onPlaying={this.handleSongPlaying}
        onFinishedPlaying={this.handleSongFinishedPlaying}
      />
    );
  }
}
