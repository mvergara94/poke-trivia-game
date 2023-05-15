const score = document.querySelector('.board__score');
const board = document.querySelector('.board__img');
const startTriviaBtn = document.querySelector('#start-trivia-btn');
const triviaOptions = document.querySelector('.board__options');
const loadingOverlay = document.querySelector('.loading-overlay');
let points = 0;

startTriviaBtn.addEventListener('click', async () => {
  showLoading();
  showScore(0);
  await buildBoard();
  hideLoading();
});

function showLoading() {
  loadingOverlay.style.display = 'flex';
}

function hideLoading() {
  setTimeout(() => {
    loadingOverlay.style.display = 'none';
  }, 1000);
}

function resetBoard() {
  board.innerHTML = '';
  triviaOptions.innerHTML = '';
}

async function buildBoard() {
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

function nextRound() {
  resetBoard();
  buildBoard();
}

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
      checkAnswer(option, correctPokemonName);
    });
    triviaOptions.appendChild(option);
  });
}

function checkAnswer(option, correctPokemonName) {
  if (option.textContent === correctPokemonName) {
    points++;

    showScore(points);
  } else {
  }

  nextRound();
}

function showScore(points) {
  score.innerHTML = '';
  const scorePoints = document.createElement('h2');
  scorePoints.innerHTML = `<p>Score: ${points}</p>`;
  scorePoints.classList.add('score__points');
  score.appendChild(scorePoints);
}

function shuffleArray(array) {
  const newArray = [...array];
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }
  return newArray;
}
