var config = require("./config").config;
const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
}

var reqGet = function(url,fn){
  wx.request({
    url: url,
    header: {
      'content-type': 'application/json'
    },
    success: function (res) {
      // console.log(res);
      fn(res);
    },
    fail:function(err){
      console.log(err);
    }
  })
}
var request = function (url, parm, fn) {
  wx.request({
    url: config.host + url,
    data: parm,
    header: {
      'content-type': 'application/json'
    },
    success: function (res) {
      // console.log(res);
      fn(res);
    },
    fail: function (err) {
      console.log(err);
    }
  })
}


module.exports = {
  formatTime: formatTime,
  reqGet: reqGet,
  request: request
}
