//in js promise there are three state pending,fulfilled,rejected

let myPromise= new Promise(function(resolve,reject){
    console.log("hello")
    reject(new Error("errorrrrr"))
})
// console.log(myPromise)


let firstPromise= new Promise