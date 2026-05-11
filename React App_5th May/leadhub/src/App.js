import React, { useState } from "react";
import LifecycleDemo from "./LifecycleDemo";
import "./App.css";

function App() {
  const [showComponent, setShowComponent] = useState(true);

  return (
    <div className="app-container">
      <h1 className="title">React Lifecycle Methods Demo</h1>

      <p className="description">
        This application demonstrates React component lifecycle phases
        including Mounting, Updating, and Unmounting using Class Components.
      </p>

      <button
        className="toggle-btn"
        onClick={() => setShowComponent(!showComponent)}
      >
        {showComponent ? "Hide Component" : "Show Component"}
      </button>

      <div className="card">
        {showComponent ? (
          <LifecycleDemo />
        ) : (
          <h2>Component Removed from DOM</h2>
        )}
      </div>
    </div>
  );
}

export default App;