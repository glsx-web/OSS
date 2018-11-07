var express = require('express')
var app = express()

app.use(express.static('./dist'))

app.get('/', function(req, res) {
  res.send('Hello Vue')
})

app.listen(2333)

console.log('服务已运行:\r\n   localhost:2333')