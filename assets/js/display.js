import Elements from './elements.js';
import { checkAnswer } from './logic.js';

export function showPokemon(pokeImg) {
  Elements.board.innerHTML = `<img src="${pokeImg}">`;
}

export function showTriviaOptions(pokemons, correctPokemonName) {
  Elements.triviaOptions.innerHTML = '';
  pokemons.forEach(pokemon => {
    const option = document.createElement('button');
    option.textContent = pokemon.name;
    option.addEventListener('click', () => {
      checkAnswer(option, correctPokemonName);
    });
    Elements.triviaOptions.appendChild(option);
  });
}

export function showScore(points) {
  Elements.score.innerHTML = '';
  const scorePoints = document.createElement('h2');
  scorePoints.innerHTML = `<p>Score: ${points}</p>`;
  scorePoints.classList.add('score__points');
  Elements.score.appendChild(scorePoints);
}

export function showLoading() {
  Elements.loadingOverlay.style.display = 'flex';
}

export function hideLoading() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      Elements.loadingOverlay.style.display = 'none';
      resolve();
    }, 1000);
  });
}

export function hideStartButton() {
  Elements.startTriviaBtn.style.display = 'none';
}

export function showResetButton() {
  Elements.resetButton.style.display = 'block';
}

export function updateHighScore(value = 0) {
  Elements.highScore.innerHTML = `HighScore: ${value}`;
}

export function showErrorMessage() {
  Elements.boardContainer.innerHTML = `<h2>Desculpe, não foi possível carregar o conteúdo</h2>`;
}
