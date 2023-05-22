import { generateRandomNumbers, shuffleArray } from './numberGenerator.js';
import { showPokemon, showTriviaOptions, showScore } from './display.js';
import { hideLoading } from './display.js';
import Elements from './elements.js';

export async function buildBoard() {
  const pokemonNumbers = generateRandomNumbers(Elements.min, Elements.max);
  const pokemonPromises = pokemonNumbers.map(number =>
    fetch(`https://pokeapi.co/api/v2/pokemon/${number}`).then(response =>
      response.json()
    )
  );

  const pokemons = await Promise.all(pokemonPromises);
  const correctPokemon = pokemons[0];
  const correctPokemonName = pokemons[0].name;
  showScore(Elements.points);
  showPokemon(correctPokemon.sprites.front_default);
  showTriviaOptions(shuffleArray(pokemons), correctPokemonName);

  return hideLoading();
}
