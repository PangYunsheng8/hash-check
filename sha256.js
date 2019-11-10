var hash = require('hash.js')

var str1 = 'aaaaa'
var str2 = 'aaaab'
var str3 = 'aaaaa'

var hashStr1 = hash.sha256().update(str1).digest('hex')
var hashStr2 = hash.sha256().update(str2).digest('hex')
var hashStr3 = hash.sha256().update(str3).digest('hex')

console.log(hashStr1)
console.log(hashStr2)
console.log(hashStr3)