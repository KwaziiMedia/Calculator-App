//userinput
let firstNumber ;
let secondNumber ;
let operator ;
let result
//display
let display = document.getElementById("display").innerText;

function appendNumber(number) {
    display += number
    document.getElementById("display").innerText = display
}
//appendOperator function
function appendOperator(operator){
    if(display.length > 0) {
        firstNumber = display;
        operator = operator;
        display += operator
        document.getElementById("display").innerText = display
    }
}
//Clear Function
function clearDisplay(){
    display = ""
    document.getElementById("display").innerText = display
}
//calculate function
function calculate(){
    result = eval(display)
    document.getElementById("display").innerText = result
}
