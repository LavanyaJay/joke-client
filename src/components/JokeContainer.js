import React, { Component } from "react";
import { observer } from "mobx-react";

import { getJoke } from "../actions/joke";
import jokeStore from "../stores/joke";

const JokeContainer = observer(
  class JokeContainer extends Component {
    componentDidMount() {
      getJoke();
    }
    render() {
      return <div>{jokeStore.joke.joke}</div>;
    }
  }
);

export default JokeContainer;
