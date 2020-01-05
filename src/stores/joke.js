import { observable, decorate } from "mobx";

class JokeStore {
  joke = {};
}
decorate(JokeStore, {
  joke: observable
});
var jokeStore = new JokeStore();
export default jokeStore;
