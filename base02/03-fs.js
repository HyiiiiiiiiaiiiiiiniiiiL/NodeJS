const http = require("http")
const fs = require("fs")
const url = require("url")
const path = require("path")

const server = http.createServer(function(res, req) {
    //如果这里不用req.url来判断路径，那么用户不管输入什么网址，做的事情都一样
    const pathName = url.parse(req.url).pathname
    //判断此时用户输入的地址是文件夹地址还是文件地址，如果是文件夹地址，则自动请求这个文件夹中的index.html
    if (pathName.indexOf(".") === -1) {
        pathName += "/index.html"
    }
    const fileURL = "./" + path.normalize("./static/" + pathName)
    const extname = path.extname(pathName)

    fs.readFile(fileURL, function(err, data) {
        if (err) {
            res.writeHead(404, { "Content-Type": "text/html;charset=UTF8" })
            res.end("没找到页面")
        }
        getMime(extname, function(mime) {
            res.writeHead(200, { "Content-Type": mime })
            res.end(data)
        })
    })
})
server.listen(8888)
function getMime(extname, callback) {
    fs.readFile("./mime.json", function(err, data) {
        if (err) {
            throw Error("找不到mime.json文件")
        }
        const mimeJSON = JSON.parse(data)
        const mime = mimeJSON[extname] || "text/plain"
        callback(mime)
    })
}