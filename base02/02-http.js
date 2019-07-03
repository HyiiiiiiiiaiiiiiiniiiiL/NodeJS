const http = require("http")

const server = http.createServer(function(req, res) {
    if (req.url === "/") {
        res.writeHead(200, { "Content-Type": "text/html;charset=UTF8" })
        res.end("成功")
    } else {
        res.writeHead(404, { "Content-Type": "text/html;charset=UTF8" })
        res.end("失败")
    }
})
server.listen(8887)