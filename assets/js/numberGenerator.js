export function generateRandomNumbers() {
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

export function shuffleArray(array) {
  const newArray = [...array];
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }
  return newArray;
}
