import React from "react";
import { HappyMeal, Heroic, Menu, Navbar } from "./components";

const App = () => {
  return (
    <div className="max-w-screen relative overflow-x-hidden">
      <Navbar />
      <Heroic />
      <Menu />
     <HappyMeal />
     <div className="w-screen h-screen"></div>
    </div>
  );
};

export default App;
