import React from "react";
import { HappyMeal, Heroic, Menu, Navbar, Restaurant } from "./components";

const App = () => {
  return (
    <div className="max-w-screen relative overflow-x-hidden">
      <Navbar />
      <Heroic />
      <Menu />
     <HappyMeal />
     <Restaurant />
    </div>
  );
};

export default App;
