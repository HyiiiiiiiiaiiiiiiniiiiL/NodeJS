const ejs = require("ejs")

//模板
const string = "测试<%= a%>"
//数据
const data = {
    a: 6
}
//数据绑定
const html = ejs.render(string, data)
//输出
console.log(html)

