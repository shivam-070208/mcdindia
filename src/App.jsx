import React from "react";
import { Heroic, Navbar } from "./components";

const App = () => {
  return (
    <div className="max-w-screen relative overflow-x-hidden">
      <Navbar />
      <Heroic />
      <div className="h-screen"></div>
    </div>
  );
};

export default App;
