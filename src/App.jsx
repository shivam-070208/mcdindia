import React from "react";
import { HappyMeal, Heroic, Menu, Navbar } from "./components";

const App = () => {
  return (
    <div className="max-w-screen relative overflow-x-hidden">
      <Navbar />
      <Heroic />
      <Menu />
     <HappyMeal />
    </div>
  );
};

export default App;
