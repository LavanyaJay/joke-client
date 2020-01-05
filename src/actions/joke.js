import jokeStore from "../stores/joke";

export function getJoke() {
  console.log("in action");
  const id = Math.floor(Math.random() * (3 - 1 + 1)) + 1;
  fetch(`http://127.0.0.1:8000/api/jokes/${id}`)
    .then(res => res.json())
    .then(data => {
      jokeStore.joke = data;
    });
}
