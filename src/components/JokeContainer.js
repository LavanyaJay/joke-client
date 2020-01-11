import React, { Component } from "react";
import { observer } from "mobx-react";
import Joke from "./Joke";
import { getJoke, getTotalJokesCount } from "../actions/joke.js";
import jokeStore from "../stores/joke.js";
import { Link } from "react-router-dom";

const JokeContainer = observer(
  class JokesContainer extends Component {
    state = { id: 1 };

    componentDidMount() {
      getTotalJokesCount();
      let max = jokeStore.jokes.length;
      const id = Math.floor(Math.random() * (max - 1 + 1)) + 1;
      getJoke(id);
      this.setState({ id });
    }
    render() {
      /* const joke =
        this.state.id > 0 ? (
          <Joke joke={jokeStore.joke} id={this.state.id} />
        ) : (
          <div className="alert">No Jokes Found</div>
        ); */
      return (
        <div>
          <nav className="nav">
            <Link to={"/addJoke"}>Post a Joke</Link>
          </nav>

          <Joke joke={jokeStore.joke} id={this.state.id} />
        </div>
      );
    }
  }
);

export default JokeContainer;
