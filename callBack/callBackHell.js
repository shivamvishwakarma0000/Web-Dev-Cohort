const cart=["phone","laptop","lablet"]
api.createOrder(cart,function(){
api.payment(function(){
    api.orderStatus(function(){
        api.showremainingBallance()
        })
    })
})
