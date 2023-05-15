const board = document.querySelector('.board__img');
const startTriviaBtn = document.querySelector('#start-trivia-btn');
const triviaOptions = document.querySelector('.board__options');

startTriviaBtn.addEventListener('click', async () => {
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
});

function generateRandomNumbers() {
  const randomNumbers = [];
  let i;
  for (i = 0; i < 4; i++) {
    const randomNumber = getUniqueRandomNumber(randomNumbers, 1, 150);
    randomNumbers.push(randomNumber);
  }
  return randomNumbers;
}

function getUniqueRandomNumber(array, min, max) {
  let randomNumber = Math.floor(Math.random() * (max - min + 1) + min);
  while (array.includes(randomNumber)) {
    randomNumber = Math.floor(Math.random() * (max - min + 1) + min);
  }
  return randomNumber;
}

function showPokemon(pokeImg) {
  board.innerHTML = `<img src="${pokeImg}">`;
}

function showTriviaOptions(pokemons, correctPokemonName) {
  triviaOptions.innerHTML = '';
  pokemons.forEach(pokemon => {
    const option = document.createElement('button');
    option.textContent = pokemon.name;
    option.addEventListener('click', () => {
      if (option.textContent === correctPokemonName) {
        console.log('Correct!');
      } else {
        console.log('Wrong!');
      }
    });
    triviaOptions.appendChild(option);
  });
}

function shuffleArray(array) {
  const newArray = [...array];
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }
  return newArray;
}
