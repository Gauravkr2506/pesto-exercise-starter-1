import React, { Component } from "react";
import Home from "./Containers/home";
import Game from "./Containers/game";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = { component: "HOME", speed: 500 };
  }
  changeComponent = (component, speed) => {
    this.setState({ component, speed });
  };
  render() {
    const { component, speed } = this.state;
    return component === "HOME" ? (
      <Home changeComponent={this.changeComponent} />
    ) : (
      <Game changeComponent={this.changeComponent} speed={speed} />
    );
  }
}
