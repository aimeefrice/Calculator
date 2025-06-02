let currentInput = '0';
let previousInput = '';
let operator = '';
let resultt = null;

function udpateDisplay(value){
    const displayBox = document.getElementById("displayBox").querySelector('p');
    displayBox.textContent = value;
}

function appendNumber(number){
    if (currentInput === '0'){
        currentInput = number.toString();
    } else{
        currentInput += number.toString();
    }
    udpateDisplay(currentInput);
}

function setOperator(newOperator){
    if (previousInput === ''){
        previousInput = currentInput;
    } else{
        calculate();
        previousInput = result;
    }
    currentInput = '';
    operator = newOperator;
}

function clearDisplay(){
    currentInput = '0';
    previousInput = '';
    operator = '';
    udpateDisplay(currentInput);
}

function calculate(){
    if (previousInput === '' || currentInput === '') return;

    let num1 = parseFloat(previousInput);
    let num2 = parseFloat(currentInput);

    switch (operator){
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case 'x':
            result = num1 * num2;
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
    udpateDisplay(currentInput);
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

document.getElementById('add').addEventListener('click', () => setOperator('+'));
document.getElementById('subtract').addEventListener('click', () => setOperator('-'));
document.getElementById('multiply').addEventListener('click', () => setOperator('*'));
document.getElementById('divide').addEventListener('click', () => setOperator('/'));

document.getElementById('clear').addEventListener('click', clearDisplay());

document.getElementById('divide').addEventListener('click', calculate());

