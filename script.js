let currentInput = '0';
let previousInput = '';
let operator = '';
let result = null;

function updateDisplay(value) {
    const displayBox = document.getElementById("displayBox").querySelector('p');
    
    if (operator && currentInput === '') {
        displayBox.textContent = `${previousInput} ${operator}`;
    }
    else if (operator && currentInput !== '') {
        displayBox.textContent = `${previousInput} ${operator} ${currentInput}`;
    }
    else {
        displayBox.textContent = value;
    }
}

function appendNumber(number) {
    if (currentInput === '0') {
        currentInput = number.toString();
    } else {
        currentInput += number.toString();
    }
    updateDisplay(currentInput);
}

function setOperator(newOperator) {
    if (previousInput === '') {
        previousInput = currentInput;
    } else {
        calculate();
        previousInput = result;
    }

    currentInput = '';
    operator = newOperator;
    updateDisplay(currentInput); 
}

function clearDisplay() {
    currentInput = '0';
    previousInput = '';
    operator = '';
    updateDisplay(currentInput);
}

function calculate() {
    if (previousInput === '' || currentInput === '') return;

    let num1 = parseFloat(previousInput);
    let num2 = parseFloat(currentInput);

    switch(operator) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;   
        case 'x':
            result = num1*num2;
            break; 
        case '/':
            result = num2 !== 0 ? num1 / num2 : 'Error'
            break;
        default:
            return;
    }

    currentInput = result.toString();
    operator = '';
    previousInput = '';
    updateDisplay(currentInput);
}

document.getElementById('bt0').addEventListener('click', () => appendNumber(0));
document.getElementById('bt1').addEventListener('click', () => appendNumber(1));
document.getElementById('bt2').addEventListener('click', () => appendNumber(2));
document.getElementById('bt3').addEventListener('click', () => appendNumber(3));
document.getElementById('bt4').addEventListener('click', () => appendNumber(4));
document.getElementById('bt5').addEventListener('click', () => appendNumber(5));
document.getElementById('bt6').addEventListener('click', () => appendNumber(6));
document.getElementById('bt7').addEventListener('click', () => appendNumber(7));
document.getElementById('bt8').addEventListener('click', () => appendNumber(8));
document.getElementById('bt9').addEventListener('click', () => appendNumber(9));

document.getElementById('divide').addEventListener('click', () => setOperator('/'));
document.getElementById('add').addEventListener('click', () => setOperator('+'));
document.getElementById('subtract').addEventListener('click', () => setOperator('-'));
document.getElementById('multiply').addEventListener('click', () => setOperator('x'));

document.getElementById('clear').addEventListener('click', () => clearDisplay());
document.getElementById('solve').addEventListener('click', () => calculate());