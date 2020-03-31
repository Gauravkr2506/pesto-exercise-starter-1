import React from "react";
import logo from "./logo.svg";
import "./App.css";
import GroceryComponent from "./Components/grocery-component";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img
          src={logo}
          className="App-logo"
          style={{ height: 50 }}
          alt="logo"
        />
        <h3>Grocery List</h3>
      </header>
      <GroceryComponent />
    </div>
  );
}

export default App;
