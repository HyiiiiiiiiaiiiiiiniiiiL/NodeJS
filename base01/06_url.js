const http = require("http")
const url = require("url")
const server = http.create(function(req, res) {
    const queryObj = url.parse(req.url, true).query
    const name = queryObj.name
    const age = queryObj.age
    const sex = queryObj.sex
    res.end("服务器收到了表单请求", name + age + sex)
})
server.listen(8888)