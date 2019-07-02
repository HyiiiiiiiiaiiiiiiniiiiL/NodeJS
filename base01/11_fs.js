const http = require("http")
const fs = require("fs")

const server = http.createServer(function(req, res) {
    if (req.url === "/favicon.ico") {
        return
    }
    //存储所有的文件夹
    var wenjianjia = []
    fs.readdir("./album", function(err, files) {
        //files是个文件名的数组，并不是文件的数组，表示./album这个文件夹中的所有东西
        //包括文件、文件夹
        for (var i = 0; i < files.length; i++) {
            var theFileName = files[i]
            fs.stat("./album" + theFileName, function(err, stats) {
                if (stats && stats.isDirectory()) {
                    wenjianjia.push(theFileName)
                }
                console.log(wenjianjia)
            })
        }

    })
})
server.listen(8888)