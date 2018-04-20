// pages/goodsdetail/goodsdetail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    indicatorDots: true,
    autoplay: true,
    interval: 3000,
    circular: true,
    sptype: 1,
    index:0,
    arr: [{
      name:"红",
      index:0
      }, {
      name: "黑",
      index:1
      }, {
        name: "灰",
        index:2
      }]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  tapfn: function (e) {
    var that = this;
    var _sptype = e.currentTarget.dataset.tp;
    that.setData({
      sptype: _sptype
    });
    console.log(that.data.sptype);
  },
  seeDetail: function () {
    wx.navigateTo({
      url: '../comments/comments',
    })
  },
  buyGoods:function(){
    console.log(3333333)
    wx.switchTab({
      url: '../but_goumai/but_goumai',
    })
  },
  colorSel:function(e){
    var that = this;
    var _index = e.currentTarget.dataset.index;
    console.log('索引：', _index)
    for(var i =0; i<that.data.arr.length;i++){
      console.log(that.data.arr[i].index)
      if (_index == that.data.arr[i].index) {
        // var index=_index
      }
    }
    that.setData({
      index:_index
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