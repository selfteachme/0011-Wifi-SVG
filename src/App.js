import React from "react";
import logo from "./logo.svg";
import "./App.css";

import { Wifi } from "./components/Wifi";

function App() {
  return (
    <div className="App">
      <header className="App-header inverse">
        <Wifi status="error" />
        <p>One wifi to rule them all.</p>
      </header>
    </div>
  );
}

export default App;
