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
      return (
        <div>
          <div className="joke">{jokeStore.joke.joke}</div>
          <div className="jokeImg">
            {<img src={jokeStore.joke.image} className="image" alt="" />}
          </div>
          ;
        </div>
      );
    }
  }
);

export default JokeContainer;
