const http = require('http')
// const https = require('https')
const {
  readFileSync
} = require('fs')
const {
  createProxyServer
} = require('http-proxy')
// const credentials = {
//   key: readFileSync('PATH_TO_KEY', 'utf8'),
//   cert: readFileSync('PATH_TO_CERTS', 'utf8')
// }
const target = process.env.ELASTIC_URL
const proxy = createProxyServer({
  target
})

const httpServer = http.createServer(function(req, res) {
  proxy.web(req, res);
})
// const httpsServer = https.createServer(credentials,function(req, res) {
//   proxy.web(req, res);
// })

httpServer.listen(8080)
// httpsServer.listen(8443)

proxy.on('error', err => {
  console.log(err)
})

console.log('URL/_plugin/kibana')
