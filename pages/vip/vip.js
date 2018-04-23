// pages/vip/vip.js
var until = require("../../utils/util.js");
var phonenum = '';
Page({

  /**
   * 页面的初始数据
   */
  data: {
    index:1,
    time:"获取手机验证码"
    
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    until.reqGet("https://m.yuncaibang.com/api/shop/member/is-login-wechat.do", function (res)     {
      console.log("登录：", res.data.member_id);
     
      that.setData({
        data: res
      })
    });
  },
  myColle:function(){
    wx:wx.navigateTo({
    url: '../mycollection/mycollection',
  })
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    phonenum = "";
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },
  myAdd:function(){
    wx:wx.navigateTo({
      url: '../address/address',
    })
  },
  myCou:function(){
    wx: wx.navigateTo({
      url: '../mycoupons/mycoupons',
    })
  },
  mySafe: function () {
    wx: wx.navigateTo({
      url: '../mysafe/mysafe',
    })
  },
  myEval:function(){
    wx: wx.navigateTo({
      url: '../myeval/myeval',
    })
  },
  myInfo: function () {
    wx: wx.navigateTo({
      url: '../myinfo/myinfo',
    })
  },
  logClick:function(e){
    var that = this;
    var _index = e.currentTarget.dataset.id;
    that.setData({
      index: _index
    });
  },
  // sendMessg:function(e){
  //   var that = this;
  //   console.log(e.detail.value)
  //   phonenum = e.detail.value
  //   that.setData({
  //     phonenum:phonenum
  //   })
   
  // },
  getMeg: function () {
    var that = this;
    console.log(555)
    until.reqGet("https://m.yuncaibang.com/api/shop/sms/send-sms-code.do?key=check&mobile=13667670120", function (res) {

      console.log(res)

     })
  },
  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})