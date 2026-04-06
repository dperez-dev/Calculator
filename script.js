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


const rowContainer = document.querySelectorAll(".rowContainer");
const btnOper = document.getElementsByClassName("btnOper");
const btnNum = document.getElementsByClassName("btnNum");
const calcBtn = document.querySelectorAll(".calcBtn");

let calcState = {
    numOneVal: "",
    operatorVal: "",
    numTwoVal: "",
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

calcBtn.forEach((btn) =>{
    const numberVal = btn.classList.contains("btnNum");
    const operatorVal = btn.classList.contains("btnOper");
    btn.addEventListener("click", (e) =>{
        if(numberVal && calcState.operatorVal === ""){
           console.log(calcState.numOneVal += e.target.dataset.value);
        }
        else if(operatorVal && calcState.numOneVal != ""){
            console.log(calcState.operatorVal = e.target.dataset.value);

        }
        else if(numberVal && calcState.operatorVal != "" && calcState.numOneVal !=""){
            console.log(calcState.numTwoVal += e.target.dataset.value);
        }
    })
})
