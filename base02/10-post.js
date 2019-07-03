const http = require("http")
const queryString = require("querystring")

var server = http.createServer(function(req, res) {
    if (req.url === "/dopost" && req.method.toLowerCase() === "post") {
        var allData = ""
        /**
         * 下面是post请求接收的一个公式
         * node为了追求极致，它是一个小段一个小段接收的
         * 接收了一小段，可能就给别人服务去了，防止一个过大的表单阻塞了整个进程
         */
        req.addListener("data", function(chunk) {
            allData += chunk
        })
        req.addListener("end", function() {
            var dataString = allData.toString()
            res.end("success")
            const dataObj = queryString.parse(dataString)
            console.log(dataObj)
            console.log(dataObj.name)
            console.log(dataObj.sex)
        })
    }
})
server.listen(8888)