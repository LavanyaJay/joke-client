import React, { Component } from "react";
import PunchLine from "./PunchLine";
import { observer } from "mobx-react";
import { getJoke } from "../actions/joke.js";
import { TwitterShareButton, TwitterIcon } from "react-share";
const Joke = observer(
  class JokeUI extends Component {
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
      const tweet = joke.joke + "\n" + joke.punchLine + "\n";
      const t = this.state.rendered ? (
        <div>
          <PunchLine punchLine={joke.punchLine} />
          <div className="lowerBar">
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

            <TwitterShareButton
              url="http://localhost:3000/"
              title={tweet}
              via="LJ"
              className="social"
            >
              <TwitterIcon size={32} round />
            </TwitterShareButton>
          </div>
        </div>
      ) : null;

      return (
        <div>
          <h1 className="header">Cool Jokes</h1>
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
