const add = (a, b) => {
  console.log('add', a, b , '=', a + b)
  return a + b;
}

const sub = (a, b) => {
  console.log('sub', a, b , '=', a - b)
  return a - b;
}

const mult = (a, b) => {
  console.log('mult', a, b , '=', a * b)
  return a * b;
}

const div = (a, b) => {
  console.log('div', a, b , '=', a / b)
  return a / b;
}

const container = document.querySelector('#container');
const operators = document.createElement('div');
const input = document.createElement('input');

input.setAttribute('readonly','readonly');

const clearButton = document.createElement('button');

clearButton.textContent = 'C';
clearButton.style.cssText = `
  grid-area: clear;
  margin-right:10px;
  margin-left:2px;
  margin-top:10px;
  height: 36px;
  `;

clearButton.addEventListener('click', (e) => {
  const i = document.querySelector('input');
  firstNum = '';
  secondNum = '';
  currentOp = '';
  i.value = '';

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

// 80, 30
operators.style.cssText = `
display:grid; 
height: 160px; 
width: 330px; 
grid-template-columns: repeat(4, 1fr); 
grid-template-rows: repeat(4, 1fr);
grid-gap: 10px;
padding: 10px;
grid-area: main;
`
let firstNum = '';
let secondNum = '';
let currentOp = '';

buttons.forEach(button => {
  button.id = button.textContent;
  button.addEventListener('click', (e) => {

    const op = e.target.textContent;
    const i = document.querySelector('input');

    if(Number(op) || op === '0'){
      console.log(secondNum, currentOp)
      if(secondNum != ''){
        secondNum += op;
        i.value = secondNum;
      } 
      else {
        i.value = op;
        secondNum = op;
      }
    } else if(!Number(op)){
      if(op !== '=') currentOp = op;
      else {
        if(firstNum === '' && secondNum === '')
          return;  
        else if(firstNum !== ''){
          Number(secondNum) ? i.value = secondNum : '';
        } else 
          i.value = firstNum;
      }
    }
    
    if(currentOp !== ''){
      if(firstNum === '' && secondNum !== ''){
        firstNum = secondNum;
        secondNum = '';
      } else if(firstNum !== '' && secondNum !== '' && op === '='){
        if(currentOp !== ''){
          console.log('evaluating', firstNum, currentOp, secondNum);  
          evaluateNumbers(currentOp, firstNum, secondNum);
        }
      }
    }

  });
})

const evaluateNumbers = (op, a, b) => {
  const i = document.querySelector('input');
  a = Number(a);
  b = Number(b);
  secondNum = '';
  currentOp = '';
  console.log(op, a , b);
  switch (op) {
    case '+':
      firstNum = add(a, b);
      i.value = firstNum;
      break;
    case '-':
      firstNum = sub(a, b);
      i.value = firstNum;
      break;
    case '*':
      firstNum = mult(a, b);
      i.value = firstNum;
      break;
    case '/':
      firstNum = div(a, b);
      i.value = firstNum;
      break;
    case '=':
      console.log('EQUALS');
      break;
  }
}

container.appendChild(input);
container.appendChild(clearButton);
operators.appendChild(sevenButton);
operators.appendChild(eightButton);
operators.appendChild(nineButton);
operators.appendChild(divButton);
operators.appendChild(fourButton);
operators.appendChild(fiveButton);
operators.appendChild(sixButton);
operators.appendChild(multButton);
operators.appendChild(oneButton);
operators.appendChild(twoButton);
operators.appendChild(threeButton);
operators.appendChild(subButton);
operators.appendChild(zeroButton);
operators.appendChild(decButton);
operators.appendChild(evalButton);
operators.appendChild(addButton);
container.appendChild(operators);
