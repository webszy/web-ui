const path = require('path')
const fse = require('fs-extra')
const fs = require('fs')
const components = name => path.resolve(__dirname, './src', './components','./'+name,'./index.js')
// fse.ensureFileSync(components('form'))
const result = fs.readFileSync(components('form'))
console.log(result)
