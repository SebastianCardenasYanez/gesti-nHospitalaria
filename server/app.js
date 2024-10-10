const driver = require("./db/db");

let obj = new driver();

obj.connectionFunction.then(res=>{
    console.log(res);
}).catch(error=>{
    let err = JSON.parse(error.message);
    console.log(err);
})