import React from "react";

import Navbar from "./Components/NAvbar/Navbar";
import Admin from "./Pages/Admin/Admin";

const App = () => {
  const url = "https://e-shopping-backend-5il7.onrender.com";
  return (
    <div>
      <Navbar />
      <Admin />
    </div>
  );
};

export default App;
