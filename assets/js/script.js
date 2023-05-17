import { startGame } from './logic.js';

window.addEventListener('resize', adjustBodyHeight);

function adjustBodyHeight() {
  const bodyElement = document.body;
  const navigationBarHeight =
    window.innerHeight - document.documentElement.clientHeight;

  bodyElement.style.height = `calc(100vh - ${navigationBarHeight}px)`;
}

adjustBodyHeight();

startGame();
