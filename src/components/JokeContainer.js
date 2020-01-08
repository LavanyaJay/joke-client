import React, { Component } from "react";
import { observer } from "mobx-react";
import Joke from "./Joke";
import { getJoke } from "../actions/joke.js";
import jokeStore from "../stores/joke.js";

const JokeContainer = observer(
  class JokesContainer extends Component {
    state = { id: 1 };
    componentDidMount() {
      const id = Math.floor(Math.random() * (3 - 1 + 1)) + 1;
      getJoke(id);
      console.log("id: " + id);
      this.setState({ id });
    }
    render() {
      return (
        <div>
          <Joke joke={jokeStore.joke} id={this.state.id} />
        </div>
      );
    }
  }
);

export default JokeContainer;
