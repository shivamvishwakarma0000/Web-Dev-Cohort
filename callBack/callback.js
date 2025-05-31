// function greet(name, callback){
//     console.log("hello " + name);
//     callback();

// }

// function goodbaye(){
//     console.log("bye...")


// }
// greet("shivam",goodbaye)



function calculate (a,b,callback){
    return callback(a,b);

}
function add(a,b){
    return a+b;
}
function sub(a,b){
    return a-b;
}
console.log(calculate(2,3,sub))