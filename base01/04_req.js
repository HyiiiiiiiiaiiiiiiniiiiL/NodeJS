const http = require("http")
const server = http.createServer(function(req, res) {
    console.log(req.url)
    //是在vscode控制台打印url
    res.end()
})
server.listen(8888)