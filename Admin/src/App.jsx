import React from "react";

import Navbar from "./Components/NAvbar/Navbar";
import Admin from "./Pages/Admin/Admin";

const App = () => {
  const url = "http://localhost:4000";
  return (
    <div>
      <Navbar />
      <Admin />
    </div>
  );
};

export default App;
