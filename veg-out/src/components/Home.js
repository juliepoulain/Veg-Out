import React from "react";
import NavBar from "./NavBar";
import BreakfastList from "./BreakfastList";

function Home() {
  return (
    <div className="App">
      <header>
        <NavBar />
      </header>
      <h1>Veg Out</h1>
      <h2>LA's Hottest Vegetarian Restaurant</h2>
      <h3>About</h3>
      <p>about this restaurant</p>
    </div>
  );
}

export default Home;
