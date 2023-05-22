let usedNumbers = [];

export function generateRandomNumbers(min, max) {
  let numbers = [];

  for (let i = min; i <= max; i++) {
    numbers.push(i);
  }

  numbers = numbers.filter(number => !usedNumbers.includes(number));

  let randomNumbers = [];

  while (randomNumbers.length < 4) {
    const randomIndex = Math.floor(Math.random() * numbers.length);
    const randomNumber = numbers[randomIndex];
    numbers.splice(randomIndex, 1);
    randomNumbers.push(randomNumber);
  }

  usedNumbers.push(randomNumbers[0]);

  return randomNumbers;
}

export function shuffleArray(array) {
  const newArray = [...array];
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }
  return newArray;
}
