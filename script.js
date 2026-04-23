//all operator functions
const add = function(valueA , valueB){
    return valueA + valueB;
}
const subtract = function(valueA , valueB){
    return valueA - valueB;
}
const multiply = function(valueA, valueB){
    return valueA * valueB;
}
const divide = function(valueA, valueB){
    return valueA / valueB;
}
const exponent = function(valueA, valueB){
    return Math.pow(valueA, valueB);
}
const percentage = function(partialVal, totalVal){
    return partialVal * (totalVal / 100);
}
const logBase = function(valueA, valueB){
    return Math.log(valueB) / Math.log(valueA);
}
const squareRoot = function(value){
    return Math.sqrt(value);
}

const calcBtn = document.querySelectorAll(".calcBtn"); //gets all the buttons with said class, helps with classList
const enterBtn = document.querySelector("#enterBtn"); //gets the enter button
const clearBtn = document.querySelector("#btnClear"); //gets the clear button
const dotButton = document.querySelector("#btnDor");

const display = document.querySelector("#display")


let calcState = {
    numOneVal: "", //holds first number value
    operatorVal: "", //holds what operator is used
    numTwoVal: "", //holds second number operator
    dot: false,
    neg: false
}
let operDis = "";

const operate = function(numOne, operator, numTwo){
    //bases what to do when a certain operator is used
    switch(operator) {
        case "+":
            let addVal = add(Number(numOne), Number(numTwo)).toString();
            if(addVal.includes(".")){
                return display.textContent = checkDigits(addVal);
            }
            else {
                return display.textContent = addVal;
            }
        case "-":
            let subVal = subtract(Number(numOne), Number(numTwo)).toString();
            if(subVal.includes(".")){
                return display.textContent = checkDigits(subVal);
            }
            else {
                return display.textContent = subVal;
            }
        case "*":
            let multiVal = multiply(Number(numOne), Number(numTwo)).toString();
            if(multiVal.includes(".")){
                return display.textContent = checkDigits(multiVal);
            }
            else {
                return display.textContent = multiVal;
            }
        case "/":
            let divVal = divide(Number(numOne), Number(numTwo)).toString();
            if(divVal.includes(".")){
                return display.textContent = checkDigits(divVal);
            }
            else {
                return display.textContent = divVal;
            }
        case "^":
            let expoVal = exponent(Number(numOne), Number(numTwo)).toString();
            if(expoVal.includes(".")){
                return display.textContent = checkDigits(expoVal);
            }
            else {
                return display.textContent = expoVal;
            }
        case "%":
            let percentVal = percentage(Number(numOne), Number(numTwo)).toString();
            if(percentVal.includes(".")){
                return display.textContent = checkDigits(percentVal);
            }
            else {
                return display.textContent = percentVal;
            }
        case "log":
            let logVal = logBase(Number(numOne), Number(numTwo)).toString();
            if(logVal.includes(".")){
                return display.textContent = checkDigits(logVal);
            }
            else {
                return display.textContent = logVal;
            }   
        case "√":
            let sqrtVal = squareRoot(numTwo).toString();
            if(sqrtVal.includes(".")){
                return display.textContent = checkDigits(sqrtVal);
            }
            else {
                return display.textContent = sqrtVal;

            }
        case "^2":
            let squaredVal = exponent(numOne, 2).toString();
            if(squaredVal.includes(".")){
                return display.textContent = checkDigits(squaredVal);
            }
            else {
                return display.textContent = squaredVal;

            }                   
        default:
            return display.textContent = "ERROR!";
    }
}

//checks to see if we need to simplift digits (i.e 3.32131221 -> 3.321)
const checkDigits = function(value){
    let splitVal = value.split(".");
    console.table(splitVal)
    console.log(Number(splitVal[1]))
    if(splitVal[1].length > 3){
        splitVal[1] = splitVal[1].slice(0,3)
        console.log(splitVal[1])
        console.log(splitVal[0])
    }
    console.log(splitVal[0] + "." + splitVal[1])
    return splitVal[0] + "." + splitVal[1];

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
//clears the data in calcState
const clear = function(){
    return calcState.numOneVal = "", calcState.operatorVal = "", calcState.numTwoVal = "";
}

//resets everything when clicked
clearBtn.addEventListener("click", ()=>{
    calcState.numOneVal = "", calcState.operatorVal = "", calcState.numTwoVal = "";
    display.textContent = "";
    operDis = "";
    calcState.dot = false;
    calcState.neg = false;
})

calcBtn.forEach((btn) =>{
    const numberVal = btn.classList.contains("btnNum");
    const operatorVal = btn.classList.contains("btnOper");

    btn.addEventListener("click", (e) =>{
        if(e.target.dataset.value === "√"){
            calcState.numOneVal = 1;
            calcState.operatorVal = "√";
            calcState.numTwoVal += e.target.dataset.value;
        }
        //checks first number entered
        if(checkNumVal(numberVal)){
            if(e.target.dataset.value === "."){
                if(calcState.dot === true){return}
                calcState.dot = true;
            }
            if(e.target.dataset.value === "-"){
                if(calcState.neg === true){return}
                calcState.neg = true;
            }
           display.textContent = operDis += e.target.dataset.value;
           calcState.numOneVal += e.target.dataset.value;
        }
        //checks operator value
        else if(checkOperatorVal(operatorVal)){
            if(calcState.operatorVal != ""){
                calcState.numOneVal = operate(calcState.numOneVal, calcState.operatorVal ,calcState.numTwoVal)
                calcState.numTwoVal = "";
            }
            calcState.dot = false;
            calcState.neg = false;

            display.textContent = operDis += e.target.dataset.value;
            calcState.operatorVal = e.target.dataset.value;
        }
        //checks secondNumVal
        else if(checkNumTwoVal(numberVal)){
            if(calcState.operatorVal === "^2"){
                calcState.numTwoVal = 2;
            }
            if(e.target.dataset.value === "."){
                if(calcState.dot === true){return}
                calcState.dot = true;
            }
            if(e.target.dataset.value === "-"){
                if(calcState.neg === true){return}
                calcState.neg = true;
            }
            display.textContent = operDis += e.target.dataset.value;
            calcState.numTwoVal += e.target.dataset.value;
        }

    })
    
})

//the enter button and its function
enterBtn.addEventListener("click", ()=>{
    console.table(calcState);
    operate(calcState.numOneVal, calcState.operatorVal, calcState.numTwoVal);
    operDis = "";
})
