import getRandomInt from '../generateRandomNumb.js';
import startGame from '../index.js';

const rules = 'What is the result of the expression?';
const min = 1;
const max = 100;
const operationSigns = ['+', '-', '*'];

const calculate = (num1, num2, operation) => {
  switch (operation) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    default:
      throw new Error(`operation ${operation} is not supported`);
  }
};

const playCalc = () => {
  const randomNumber1 = getRandomInt(min, max);
  const randomNumber2 = getRandomInt(min, max);
  const randomOperationSign = operationSigns[getRandomInt(0, operationSigns.length - 1)];
  const correctAnswer = calculate(randomNumber1, randomNumber2, randomOperationSign);
  const question = `${randomNumber1} ${randomOperationSign} ${randomNumber2} --> `;
  return [question, String(correctAnswer)];
};

export default () => startGame(playCalc, rules);
