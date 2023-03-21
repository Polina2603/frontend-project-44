import getRandomInt from '../generateRandomNumb.js';
import startGame from '../index.js';

const rules = 'Find the greatest common divisor of given numbers.';

const findGcd = (num1, num2) => {
  if (!num2) {
    return num1;
  }

  return findGcd(num2, num1 % num2);
};

const playGcd = () => {
  const firstNum = getRandomInt();
  const secondNum = getRandomInt();
  const question = `${firstNum} ${secondNum}`;
  const correctAnswer = findGcd(firstNum, secondNum);
  return [question, String(correctAnswer)];
};

export default () => startGame(playGcd, rules);
