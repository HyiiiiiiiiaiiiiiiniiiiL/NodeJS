const http = require("http")

const server = http.createServer(function(req, res) {
    const userUrl = req.url
    res.writeHead(200, { "Content-Type": "text/html;charset=UTF8" })
    //判断url是什么开头的
    if (userUrl.substr(0, 9) === "/student/") {
        const studentId = userUrl.substr(9)
        console.log("studentId")
        if (/^\d{10}$/.test(studentId)) {
            res.end("您要查询学生信息，id为" + studentId);
        } else {
            res.end("学生学号位数不对");
        }
    } else if (userUrl.substr(0, 9) == "/teacher/") {
        var teacherId = userUrl.substr(9);
        if (/^\d{6}$/.test(teacherId)) {
            res.end("您要查询老师信息，id为" + teacherId);
        } else {
            res.end("老师学号位数不对");
        }
    } else {
        res.end("请检查url");
    }
})
server.listen(8888)