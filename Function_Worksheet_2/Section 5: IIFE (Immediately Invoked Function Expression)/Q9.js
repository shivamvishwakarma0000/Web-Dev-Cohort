//Q9. Write an IIFE that takes a number and logs its factorial.

(function(n) {
    const factorial = (num) => {
        if (num === 0 || num === 1) return 1;
        return num * factorial(num - 1);
    };
    console.log(`Factorial of ${n} is ${factorial(n)}`);
})(5); 

// output: Factorial of 5 is 120