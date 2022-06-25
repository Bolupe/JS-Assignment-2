// takes the operator from the user through prompt.
const operator = prompt('Enter operator to perform the calculation ( either +, -, * or / ): ');   
  
// accepts the number from the user through prompt box.  
const number1 = parseFloat(prompt ('Enter the first number: '));  
const number2 = parseFloat(prompt ('Enter the second number: '));  
  
// declares the variable.
let result;   
  
// conditional statements to define the calculator condition.  
if (operator == '+') { // uses + (addition) operator to add two numbers  
    result = number1 + number2;  
}  
else if (operator == '-') { // uses -  (subtraction) operator to subtract two numbers  
    result = number1 - number2;  
}  
else if (operator == '*') { // uses * (multiplication) operator to multiply two numbers  
    result = number1 * number2;  
}  
else {  
    result = number1 / number2; // uses / (division) operator to divide two numbers  
}  
  
// displays the result of the Calculation.  
window.alert(" Result is" + result);  
 