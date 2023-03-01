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



function operate(num1, operator, num2){
     if (operator == '+'){
        return add(num1, num2);
    } else if (operator == '-'){
        return subtract(num1,num2);
    } else if (operator == '×'){
        return multiply(num1, num2);
    } else if (operator == '÷'){
        return divide(num1,num2);
    }
};


const numberButtons = document.querySelectorAll('.number');
const operatorButtons = document.querySelectorAll('.operator');
const clearButton = document.querySelector('.clear');
const equalButton = document.querySelector('.equal');
const dotButton = document.querySelector('.dot');
const backspaceButton = document.querySelector('.backspace');
const screen = document.querySelector('.screen');
let previousNumber;
let lastNumber;
let operator;
let equal = false;
let dot;

numberButtons.forEach(item =>{
    item.addEventListener('click', e =>{
        if(screen.textContent == 0){
            screen.textContent = item.textContent;
        }else{
            screen.textContent += item.textContent
        }

        // something if the operator has been used
    })
});

operatorButtons.forEach(item =>{
    item.addEventListener('click', e =>{
        if (previousNumber){
            currentNumber = parseFloat(screen.textContent);
            previousNumber = operate(currentNumber, operator, previousNumber);
            screen.textContent = previousNumber;
        } else{
            previousNumber = parseFloat(screen.textContent);
        }
        screen.textContent = '0'
        operator = item.textContent;
        dot = false;
    })
});

dotButton.addEventListener('click', e=>{
    if (!dot){
        screen.textContent += '.';
        dot = true;
    }
})
function clear(display){
    if (display == 'clear'){screen.textContent = '0';};
    previousNumber = undefined;
    lastNumber = undefined;
    operator = undefined;
    equal = false;
    dot = false;
}


equalButton.addEventListener('click', e =>{
    if(operator == undefined){
        screen.textContent = 'Error';}
    else if (!equal){
        lastNumber = parseFloat(screen.textContent);
        equal = true;
        screen.textContent = operate(previousNumber, operator, lastNumber);
    } else {
        screen.textContent = operate(parseFloat(screen.textContent), operator, lastNumber);
    }
}
);

clearButton.addEventListener('click', e=>{
    clear('clear');
});


backspaceButton.addEventListener('click', e=>{
    if(screen.textContent.length > 1){
        screen.textContent = screen.textContent.slice(0,-1);
    } else {
        screen.textContent = '0';
    }
});