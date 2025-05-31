// let and const are not accesible outside the block 
// but var are accesible outside the block 


// {
//     var name="shivam"
// }
// console.log(name)


let a=4;
function fun(){
    let a=5;
    console.log(a)
}
fun()