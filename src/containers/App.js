import React, { useEffect, useState } from "react";
import "./App.css";
import "tachyons";
import Searchbox from "../components/Searchbox";
import CardList from "../components/CardList";

const App = () => {
  const [robots, setRobots] = useState([]);
  const [searchfield, setSearchfield] = useState("");

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((robots) => setRobots(robots));
  }, []);

  const onSearchChange = (event) => {
    setSearchfield(event.target.value);
    console.log(event.target.value);
  };

  const filterRobots = robots.filter((robot) => {
    return robot.name.toLowerCase().includes(searchfield.toLowerCase());
  });

  return (
    <div className="tc">
      <h1 className="f2">RoboFriends</h1>
      <Searchbox SearchChange={onSearchChange} />
      <CardList robots={filterRobots} />
    </div>
  );
};

export default App;
