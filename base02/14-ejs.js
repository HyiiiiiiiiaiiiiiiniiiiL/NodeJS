const ejs = require("ejs")
const fs = require("fs")
const http = require("http")

const server = http.createServer(function(req, res) {
    fs.readFile("./views/index.ejs", function(err, data) {
        const template = data.toString()
        const dictionary = {
            a: 6,
            news: [
                { "title": "今天晴天", "count": 10 },
                { "title": "今天晴天11", "count": 10 },
                { "title": "今天晴天22", "count": 10 }
            ]
        }
        const html = ejs.render(template, dictionary)
        res.writeHead(200, { "Content-Type": "text/html;charset=UTF8" })
        res.end(html)
    })
})
server.listen(8888)