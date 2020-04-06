import React from "react";

export default function home(props) {
  return (
    <div
      className="container"
      style={{
        textAlign: "center",
        justifyContent: "center",
      }}
    >
      <h1>Snake Game</h1>
      <p>Choose level</p>
      <button
        onClick={() => props.changeComponent("GAME", 160)}
        className="button1"
      >
        Easy
      </button>
      <button
        onClick={() => props.changeComponent("GAME", 80)}
        className="button2"
      >
        Medium
      </button>
      <button
        onClick={() => props.changeComponent("GAME", 40)}
        className="button3"
      >
        Tough
      </button>
    </div>
  );
}
