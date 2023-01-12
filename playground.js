/* Callbacks are a function passed as an argument to another
function. Used for asynchronus programming. */

let one = (two_call) => {
    two_call()
    console.log("Function One")
}

let two = () => {
    console.log("Function Two")
}

// Take another Example

let stocks = {
    Fruits: ["strawberry", "grapes", "banana", "apple"],
    liquid: ["water", "ice"],
    holder: ["cone", "cup", "stick"],
    toppings: ["chocolate", "peanuts"],
};

let order = (Fruit_name, call_production) => {
    setTimeout(() => {
        console.log(`${stocks.Fruits[Fruit_name]} was selected`)
        call_production()

    }, 2000)

}

let production = () => {
    setTimeout(() => {
        console.log(`Proudction has Started`);

        setTimeout(() => {
            console.log(`the fruit has been chopped`)
            setTimeout(() => {
                console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} was added`)
                setTimeout(() => {
                    console.log(`the machine was started`)
                    setTimeout(()=>{
                        console.log(`${stocks.holder[0]} was selected `)

                        setTimeout(()=>{
                            console.log(`${stocks.toppings[0]} was added as toppings `)

                            setTimeout(()=>{
                                    console.log(` serve the ice cream `)
                            },2000 )

                        },3000)

                    },2000)
                }, 1000)
            }, 1000)

        }, 2000)


    })
}


/* Using Proimise */

let is_shop_open=false

// let order_=(time,work)=>{
    
//     return new Promise((resolve,reject)=>{

//         if(is_shop_open){
//             setTimeout(()=>{
//                 resolve(work());

//             },time)
         
//         }
//         else{
//             reject(console.log("our shop is closed"))
//         }

//     })
// }

// order_(2000,()=>console.log(`${stocks.Fruits[0]} was selected`))

// .then(()=>{
//     return order_(0,()=>console.log(`Production has started `))
// })

// .then(()=>{
//     return order_(2000,()=>console.log("the fruit was chopped"))
// })

// .then(()=>{
//     return order_(1000,()=>console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} was selected `))
// })

// .then(()=>{
//     return order_(1000,()=>console.log(`start the machine`))
// })

// .then(()=>{
//     return order_(2000,console.log(` ice cream placed on ${stocks.holder[0]}`))
// })

// .then(()=>{
//     return order_(3000,()=>console.log(`${stocks.toppings[0]} was selected`))
// })

// .then(()=>{
//     return order_(2000,()=>console.log(`ice cream was served`))
// })

// .catch(()=>{
//     console.log("Customer left")
// })

// .finally(()=>{console.log("day ended,shop is closed")})

 const order2=async()=>{
    try{
        await abc

    }catch(err){
        console.log("abc does not exit")
    }
    finally{
        console.log("runs code anyways")
    }
}
order2().then(()=>{console.log("ohhh")})

// async execute without waiting while wait keyword wait for response so 
// async function will execute and await for result while rest of code will be 
// execute parallel because of multi-threading