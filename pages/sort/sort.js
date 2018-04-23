// pages/sort/sort.js
var until = require("../../utils/util.js");
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list:'',
    listname:''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    until.reqGet("https://m.yuncaibang.com/api/shop/goods/getGoodsCatList.do?catId=0", function (res) {
      console.log("res:",res)
      that.setData({
        list:res.data,
        listname:res.data[0].children
      })
      console.log(that.data.listname)
    })

  },
  getItem:function(){
   
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