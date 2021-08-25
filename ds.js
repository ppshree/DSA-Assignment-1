// Q1. Write a program to find all pairs of an integer array whose sum is equal to a given number?
function findSumPairs(array,sum){
    var ansArr = []
    for(var i = 0; i < array.length-1; i++){
        for(var j = i+1; j < array.length; j++){
            if(array[i]+array[j] == sum){
                ansArr.push([array[i], array[j]]);
            }
        }
    }
    return ansArr;
}
var arr = [1,4,2,6,9,5,16,0,10,5,4] 
var sum = 10;
console.log(findSumPairs(arr,sum));

//Q2. Write a program to reverse an array in place? In place means you cannot create a new array. You have to update the original array.
function reverseArray(array){
    for(var i = 0; i < array.length/2; i++){
    var tempFirst = array[i];
    var tempLast = array[array.length-i-1];
    array[i] = tempLast;
    array[array.length-i-1] = tempFirst;
   }
}
var arr1 = [1,2,3,4,5,6,7,8,9,10];
var arr2 = [1,2,3,4,5,6,7,8,9,10,11];
reverseArray(arr1);
reverseArray(arr2);
console.log(arr1);
console.log(arr2);

//Q3. Write a program to check if two strings are a rotation of each other?
function isRotation(str1,str2){
    var result = true;
    var len = str1.length
    if(len !== str2.length){
        return false;
    }
    for(var i = 0; i < len; i++){
        if(str1[i].toUpperCase() !== str2[len-i-1].toUpperCase()){
            return false;
        }
    }
    return result;
}
var stringOne = "live";
var stringTwo = "evil"
console.log(isRotation(stringOne,stringTwo));

//Q4. Write a program to print the first non-repeated character from a string?
function findFirstNRC(string){
    for(var i = 0; i<string.length; i++){
        for(var j = 0; j<string.length; j++){
            if(string[i].toUpperCase() === string[j].toUpperCase() && i !== j ){
                break;
            }else if(j === string.length-1){
                return string[i]
            }
        }
    }
    return null
}
var str = "pineapple"
console.log(findFirstNRC(str))

//Q5. Read about the Tower of Hanoi algorithm. Write a program to implement it.
function transferStackFromTOneToTTwo(size,tOne,tTwo,tThree){
    if(size === 0){
        return;
    }
    transferStackFromTOneToTTwo(size-1,tOne,tThree,tTwo);
    console.log("Transfer ring",size,"from",tOne,"to",tTwo);
    transferStackFromTOneToTTwo(size-1,tThree,tTwo,tOne);
}
var size = 3;
var towerA = "A"
var towerB = "B"
var towerC = "C"
transferStackFromTOneToTTwo(size,towerA,towerB,towerC);

//Q6. Read about infix, prefix, and postfix expressions. Write a program to convert postfix to prefix expression.
function getPrefixFromPostfix(postfixExp){
    var prefixStack = new Stack();
    for(var i = 0; i < postfixExp.length; i++){
        if(postfixExp[i] === "+" || postfixExp[i] === "-" || postfixExp[i] === "*" || postfixExp[i] === "/"){
            var operandOne = prefixStack.pop();
            var operandTwo = prefixStack.pop();
            prefixStack.push(postfixExp[i]+operandTwo+operandOne)
        }else{
            prefixStack.push(postfixExp[i])
        }
    }
    return prefixStack.pop();
}
var postfixExpOne = "23+45+*";
var postfixExpTwo = "abc/-ad/e-*"
console.log(getPrefixFromPostfix(postfixExpOne));
console.log(getPrefixFromPostfix(postfixExpTwo));

//Q7. Write a program to convert prefix expression to infix expression.
function getInfixFromPrefix(prefixExp){
    prefixExp = prefixExp.split("").reverse();
    var infixStack = new Stack();
    for(var i = 0; i < prefixExp.length; i++){
        if(prefixExp[i] === "+" || prefixExp[i] === "-" || prefixExp[i] === "*" || prefixExp[i] === "/"){
            var operandOne = infixStack.pop();
            var operandTwo = infixStack.pop();
            infixStack.push(operandOne+prefixExp[i]+operandTwo)
        }else{
            infixStack.push(prefixExp[i])
        }
    }
    return infixStack.pop();
}
var prefixExpOne = "*+23+45";
var prefixExpTwo = "*-a/bc-/ade"
console.log(getInfixFromPrefix(prefixExpOne));
console.log(getInfixFromPrefix(prefixExpTwo));

//Q8. Write a program to check if all the brackets are closed in a given code snippet.
function getOpp(char){
    if(char === "{"){
        return "}"
    }
    if(char === "("){
        return ")"
    }
    if(char === "["){
        return "]"
    }
    return null
}
function isBrackesClosed(codeSnippet){
    var result = true;
    var tempArr = []
    
    for(var i = 0; i < codeSnippet.length; i++){
        if(codeSnippet[i] === "{" || codeSnippet[i] === "(" || codeSnippet[i] === "[" ){
            tempArr.push(codeSnippet[i]);
        }else if(codeSnippet[i] === "}" || codeSnippet[i] === ")" || codeSnippet[i] === "]" ){
            var char = getOpp(tempArr.pop())
            if(codeSnippet[i]  !== char){
                return false;
            }
        }
    }
    return result;
}
var codeSnippetOne = "function printTable(n){console.log(\"Table of\",n,\"is\":-); for(var i = 0; i<n; i++){console.log(n,\" * \",i+1,\" = \",n*i+1)}}"
var codeSnippetTwo = "function printTable(n){console.log(\"Table of\",n,\"is\":-); for(var i = 0; i<n; i++){console.log n,\" * \",i+1,\" = \",n*i+1)}}"

console.log(isBrackesClosed(bracketStringOne))
console.log(isBrackesClosed(bracketStringTwo))

//Q9. Write a program to reverse a stack.
function getReverseStack(stack){
    var tempStack = new Stack();
    while(stack.length()>0){
        tempStack.push(stack.pop());
    }
    return tempStack;
}
var mainStack = new Stack();
mainStack.push(1);
mainStack.push(2);
mainStack.push(3);
mainStack.push(4);
console.log(mainStack.showStack());
mainStack = getReverseStack(mainStack);
console.log(mainStack.showStack());

//Q10. Write a program to find the smallest number using a stack.
function getSmallestFromStack(stack){
   var tempStack = new Stack(stack.arr);
   var smallest = tempStack.pop();
   while(tempStack.length()){
       var top = tempStack.pop();
       if(top < smallest){
           smallest = top
       }
   }
   return smallest;
}
var newStack = new Stack([9,6,5,1,7,-1,2,3]);
console.log(newStack.showStack())
console.log("Smallest",getSmallestFromStack(newStack));
