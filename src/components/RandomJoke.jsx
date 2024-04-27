import { createSignal, createEffect } from 'solid-js';
import "../Style/styles.css"
import Monkey from "../Image/monkey.png"

const RandomJoke = () => {
  const [joke, setJoke] = createSignal(null);

  const fetchJoke = async () => {
    const apiUrl = 'https://v2.jokeapi.dev/joke/Miscellaneous,Dark,Pun?blacklistFlags=political';
    const response = await fetch(apiUrl);
    const data = await response.json();
    setJoke(data);
  };

  const handleNewJoke = () => {
    fetchJoke();
  };

  createEffect(() => {
    fetchJoke();
  });

  return (
    <div class='container'>
      <h2 class='title'>Random Joke Generator</h2>
        <img class='monkey' src={Monkey} alt='monkey' />
      {joke() && (
        <div class='card'>
          <p class='text'>{joke().type === 'single' ? joke().joke : joke().setup}</p>
          {joke().type === 'twopart' && <p class='text'>{joke().delivery}</p>}
          <button class='joke-btn' onClick={handleNewJoke}>Get New Joke</button>
        </div>
      )}
    </div>
  );
};

export default RandomJoke;
