const http = require("http")
const fs = require("fs")

const server = http.createServer(function(req, res) {
    if (req.url === "/fang") {
        fs.readFile("./test/xixi.html", function(err, data) {
            res.writeHead(200, { "Content-type": "text/html;charset=UTF-8" })
            res.end(data)
        })
    } else if (req.url === "/yuan") {
        fs.readFile("./test/haha.html", function(err, data) {
            res.writeHead(200, { "Content-type": "text/html;charset=UTF-8" })
            res.end(data)
        })
    } else if (req.url === "/0.jpg") {
        fs.readFile("./test/0.jpg", function(err, data) {
            res.writeHead(200, { "Content-type": "image/jpg" })
            res.end(data)
        })
    } else if (req.url === "/bbbbbb.css") {
        //通过路由给页面，而不是通过路径
        fs.readFile("./test/aaaaaa.css", function(err, data) {
            res.writeHead(200, { "Content-type": "text/css" })
            res.end(data)
        })
    } else {
        res.writeHead(404, { "Content-type": "text/html;charset=UTF-8" })
        res.end("去外太空遨游啊")
    }
})
server.listen(8888)