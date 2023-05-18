let points = 0;

import Elements from './elements.js';
import {
  showScore,
  showLoading,
  hideLoading,
  hideStartButton,
  showResetButton,
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
    Elements.correctSound.play();

    showScore(points);
  } else {
    Elements.wrongSound.play();
  }

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
