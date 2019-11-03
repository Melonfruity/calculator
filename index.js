const add = (a, b) => {
  return a + b;
}

const sub = (a, b) => {
  return a - b;
}

const mult = (a, b) => {
  return a * b;
}

const div = (a, b) => {
  return a / b;
}

const container = document.querySelector('#container');
const operators = document.querySelector('#operators');
const input = document.createElement('input');

input.setAttribute('type', 'text');

input.addEventListener('change', (e) => {
  const inputV = Number(e.target.value);
  // inputV ? nums.push(inputV) : console.log('Not a number');
  // e.target.value = '';
})

const numbers = () => {
  let numberButtons = [];
  for(let i = 0; i <= 9; i ++){
    const n = document.createElement('button');
    n.textContent = i;
    numberButtons.push(n);
  }
  return numberButtons;
}

const addButton = document.createElement('button');
const subButton = document.createElement('button');
const multButton = document.createElement('button');
const divButton = document.createElement('button');
const decButton = document.createElement('button');
const evalButton = document.createElement('button');

addButton.textContent = '+';
subButton.textContent = '-';
multButton.textContent = '*';
divButton.textContent = '/';
decButton.textContent = '.';
evalButton.textContent = '=';

const [zeroButton, oneButton, twoButton, threeButton, 
  fourButton, fiveButton, sixButton,
  sevenButton, eightButton, nineButton,] = numbers();
const nums = [zeroButton, oneButton, twoButton, threeButton, 
    fourButton, fiveButton, sixButton,
    sevenButton, eightButton, nineButton]

const ops = [addButton, subButton, multButton, divButton, evalButton, decButton];

const buttons = [...ops, ...nums];

buttons.forEach(button => {
  button.addEventListener('click', (e) => {
    console.log(e.target);
  });
})

operators.s

