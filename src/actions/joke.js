import jokeStore from "../stores/joke.js";

export function getJoke(id) {
  fetch(`http://127.0.0.1:8000/api/jokes/${id}`)
    .then(res => res.json())
    .then(data => {
      console.log(data);
      jokeStore.joke = data;
    });
  return id;
}
