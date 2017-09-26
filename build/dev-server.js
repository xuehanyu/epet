require('./check-versions')()

var config = require('../config')
if (!process.env.NODE_ENV) {
  process.env.NODE_ENV = JSON.parse(config.dev.env.NODE_ENV)
}

var opn = require('opn')
var path = require('path')
var express = require('express')
var webpack = require('webpack')
var proxyMiddleware = require('http-proxy-middleware')
var webpackConfig = require('./webpack.dev.conf')

// default port where dev server listens for incoming traffic
var port = process.env.PORT || config.dev.port
// automatically open browser, if not set will be false
var autoOpenBrowser = !!config.dev.autoOpenBrowser
// Define HTTP proxies to your custom API backend
// https://github.com/chimurai/http-proxy-middleware
var proxyTable = config.dev.proxyTable

var app = express()
var compiler = webpack(webpackConfig)

// 引入数据
var chinaData=require('../src/mock/china_area.json')

var epetData=require('../src/mock/epet.json')

// 配置路由器
var chinaRouter=express.Router()
// //注册路由，模拟mock接口
chinaRouter.get('/province',function (req,res) {
  const provinces=chinaData.provinces
  res.send(provinces)
})
chinaRouter.get('/cities',function (req,res) {
  const provinceId=req.query.provinceId
  const cityArr=chinaData.cities;
  const cities=[] ;
  cityArr.forEach ((city)=>{
    if(city.parent===provinceId || city.id===provinceId){
      cities.push(city)
    }
  })
  res.send(cities)
})
chinaRouter.get('/counties',function (req,res) {
  const cityId = req.query.cityId
  const countyArr=chinaData.counties
  const counties=[]
  countyArr.forEach( (county)=>{
    if(county.parent===cityId){
     counties.push(county)
    }
  })
  res.send(counties)
})

chinaRouter.get('/classes',function (req,res) {
  res.send({
    code:0,
    data:epetData.classes
  })
})

app.use('/api', chinaRouter)

var devMiddleware = require('webpack-dev-middleware')(compiler, {
  publicPath: webpackConfig.output.publicPath,
  quiet: true
})

var hotMiddleware = require('webpack-hot-middleware')(compiler, {
  log: false,
  heartbeat: 2000
})
// force page reload when html-webpack-plugin template changes
compiler.plugin('compilation', function (compilation) {
  compilation.plugin('html-webpack-plugin-after-emit', function (data, cb) {
    hotMiddleware.publish({ action: 'reload' })
    cb()
  })
})

// proxy api requests
Object.keys(proxyTable).forEach(function (context) {
  var options = proxyTable[context]
  if (typeof options === 'string') {
    options = { target: options }
  }
  app.use(proxyMiddleware(options.filter || context, options))
})

// handle fallback for HTML5 history API
app.use(require('connect-history-api-fallback')())

// serve webpack bundle output
app.use(devMiddleware)

// enable hot-reload and state-preserving
// compilation error display
app.use(hotMiddleware)

// serve pure static assets
var staticPath = path.posix.join(config.dev.assetsPublicPath, config.dev.assetsSubDirectory)
app.use(staticPath, express.static('./static'))

var uri = 'http://localhost:' + port

var _resolve
var readyPromise = new Promise(resolve => {
  _resolve = resolve
})

console.log('> Starting dev server...')
devMiddleware.waitUntilValid(() => {
  console.log('> Listening at ' + uri + '\n')
  // when env is testing, don't need open it
  if (autoOpenBrowser && process.env.NODE_ENV !== 'testing') {
    opn(uri)
  }
  _resolve()
})

var server = app.listen(port)

module.exports = {
  ready: readyPromise,
  close: () => {
    server.close()
  }
}
