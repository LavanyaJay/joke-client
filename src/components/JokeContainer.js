import React, { Component } from "react";
import { observer } from "mobx-react";
import Joke from "./Joke";
import { getJoke } from "../actions/joke";
import jokeStore from "../stores/joke";

const JokeContainer = observer(
  class JokeContainer extends Component {
    componentDidMount() {
      getJoke();
    }
    render() {
      return (
        <div>
          <Joke joke={jokeStore.joke} />
        </div>
      );
    }
  }
);

export default JokeContainer;
