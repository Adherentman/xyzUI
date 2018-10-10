const tools = require('./packages');

console.log(tools)
let a = Object.keys(tools)
console.log(a)
a.forEach((item) => {
  console.log(item)
})