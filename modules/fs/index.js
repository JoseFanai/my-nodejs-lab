const fs = require('fs');

const data = fs.readdirSync("./");

fs.readdir("./", (err, data) =>{
    if(err){
        console.log(err);
    }
    else{
        console.log(data);
    }
})

// console.log(data);