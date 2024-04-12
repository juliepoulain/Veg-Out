import React from "react";
import NavBar from "./NavBar";
import BreakfastPage from "./BreakfastPage";
import ReviewsPage from "./ReviewsPage";
import About from "./About";

function Home() {
  return (
    <div>
      <NavBar />
      <About />
      <BreakfastPage />
      <ReviewsPage />
    </div>
  );
}

export default Home;
