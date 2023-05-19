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
    updateHighScore(getPoints());
  });

  Elements.resetButton.addEventListener('click', () => {
    location.reload();
  });
}

export function checkAnswer(option, correctPokemonName) {
  if (option.textContent === correctPokemonName) {
    points++;
    savePoints(points);
    Elements.correctSound.volume = 0.2;
    Elements.correctSound.play();
    showScore(points);
  } else {
    points = 0;
    showScore(points);
    Elements.wrongSound.play();
  }

  updateHighScore(getPoints());
  nextRound();
}

function nextRound() {
  resetBoard();
  showLoading();
  buildBoard();
  hideLoading();
}

function resetBoard() {
  Elements.board.innerHTML = '';
  Elements.triviaOptions.innerHTML = '';
}

function savePoints(value) {
  const storedPoints = getPoints();
  if (value > storedPoints || isNaN(storedPoints)) {
    localStorage.setItem('pontos', value.toString());
  }
}

function getPoints() {
  const storedPoints = localStorage.getItem('pontos');
  return parseInt(storedPoints) || 0;
}
