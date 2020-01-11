import { observable, decorate } from "mobx";

class JokeStore {
  joke = {};
  jokes = [];
}
decorate(JokeStore, {
  joke: observable,
  jokes: observable
});
var jokeStore = new JokeStore();
export default jokeStore;
