const http = require("http");

const server = http.createServer((req, res) => {

    if(req.url === "/"){
        res.write("hello from server!");
    }
    else if (req.url === "/about"){
        res.write("Welcome to about route");
    }
    else{
        res.write("404 Route not found");
    }
    res.end();
});

server.listen(3000, () =>{
    console.log("server is running on port 3000")
});