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
const btnOper = document.getElementsByClassName("btnOper");
const btnNum = document.getElementsByClassName("btnNum");

let calcState = {
    numOneVal: 0,
    operatorVal: "",
    numTwoVal: 0,
}

let operate = function(numOne, operator, numTwo){
    if(operator === "+"){
        return add(numOne, numTwo);
    }
    else if(operator === "-"){
        return subtract(numOne, numTwo);
    }
}
const rowContainer = document.querySelector(".rowContainer");
addEventListener("click", function(e){
    let target = e.target;
    if(target.matches('rowContainer')){
        let value = target.innerHTML

        document.querySelector('#output').value += value;
    }
})
