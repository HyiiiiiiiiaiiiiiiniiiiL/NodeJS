const http = require("http")
const url = require("url")

const server = http.createServer(function(req, res) {
    //url.parse()可以将一个完整的URL地址，分为很多部分
    //host port  pathname path  query
    var pathname = url.parse(req.url).pathname
    //url.parse()如果第二个参数是true,那么就可以将所有的查询变为对象
    var query = url.parse(req.url, true).query
    var age = query.age
    console.log("pathname:", pathname)
    console.log("query:", query)
    console.log("age:", age)
    res.end()
})
server.listen(8888)