import Elements from './elements.js';

Elements.openMenuBtn.addEventListener('click', () => {
  Elements.sideMenu.style.display = 'flex';
  Elements.menuSound.currentTime = 0;
  Elements.menuSound.play();
});

Elements.closeMenuBtn.addEventListener('click', () => {
  Elements.sideMenu.style.display = 'none';

  Elements.menuSound.currentTime = 0;
  Elements.menuSound.play();
});

Elements.dificultieBtn.addEventListener('click', () => {
  Elements.menuSound.currentTime = 0;
  Elements.menuSound.play();
  if (Elements.dificultiesOptions.style.display === 'flex') {
    Elements.dificultiesOptions.style.display = 'none';
  } else {
    Elements.dificultiesOptions.style.display = 'flex';
  }
});

Elements.normalDif.addEventListener('click', () => {
  Elements.menuSound.currentTime = 0;
  Elements.menuSound.play();
  setDifficulty(1, 300);
  Elements.normalLabel.classList.add('dif-active');
});

Elements.hardDif.addEventListener('click', () => {
  Elements.menuSound.currentTime = 0;
  Elements.menuSound.play();
  setDifficulty(1, 600);
  Elements.hardLabel.classList.add('dif-active');
});

Elements.impossibleDif.addEventListener('click', () => {
  Elements.impDificultieSound.currentTime = 0.7;
  Elements.impDificultieSound.volume = 0.2;
  Elements.impDificultieSound.play();
  setDifficulty(1, 900);
  Elements.board.classList.add('dificultie-layer');
  Elements.impossibleLabel.classList.add('dif-active');
});

function setDifficulty(min, max) {
  Elements.min = min;
  Elements.max = max;
  Elements.hardLabel.classList.remove('dif-active');
  Elements.normalLabel.classList.remove('dif-active');
  Elements.impossibleLabel.classList.remove('dif-active');
  Elements.board.classList.remove('dificultie-layer');
}
