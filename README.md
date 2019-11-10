# hash-check
利用javascript的hash.js包轻松获取任意文件的sha256校验码

- 安装hash.js
npm/cnpm install hash.js
- import hash.js
var hash = require('hash.js')
- 获取sha256校验码
var sha256OfSomeString = hash.sha256().update(some_string_variable_to_hash).digest('hex')