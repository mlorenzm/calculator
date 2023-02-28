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
            screen.innerHTML = item.innerHTML;
        }else{
            screen.innerHTML += item.innerHTML
        }

        // something if the operator has been used
    })
});

operatorButtons.forEach(item =>{
    item.addEventListener('click', e =>{
        if (previousNumber){
            currentNumber = parseFloat(screen.innerHTML);
            previousNumber = operate(currentNumber, operator, previousNumber);
            screen.innerHTML = previousNumber;
        } else{
            previousNumber = parseFloat(screen.innerHTML);
        }
        screen.innerHTML = '0'
        operator = item.innerHTML;
        dot = false;
    })
});

dotButton.addEventListener('click', e=>{
    if (!dot){
        screen.innerHTML += '.';
        dot = true;
    }
})
function clear(display){
    if (display == 'clear'){screen.innerHTML = '0';};
    previousNumber = undefined;
    lastNumber = undefined;
    operator = undefined;
    equal = false;
    dot = false;
}


equalButton.addEventListener('click', e =>{
    if(operator == undefined){
        screen.innerHTML = 'Error';}
    else if (!equal){
        lastNumber = parseFloat(screen.innerHTML);
        equal = true;
        screen.innerHTML = operate(previousNumber, operator, lastNumber);
    } else {
        screen.innerHTML = operate(parseFloat(screen.innerHTML), operator, lastNumber);
    }
}
);

clearButton.addEventListener('click', e=>{
    clear('clear');
});


backspaceButton.addEventListener('click', e=>{
    if(screen.innerHTML.length > 1){
        screen.innerHTML = screen.innerHTML.slice(0,-1);
    } else {
        screen.innerHTML = '0';
    }
})