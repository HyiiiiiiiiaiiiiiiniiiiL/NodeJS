const http = require("http")
const formidable = require("formidable")
const util = require("util")

const server = http.createServer(function(req, res) {
    if (req.url === "/dopost" && req.method.toLowerCase === "post") {
        const form = new formidable.IncomingForm()
        form.uploadDir = "./uploads"
        //执行里面的回调函数的时候，表单已经全部接收完毕了
        form.parse(req, function(err, fields, files) {
            if (err) {
                throw err
            }
            console.log(fields)
            console.log(files)
            console.log(util.inspect({ fields: fields, files: files }))
            //所有的文本域，单选框，都在fields存放
            //所有的文件域，在files
            res.writeHead(200, { "Content-Type": "text/plain" })
            res.end("success")
        })
    }
})
server.listen(8888)