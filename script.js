// задача1
function cubeSum(num) {
  const result = Math.pow(num, 3) + Math.pow(3, 3);
  console.log(result);
}
cubeSum(2);


// задача2

// function calculate(inputValue) {
//   if (isNaN(inputValue)) {
//     console.log("Значение задано неверно");
//   } else {
//     const salary = parseFloat(inputValue);
//     const Tax = salary * 0.87;
//     console.log(`Размер заработной платы за вычетом налогов равен ${Tax}`);
//   }
// }
// const userInput = prompt("Введите вашу зарплату:");
// calculate(userInput);

// задача3

// function MaxNumber(num1, num2, num3) {
//   return Math.max(num1, num2, num3);
// }
// const userInput1 = parseFloat(prompt("Введите первое число:"));
// const userInput2 = parseFloat(prompt("Введите второе число:"));
// const userInput3 = parseFloat(prompt("Введите третье число:"));

// const maxNumber = MaxNumber(userInput1, userInput2, userInput3);
// console.log(`Максимальное значение: ${maxNumber}`);

// задача4

// function sum(a, b) {
//   return a + b;
// }

// function difference(a, b) {
//   return a !== b ? Math.max(a, b) - Math.min(a, b) : 0;
// }

// function multiply(a, b) {
//   return a * b;
// }

// function divide(a, b) {
//   return a / b;
// }
// console.log(sum(2, 6));        
// console.log(difference(8, 3));  
// console.log(multiply(4, 5));    
// console.log(divide(10, 2));