const add = (a,b) => {
    return a + b;
};

const subtract = (a,b) => {
    return a - b;
};

const multiply = (a,b) => {
    return a * b;
};

const divide = (a,b) => {
    if (b == 0){
        return 'idk';
    }
    return a / b;
};
const invert = (a) => {
    if (a == 0){
        return 'dude';
    }
    return 1 / a;
};


function operate(num1, operator, num2){
    if (operator == 'inv'){
        return invert(num1);
    } else if (operator == '+'){
        return add(num1, num2);
    } else if (operator == '-'){
        return subtract(num1,num2);
    } else if (operator == '*'){
        return multiply(num1, num2);
    } else if (operator == '/'){
        return divide(num1,num2);
    }
}

function clearScreen(e) {
    screen.textContent = '⠀'; // this is an empty unicode character, to avoid CSS screen collapsing
    currentOperator = '';
    firstNumber = '';
    lastNumber = '';
};

let clear = document.querySelector('.clear');
let screen = document.querySelector('.screen');
clear.addEventListener('click', clearScreen);

let firstNumber ='';
let lastNumber = '';

let numbers = document.getElementsByClassName('operand');

for (let i=0; i<numbers.length; i++){
    numbers[i].addEventListener('click', function(){

        firstNumber += numbers[i].innerHTML;
        screen.innerHTML = firstNumber;
        if (currentOperator){
            lastNumber += numbers[i].innerHTML;
            screen.innerHTML = lastNumber;
        }
        })
};

let currentOperator;
let operators = document.getElementsByClassName('operator');


for (let i=0; i<operators.length; i++){
    operators[i].addEventListener('click', function(){
        currentOperator = operators[i].innerHTML;
        clearScreen;
        screen.innerHTML = currentOperator;
        })
};


// I have the way to join numbers and print them to the screen, erasing them when the C button is pressed



    
