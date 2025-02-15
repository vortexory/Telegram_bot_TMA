import React from "react";
import { Routes, Route } from "react-router-dom";
import Claim from "./pages/Claim";
import Home from "./pages/Home";
import "./styles/App.css";

export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/claim" element={<Claim />} />
      </Routes>
    </div>
  );
}
