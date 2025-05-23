//Q7. Create a function called operate that takes two numbers and a function. It should
//return the result of the function applied to the numbers.


const operate = (a, b, func) => func(a, b);

const add = (x, y) => x + y;
console.log(operate(2, 3, add)); 

// Output: 5
