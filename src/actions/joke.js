import jokeStore from "../stores/joke.js";

export function getJoke(id) {
  fetch(`http://127.0.0.1:8000/api/jokes/${id}`)
    .then(res => res.json())
    .then(data => {
      jokeStore.joke = data;
    });
  return id;
}
export function getTotalJokesCount() {
  fetch(`http://127.0.0.1:8000/api/jokes`)
    .then(res => res.json())
    .then(data => {
      jokeStore.jokes = data;
      console.log("len:" + jokeStore.jokes.length);
    });
}
export function addJoke(joke, punchLine, jokeImage) {
  fetch(`http://127.0.0.1:8000/api/jokes/`, {
    body: JSON.stringify({
      image: jokeImage,
      joke: joke,
      punchLine: punchLine
    }),
    headers: {
      "Content-Type": "application/json"
    },
    method: "POST"
  }).then(res => res.json());
}
