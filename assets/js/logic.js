let points = 0;

import Elements from './elements.js';
import {
  showScore,
  showLoading,
  hideLoading,
  hideStartButton,
  showResetButton,
  updateHighScore,
} from './display.js';
import { buildBoard } from './board.js';

export function startGame() {
  Elements.startTriviaBtn.addEventListener('click', async () => {
    showLoading();
    showScore(0);
    await buildBoard();
    hideStartButton();
    hideLoading();
    showResetButton();
  });

  Elements.resetButton.addEventListener('click', () => {
    location.reload();
  });
}

export function checkAnswer(option, correctPokemonName) {
  if (option.textContent === correctPokemonName) {
    points++;    
    Elements.correctSound.volume = 0.3;
    Elements.correctSound.play();

    showScore(points);
  } else {
    Elements.wrongSound.play();
  }

  updatePoints(points);

  nextRound();
}

function nextRound() {
  resetBoard();
  showLoading();
  buildBoard();
  hideLoading();
  updateHighScore(getStoredPoints());
}

function resetBoard() {
  Elements.board.innerHTML = '';
  Elements.triviaOptions.innerHTML = '';
}

function savePoints(value) {
  localStorage.setItem('pontos', value.toString());
}

function getStoredPoints() {
  const highScorePoints = localStorage.getItem('pontos');
  return parseInt(highScorePoints);
}

function updatePoints(points) {  
  let highScorePoints = getStoredPoints();

  if (highScorePoints < points) {
    highScorePoints = points;
    savePoints(highScorePoints);
  }
}
