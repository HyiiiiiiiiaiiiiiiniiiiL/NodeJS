const http = require("http")
const fs = require("fs")

const server = http.createServer(function(req, res) {
    if (req.url === "/favicon.ico") {
        return;
    }
    //创建文件夹
    fs.mkdir("./album/bbbb")
})
server.listen(8888)
