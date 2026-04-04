let add = function(valueA , valueB){
    return valueA + valueB;
}
let subtract = function(valueA , valueB){
    return valueA - valueB;
}
let multiply = function(valueA, valueB){
    return valueA * valueB;
}
let divide = function(valueA, valueB){
    return valueA / valueB;
}
let exponent = function(valueA, valueB){
    return Math.pow(valueA, valueB);
}
let percentage = function(partialVal, totalVal){
    return (100 * partialVal) / totalVal;
}
const rowContainer = document.querySelector(".rowContainer");
const btnOper = document.getElementsByClassName("btnOper");
const btnNum = document.getElementsByClassName("btnNum");

let calcState = {
    numOneVal: 0,
    operatorVal: "",
    numTwoVal: 0,
}

let operate = function(numOne, operator, numTwo){
    switch(operator) {
        case "+":
            return add(numOne, numTwo);
        case "-":
            return subtract(numOne, numTwo);
        case "*":
            return multiply(numOne, numTwo);
        case "/":
            return divide(numOne, numTwo);
        case "^":
            return exponent(numOne, numTwo);
        case "%":
            return percentage(numOne, numTwo);
        default:
            return "ERROR NOT A KNOWN OPERATOR";
    }
}

rowContainer.addEventListener("click", function(e){
})
