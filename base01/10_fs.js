const http = require("http")
const fs = require("fs")
const server = http.createServer(function(req, res) {
    if (req.url === "/favicon.ico") {
        return
    }
    //检测状态
    fs.stat("./album/bbb", function(err, data) {
        //检测这个路径，是不是一个文件夹
        data && data.isDirectory() ? console.log("这是一个文件夹") : console.log("这不是一个文件夹")

    })
})
server.listen(8888)