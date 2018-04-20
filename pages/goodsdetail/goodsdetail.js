var until = require("../../utils/util.js");
var WxParse = require("../../wxParse/wxParse.js");
Page({

  /**
   * 页面的初始数据
   */
  data: {
    indicatorDots: true,
    autoplay: true,
    interval: 3000,
    circular: true,
    sptype:1
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    until.reqGet("https://m.yuncaibang.com/api/shop/goods/getGoodsById.do?goodsid=143", function (res) {
      console.log(res);
      var article = res.data.intro;
      WxParse.wxParse('article', 'html', article, that, 5)
      that.setData({
        list: res.data
      })
    });
   
  
  },
  tapfn:function(e){
    var that = this;
    var _sptype = e.currentTarget.dataset.tp;
    that.setData({
      sptype: _sptype
    });
    console.log(that.data.sptype);
  },
  buyGoods: function () {
    wx.switchTab({
      url: '../but_goumai/but_goumai',
    })
  },
  seeDetail:function(){
  wx.navigateTo({
    url: '../comments/comments',
  })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
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