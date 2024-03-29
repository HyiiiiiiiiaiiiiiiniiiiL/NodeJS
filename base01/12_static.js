const http = require("http")
const url = require("url")
const fs = require("fs")
const path = require("path")

//使用nodejs配置静态服务器
http.createServer(function(req, res) {
    //得到用户的路径
    if (pathname === "/") {
        pathname = "index.html"
    }
    //获得文件后缀
    var extname = path.extname(pathname)
    //真的读取这个文件
    fs.readFile("./static/" + pathname, function(err, data) {
        if (err) {
            //如果此文件不存在，就应该用404返回
            fs.readFile("./static/404.html", function(err, data) {
                res.writeHead(404, { "Content-type": "text/html;charset=UTF8" });
                res.end(data);
            });
            return;
        };
        //MIME类型，就是
        //网页文件：  text/html
        //jpg文件 :   image/jpg
        var mime = getMime(extname);
        res.writeHead(200, { "Content-type": mime });
        res.end(data);
    });
}).listen(8888)
function getMime(extname) {
    switch (extname) {
        case ".html":
            return "text/html";
            break;
        case ".jpg":
            return "image/jpg";
            break;
        case ".css":
            return "text/css";
            break;
    }
}