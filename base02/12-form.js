const http = require("http")
const formidable = require("formidable")
const util = require("util")
const fs = require("fs")
const sd = require("silly-datetime")
const path = require("path")

const server = http.createServer(function(req, res) {
    if (req.url === "/dopost" && req.method.toLowerCase() === "post") {
        var form = new formidable.IncomingForm()
        form.uploadDir = "./uploads"
        form.parse(req, function(err, fields, files) {
            const tt = sd.format(new Date(), "YYYYMMDDHHmmss")
            const ran = parseInt(Math.random * 89999 + 100000)
            const extname = path.extname(files.tupian.name)
            var oldpath = __dirname + "/" + files.tupian.path
            var newpath = __dirname + "/uploads/" + ttt + ran + extname
            fs.rename(oldpath, newpath, function(err) {
                if (err) {
                    throw Error("改名失败")
                }
                res.writeHead(200, { "Content-Type": "text/plain" })
                res.end("success")
            })

        })
    } else if (req.url === "/") {
        fs.readFile("./form.html", function(err, data) {
            res.writeHead(200, { "content-type": "text/html" })
            res.end(data)
        })
    } else {
        res.writeHead(404, { "content-type": "text/html" })
        res.end("page not find")
    }
})
server.listen(8888)