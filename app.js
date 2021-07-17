const http = require("http")

const server = http.createServer((req,res) => {
   
    console.log(req.url)
    console.log(req.method)
    switch (req.url) {
        case "/":
            res.end("<h1>Welcome to home page</h1>")
            break;
            case "/products":
                res.end("<h1>Welcome to Products page</h1>")
            break;
    
        default:
            res.end("OUPS Somthing wrong")
            break;
    }
})

server.listen(5000,() => console.log("server is running on port ",5000))