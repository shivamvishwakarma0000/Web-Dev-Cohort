function coupon(total,coup){
    //welcome10
    if(coup==="welcome10"){
        return total-(total*0.10)
    }
    else{
        return "wrong couple code"
    }
}
let result =coupon(500,"welcome10")
console.log(result)