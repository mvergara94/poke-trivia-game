export let points = 0;

import Elements from './elements.js';
import {
  showLoading,
  hideLoading,
  hideStartButton,
  showResetButton,
  updateHighScore,
  showErrorMessage,
} from './display.js';
import { buildBoard } from './board.js';

export function startGame() {
  Elements.startTriviaBtn.addEventListener('click', async () => {
    Elements.menuSound.currentTime = 0;
    Elements.menuSound.play();
    hideStartButton();
    showLoading();
    buildBoard().catch(error => {
      showErrorMessage();
      hideLoading();
    });
    showResetButton();
    updateHighScore(getPoints());
  });

  Elements.resetButton.addEventListener('click', () => {
    points = 0;
    nextRound();
  });
}

export function checkAnswer(option, correctPokemonName) {
  if (option.textContent === correctPokemonName) {
    points++;
    savePoints(points);
    Elements.correctSound.volume = 0.2;
    Elements.correctSound.play();
  } else {
    points = 0;
    Elements.wrongSound.play();
  }

  updateHighScore(getPoints());
  nextRound();
}

function nextRound() {
  resetBoard();
  showLoading();
  buildBoard().catch(error => {
    showErrorMessage();
    hideLoading();
  });
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
