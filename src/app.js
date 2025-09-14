import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import HomePage from "./components/HomePage";
import Classic from "./components/Classic";
import TicTacToe from "./components/TicTacToe";
import TimeControlled from "./components/TimeControlled";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/classic" element={<Classic />} />
        <Route path="/disappearer" element={<TicTacToe />} />
        <Route path="/time" element={<TimeControlled />} />
      </Routes>
    </Router>
  );
};

// React 18 root
const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
