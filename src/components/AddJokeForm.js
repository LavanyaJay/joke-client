import React from "react";
import { Link } from "react-router-dom";
export default function AddJokeForm(props) {
  return (
    <div>
      <form onSubmit={event => props.onSubmit(event)} className="formClass">
        <h1 className="header">Add A Joke</h1>
        <div>
          <div className="input1">
            <label className="label">Joke:</label>
            <input
              className="textBox"
              name="joke"
              type="text"
              required
              value={props.values.joke}
              onChange={event => props.onChange(event)}
            ></input>
          </div>
          <div className="input2">
            <label className="label">Gag Line:</label>
            <input
              className="textBox"
              name="punchLine"
              type="text"
              required
              value={props.values.punchLine}
              onChange={event => props.onChange(event)}
            ></input>
          </div>
          <div className="input3">
            <label className="label">Image:</label>
            <input
              className="textBox"
              name="jokeImage"
              required
              type="text"
              value={props.values.jokeImage}
              onChange={event => props.onChange(event)}
            ></input>
          </div>
        </div>
        <button type="submit" className="buttonClass">
          Add A Joke
        </button>
        <Link to="/"> Home </Link>
      </form>
    </div>
  );
}
