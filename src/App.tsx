import React from "react";
import "./styles/App.css";
import Router from "./router";
import AppLayout from "./layouts";

export default function App() {
  return (
    <div className="App">
      <AppLayout>
        <Router />
      </AppLayout>
    </div>
  );
}

