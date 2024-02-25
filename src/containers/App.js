import React from "react";
import "./App.css";
import "tachyons";
import Searchbox from "../components/Searchbox";
import Card from "../components/Card";

const App = () => {
  return (
    <div className="tc">
      <h1 className="f2">RoboFriends</h1>
      <Searchbox />
      <Card />
    </div>
  );
};

export default App;
