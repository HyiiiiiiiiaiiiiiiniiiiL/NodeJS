const sd = require("silly-datetime")

const Time = sd.format(new Date(), "YYYYMMDDHHmm")
console.log("time", Time)