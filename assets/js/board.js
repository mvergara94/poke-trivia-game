import { generateRandomNumbers, shuffleArray } from './numberGenerator.js';
import { showPokemon, showTriviaOptions } from './display.js';

export async function buildBoard() {
  const pokemonNumbers = generateRandomNumbers();
  const pokemonPromises = pokemonNumbers.map(number =>
    fetch(`https://pokeapi.co/api/v2/pokemon/${number}`).then(response =>
      response.json()
    )
  );
  const pokemons = await Promise.all(pokemonPromises);
  const correctPokemon = pokemons[0];
  const correctPokemonName = pokemons[0].name;
  showPokemon(correctPokemon.sprites.front_default);
  showTriviaOptions(shuffleArray(pokemons), correctPokemonName);
}
