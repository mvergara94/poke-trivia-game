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
  Elements.min = 1;
  Elements.max = 300;
  Elements.normalLabel.classList.add('dif-active');
  Elements.hardLabel.classList.remove('dif-active');
});

Elements.hardDif.addEventListener('click', () => {
  Elements.menuSound.currentTime = 0;
  Elements.menuSound.play();
  Elements.min = 1;
  Elements.max = 900;
  Elements.hardLabel.classList.add('dif-active');
  Elements.normalLabel.classList.remove('dif-active');
});
