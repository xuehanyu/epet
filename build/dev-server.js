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

var usersData=require('../src/mock/users.json')
// 配置路由器
var chinaRouter=express.Router()
var jsonfile = require('jsonfile')

// //注册路由，模拟mock接口
// 註冊 用戶註冊的路由
var md5 = require('blueimp-md5')
var moment = require('moment')
var Base64 = require('js-base64').Base64;
var request = require('request');
/*
 生成指定长度的随机数
 */
function randomCode(length) {
  var chars = ['0','1','2','3','4','5','6','7','8','9'];
  var result = ""; //统一改名: alt + shift + R
  for(var i = 0; i < length ; i ++) {
    var index = Math.ceil(Math.random()*9);
    result += chars[index];
  }
  console.log('验证码: ', result)
  return result;
}
// console.log(randomCode(6));
exports.randomCode = randomCode;

/*
 向指定号码发送指定验证码
 */
function sendCode(phone, code, callback) {
  var ACCOUNT_SID = '8aaf07085ea24877015ebf0966c60a36';
  var AUTH_TOKEN = '20457c2be2fb4fe695a5c3a06a1d68a3';
  var Rest_URL = 'https://app.cloopen.com:8883';
  var AppID = '8aaf07085ea24877015ebf0968910a3d';
  //1. 准备请求url
  /*
   1.使用MD5加密（账户Id + 账户授权令牌 + 时间戳）。其中账户Id和账户授权令牌根据url的验证级别对应主账户。
   时间戳是当前系统时间，格式"yyyyMMddHHmmss"。时间戳有效时间为24小时，如：20140416142030
   2.SigParameter参数需要大写，如不能写成sig=abcdefg而应该写成sig=ABCDEFG
   */
  var sigParameter = '';
  var time = moment().format('YYYYMMDDHHmmss');
  sigParameter = md5(ACCOUNT_SID+AUTH_TOKEN+time);
  var url = Rest_URL+'/2013-12-26/Accounts/'+ACCOUNT_SID+'/SMS/TemplateSMS?sig='+sigParameter;

  //2. 准备请求体
  var body = {
    to : phone,
    appId : AppID,
    templateId : '1',
    "datas":[code,"1"]
  }
  //body = JSON.stringify(body);

  //3. 准备请求头
  /*
   1.使用Base64编码（账户Id + 冒号 + 时间戳）其中账户Id根据url的验证级别对应主账户
   2.冒号为英文冒号
   3.时间戳是当前系统时间，格式"yyyyMMddHHmmss"，需与SigParameter中时间戳相同。
   */
  var authorization = ACCOUNT_SID + ':' + time;
  authorization = Base64.encode(authorization);
  var headers = {
    'Accept' :'application/json',
    'Content-Type' :'application/json;charset=utf-8',
    'Content-Length': JSON.stringify(body).length+'',
    'Authorization' : authorization
  }

  //4. 发送请求, 并得到返回的结果, 调用callback

  request({
    method : 'POST',
    url : url,
    headers : headers,
    body : body,
    json : true
  }, function (error, response, body) {
    console.log(error, response, body);
    callback(body.statusCode==='000000');
    //callback(true);
  });
}
exports.sendCode = sendCode;

const code = randomCode(6)
console.log(code)

chinaRouter.get('/getcode',function (req,res) {
  sendCode('18518517682', code, function (success) {
    console.log(success);
  })
})

//注册登录的路由
chinaRouter.get('/login',function (req,res) {
  var users=usersData
  var username=req.query.username
  var password=req.query.password
  var user=users.find(( item )=>{
    return item.username===username || item.tel===username
  })

  if (typeof user === 'undefined' || user.password!==password ){
    res.send({msg:"抱歉，登录失败~~~~"})
  }else if(user.password===password){
    res.send({msg:"恭喜您，登录成功~~~~"})
  }
})

//创建动态获取验证码登录的路由
chinaRouter.get('/islogin',function (req,res) {
  var tel=req.query.tel.trim()
  var usercode=req.query.code
  var users=usersData
  var user=users.find(( item )=>{
    return item.tel===tel
  })
  if (typeof user === 'undefined' || !tel){
    res.send({msg:"抱歉，登录失败~~~~"})
  }else if(code===usercode){
    res.send({msg:"恭喜您，登录成功~~~~"})
  }
})
chinaRouter.get('/register',function (req,res) {
  var  users=usersData
  var  username=req.query.username
  var  password=req.query.password
  var  passwordag=req.query.passwordag
  var  usercode=req.query.code
  console.log(usercode)
  var  tel=req.query.tel
  users.forEach((user)=>{
    if(user.tel===tel){
      res.send({errMsg:"用户名已存在"});

      return
    }
  })
  const regName=/^(\w){4,20}$/
  const regPassword=/^(\w){6,20}$/
  if(usercode!==code){
    res.send({errMsg:'验证码输入错误'})
  }else if(!regName.test(username)){
    res.send({errMsg:'用户名太短,只能是4-20位中英文、数字、下划线或组合哦'})
  }else if(!regPassword.test(password)){
    res.send({errMsg:'请输入8-20位数字或字母的密码'})
  }else if (password!==passwordag){
    res.send({errMsg:'两次输入的密码不符,请输入相同的密码'})
  }else {
    var user={
      username:username,
      password:password,
      tel:tel,
      id:new Date().getTime(),
      errMsg:'注册成功'
    }
    users.push(user)
    var file = '../epet_app/src/mock/users.json'
    jsonfile.writeFile(file, users, function (err) {
      console.error(err)
    })
    res.send(user)
  }
})







// 注冊獲取省級信息的路由
chinaRouter.get('/province',function (req,res) {
  const provinces=chinaData.provinces
  res.send(provinces)
})

// 註冊獲取市級信息的路由
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
// 註冊獲取區級信息的路由
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
