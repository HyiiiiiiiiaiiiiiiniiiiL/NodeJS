const bar = require("./bar.js")
const msg = "hello"
const info = "hi"

function showInfo() {
    console.log(info)
}
exports.msg = msg
exports.info = info
exports.showInfo = showInfo