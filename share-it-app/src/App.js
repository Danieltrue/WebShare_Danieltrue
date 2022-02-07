import React from "react";
import { ReactDOM } from "react";
import { BrowserRouter, Route, Router } from "react-router-dom";
import Appstyle from "./Appstyle";
import Post from "./components/Post";

function App() {
  return (
    <div className="App">
      <Appstyle>
        <header className="center">
          <h4>Bothofus - Share it</h4>
        </header>
        <BrowserRouter>
          <Post />
        </BrowserRouter>
      </Appstyle>
    </div>
  );
}

export default App;
