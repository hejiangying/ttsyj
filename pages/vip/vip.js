// pages/vip/vip.js
var until = require("../../utils/util.js");
Page({
  /**
   * 页面的初始数据
   */
  data: {
    // index: 1,
    sendmsg: "",
    getmsg: "获取短信验证码",
    phonefocus: false,
    phonenum: '',
    validcode: ''
  },
  onLoad: function (options) {
    var that = this;
    until.reqGet("https://m.yuncaibang.com/api/shop/member/is-login-wechat.do", function (res) {
      console.log("登录：", res.data.member_id);
      that.setData({
        data: res
      })
    });
  },
  sendmessg: function (e) {
    var that = this;
    if (that.data.phonenum == "") {
      wx.showModal({
        title: '温馨提示', content: "请输入手机号", showCancel: false, success: function (res) {
          if (res.confirm) {
            that.setData({ phonefocus: true });
          }
        }
      });
      return false;
      if (!(/^1[3|4|5|8][0-9]\d{4,8}$/.test(that.data.phonenum))) {
        wx.showModal({ title: '温馨提示', content: "请输入正确的手机号", showCancel: false });
        return false;
      }
      var time = 60;
      var inter = setInterval(function () {
        that.setData({ sendmsg: "sendmsgafter", getmsg: time + "s后重新发送" });
        time--;
        if (time < 0) {
          clearInterval(inter);
          that.setData({ sendmsg: "", getmsg: "获取短信验证码", });
        }
      }, 1000);
    }
  },
  getMeg: function () {
    var that = this;
    console.log(that.data.phonenum)
    until.reqGet("https://m.yuncaibang.com/api/shop/sms/send-sms-code.do?key=check&mobile=" + that.data.phonenum, function (res) {
      console.log(res)
    })
  },
  //获取用户输入的用户名
  phoneInput: function (e) {
    this.setData({
      phonenum: e.detail.value
    })
  },
  validCodeInput: function (e) {
    this.setData({
      validcode: e.detail.value
    })
  },
  login: function () {
    var that = this;
    console.log(that.data.phonenum);
    console.log(that.data.validcode);
    var parm = {
      mobile: that.data.phonenum,
      validcode: that.data.validcode
    }
    until.request("/b2c/api/shop/member/sms-login.do", parm, function (res) {
      console.log(res);
    });
  },
  // logClick: function (e) {
  //   var that = this;
  //   var _index = e.currentTarget.dataset.id;
  //   that.setData({
  //     index: _index
  //   });
  // },
  // sendMessg: function (e) {
  //   var that = this;
  //   phonenum = e.detail.value;

  // }
})