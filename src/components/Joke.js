import React, { Component } from "react";
import PunchLine from "./PunchLine";
import { observer } from "mobx-react";
import { getJoke } from "../actions/joke";
const Joke = observer(
  class Joke extends Component {
    state = { rendered: false };

    componentDidMount() {
      setTimeout(() => {
        this.setState({ rendered: true });
      }, 3000);
    }
    handler() {
      this.setState({ rendered: false });
    }

    render() {
      const { joke } = this.props;

      const t = this.state.rendered ? (
        <PunchLine punchLine={joke.punchLine} />
      ) : null;

      return (
        <div>
          <div className="joke">{joke.joke}</div>
          <div className="jokeImg">
            {<img src={joke.image} className="image" alt="" />}
          </div>
          {t}
          <button
            onClick={() => {
              this.handler();
              getJoke();
              setTimeout(() => {
                this.setState({ rendered: true });
              }, 3000);
            }}
            className="btn"
          >
            Next Joke
          </button>
        </div>
      );
    }
  }
);
export default Joke;
