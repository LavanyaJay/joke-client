import React, { Component } from "react";
import PunchLine from "./PunchLine";
import { observer } from "mobx-react";
import { getJoke } from "../actions/joke";
const Joke = observer(
  class Joke extends Component {
    state = { rendered: false, id: 0 };

    componentDidMount() {
      setTimeout(() => {
        console.log("timeout " + this.props.id);
        this.setState({ rendered: true, id: this.props.id });
      }, 3000);
    }
    handler() {
      this.setState({ rendered: false });
    }
    getId() {
      let newId;

      do {
        newId = Math.floor(Math.random() * (3 - 1 + 1)) + 1;
      } while (newId === this.state.id);
      console.log("newId: " + newId);
      console.log("stateid: " + this.state.id);
      this.setState({ id: newId });
      return newId;
    }
    render() {
      const { joke } = this.props;

      const t = this.state.rendered ? (
        <div>
          <PunchLine punchLine={joke.punchLine} />
          <button
            onClick={() => {
              this.handler();

              getJoke(this.getId());
              setTimeout(() => {
                this.setState({ rendered: true });
              }, 3000);
            }}
            className="btn"
          >
            Next Joke
          </button>
        </div>
      ) : null;

      return (
        <div>
          <div className="joke">{joke.joke}</div>
          <div className="jokeImg">
            {<img src={joke.image} className="image" alt="" />}
          </div>
          {t}
        </div>
      );
    }
  }
);
export default Joke;
