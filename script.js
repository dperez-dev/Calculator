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
    return totalVal * partialVal;
}
//all above is the math functions

const calcBtn = document.querySelectorAll(".calcBtn"); //gets all the buttons with said class, helps with classList
const enterBtn = document.querySelector("#enterBtn"); //gets the enter button
const clearBtn = document.querySelector("#btnClear"); //gets the clear button
const dotButton = document.querySelector("#btnDor");



let calcState = {
    numOneVal: "", //holds first number value
    operatorVal: "", //holds what operator is used
    numTwoVal: "", //holds second number operator
    dot: false
}

let operate = function(numOne, operator, numTwo){
    //bases what to do when a certain operator is used
    switch(operator) {
        case "+":
            console.log(add(Number(numOne), Number(numTwo)))
            return add(Number(numOne), Number(numTwo));
        case "-":
            console.log(subtract(Number(numOne), Number(numTwo)))
            return subtract(Number(numOne), Number(numTwo));
        case "*":
            console.log(multiply(Number(numOne), Number(numTwo)))
            return multiply(Number(numOne), Number(numTwo));
        case "/":
            console.log(divide(Number(numOne), Number(numTwo)))
            return divide(Number(numOne), Number(numTwo));
        case "^":
            console.log(exponent(Number(numOne), Number(numTwo)))
            return exponent(Number(numOne), Number(numTwo));
        case "%":
            console.log(percentage(Number(numOne), Number(numTwo)))
            return percentage(Number(numOne), Number(numTwo));
        default:
            return "ERROR NOT A KNOWN OPERATOR";
    }
}

//checks if the first number value is being entered
const checkNumVal = function(numVal){
    if(numVal && calcState.operatorVal === ""){
        return true;
    }
}
//checks if an operator is being entered after the first number is entered
const checkOperatorVal = function(operator){
    if(operator && calcState.numOneVal !="") {
        return true;
    }
}
//checks if the second number value is getting entered
const checkNumTwoVal = function(numTwo){
    if(numTwo && calcState.numOneVal !="" && calcState.operatorVal !=""){
        return true;
    }
}
const clear = function(){
    return calcState.numOneVal = "", calcState.operatorVal = "", calcState.numTwoVal = "";
}


clearBtn.addEventListener("click", ()=>{
    calcState.numOneVal = "", calcState.operatorVal = "", calcState.numTwoVal = "";
})

calcBtn.forEach((btn) =>{
    const numberVal = btn.classList.contains("btnNum");
    const operatorVal = btn.classList.contains("btnOper");

    btn.addEventListener("click", (e) =>{

        if(checkNumVal(numberVal)){
            if(e.target.dataset.value === "."){
                if(calcState.dot === true){return}
                calcState.dot = true;
            }
           console.log(calcState.numOneVal += e.target.dataset.value);
        }

        else if(checkOperatorVal(operatorVal)){
            if(calcState.operatorVal != ""){
                calcState.numOneVal = operate(calcState.numOneVal, calcState.operatorVal ,calcState.numTwoVal)
                calcState.numTwoVal = "";
            }
            calcState.dot = false;
            console.log(calcState.operatorVal = e.target.dataset.value);
        }

        else if(checkNumTwoVal(numberVal)){
            if(e.target.dataset.value === "."){
                if(calcState.dot === true){return}
                calcState.dot = true;
            }
            console.log(calcState.numTwoVal += e.target.dataset.value);
        }

    })
    
})

enterBtn.addEventListener("click", ()=>{
    operate(calcState.numOneVal, calcState.operatorVal, calcState.numTwoVal);
    clear();
})
