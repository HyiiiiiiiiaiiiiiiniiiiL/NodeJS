/**
 * http模块
 */
const http = require("http")
const server = http.createServer(function(req, res) {
    console.log("服务器收到了请求" + req.url)
    //设置头部
    res.writeHead(200, { "Content-Type": "text/html;charset=UTF-8" })
    res.write("<h1>我是主标题</h1>")
    res.write("<h2>我是2标题</h2>");
    res.write("<h2>我是2标题</h2>");
    res.write("<h2>我是2标题</h2>");
    res.write("<h3>我是3标题</h3>");
    res.end((1 + 2 + 3).toString())
})
server.listen(8888)