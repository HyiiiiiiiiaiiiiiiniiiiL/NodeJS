const http = require("http")
const router = require("./router.js")
const server = http.createServer(function(req, res) {
    if (req.url === "/") {
        router.showIndex(req, res)
    } else if (req.url.substr(0, 9) === "/student/") {
        router.showStudent(req, res)
    } else {
        router.show404(req, res)
    }
})
server.listen(8888)