// import React, { useRef, useEffect } from "react";
import React from "react";
import "./App.css";
import WebViewerComponent from "./components/WebViewer/WebViewerComponent";
import Home from "./components/Home/Home";
const App = () => {
  return (
    <div className="App">
      <div className="header">React sample</div>
      <Home />
      <WebViewerComponent />
    </div>
  );
};

export default App;
