var until = require("../../utils/util.js");
Page({
  data:{
    indicatorDots:true,
    autoplay:true,
    interval:3000,
    circular:true,
    list:[]
  },
  seeDetail:function(event){
    var goodsId = event.currentTarget.dataset.id;
    console.log(goodsId)
    wx:wx.navigateTo({
      url: '../goodsdetail/goodsdetail?id='+goodsId,
    })
  },
  seetDetail:function(){
    wx: wx.navigateTo({
      url: '../goodsdiff/goodsdiff'+'',
    })
  },
  searchClick:function(){

  },
  searchGoods:function(){
    wx.navigateTo({
      url: '../search/search'
    })
  },
  onLoad: function (options) {
    var that = this;
 //6个商品
    until.reqGet("https://m.yuncaibang.com/api/shop/goods/list.do?tagid=1&&goodsnum=6", function (res) {
      console.log(res);
      for (var i = 0; i < res.data.length; i++) {
        var _thumbnail = res.data[i].thumbnail;
        _thumbnail = _thumbnail.replace("fs:", "http://shop.yuncaibang.com/statics");
        res.data[i].thumbnail = _thumbnail;
      }
      that.setData({
        data: res.data
      })
    });
    //
    // until.reqGet("https://m.yuncaibang.com/api/shop/goods/getGoodsById.do?goodsid=143", function (res) {
    //   console.log(res.data);
    //   that.setData({
    //     list: res
    //   })
    // });
  },

})