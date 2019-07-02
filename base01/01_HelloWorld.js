const http = require("http")
//require表示引包，引包就是引用自己的一个特殊功能
const server = http.createServer(function(req, res) {
    //创建服务器，参数是一个回调函数，表示如果有请求进来，要做什么
    //req表示请求；res表示响应
    //设置HTTP头部，状态码是200，文件类型是html,字符集是utf-8
    res.writeHead(200, { "Content-type": "text/html;charset=UTF-8" })
    res.end("测试" + (1 + 2 + 2))
})
//运行服务器，监听8888端口
server.listen(8888)