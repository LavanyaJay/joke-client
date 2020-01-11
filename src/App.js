import React from "react";

import JokeContainer from "./components/JokeContainer";
import AddJokeFormContainer from "./components/AddJokeFormContainer";
import "./App.css";
import { Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Route exact path="/" component={JokeContainer} />
      <Route path="/addJoke" component={AddJokeFormContainer} />
    </div>
  );
}

export default App;
