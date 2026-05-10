const os = require('os');

if(os.platform() === 'win32'){
    console.log("Hello windows user");
}
else if(os.platform() === 'darwim'){
    console.log("Hello mac user");
}
else{
    console.log ("Hello user");
}

console.log(os.totalmem()); //total memory of the system
console.log(os.freemem()); //free memory of the system