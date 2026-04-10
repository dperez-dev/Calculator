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
const enterBtn = document.querySelector("#enterBtn");
const cleatBtn = document.querySelector("#btnClear");

let calcState = {
    numOneVal: "",
    operatorVal: "",
    numTwoVal: "",
}

let operate = function(numOne, operator, numTwo){
    switch(operator) {
        case "+":
            console.log(add(Number(numOne), Number(numTwo)));
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


const checkNumVal = function(numVal){
    if(numVal && calcState.operatorVal === ""){
        return true;
    }
}
const checkOperatorVal = function(operator){
    if(operator && calcState.numOneVal !="") {
        return true;
    }
}
const checkNumTwoVal = function(numTwo){
    if(numTwo && calcState.numOneVal !="" && calcState.operatorVal !=""){
        return true;
    }
}
const clear = function(){
    return calcState.numOneVal = "", calcState.operatorVal = "", calcState.numTwoVal = "";
}

calcBtn.forEach((btn) =>{
    const numberVal = btn.classList.contains("btnNum");
    const operatorVal = btn.classList.contains("btnOper");

    btn.addEventListener("click", (e) =>{
        if(checkNumVal(numberVal)){
           console.log(Number(calcState.numOneVal += e.target.dataset.value));
        }
        else if(checkOperatorVal(operatorVal)){
            console.log(calcState.operatorVal = e.target.dataset.value);

        }
        else if(checkNumTwoVal(numberVal)){
            console.log(Number(calcState.numTwoVal += e.target.dataset.value));
        }
        else if(enterBtn){
            Number(operate(calcState.numOneVal, calcState.operatorVal, calcState.numTwoVal));
        }
        // else if(clear)
    
    })
})
