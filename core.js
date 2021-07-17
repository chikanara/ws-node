
/************Core Module  ***************/

const fs = require("fs")
// console.log("start reading file ...")
// fs.readFile("./code1.txt","utf-8",(err,data) => {
//     if(err) return console.log(err)
//     console.log(data)
// })
// console.log("end of reading file ...")



console.log("start reading file ...")
const fileContent =fs.readFileSync("./code1.txt","utf-8")
console.log(fileContent)
console.log("end of reading file ...")
