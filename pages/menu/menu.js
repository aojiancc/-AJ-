// pages/menu/menu.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    indicatorDots: true,  //显示面板指示点
    autoplay: true,     //自动切换
    interval: 4000,    //自动切换时间间隔
    duration: 1000,    //滑动动画时长
    current:0,
    imgUrls: [
      {
        image:'../images/fl01.png',
        url:"../index/index"
      },
      {
        image: '../images/fl02.png',
        url: "../index/index"
      },
      {
        image: '../images/fl03.png',
        url: "../list/list"
      },
    ],
    menus: [
      {
        "name": "购物车",
        "url": '../images/ic_nav_home_cart.png'
      },
      {
        "name": "分类",
        "url": '../images/a2.png'
      },
      {
        "name": "足迹",
        "url": '../images/a3.png'
      },
      {
        "name": "我的",
        "url": '../images/a5.png'
      },
      {
        "name": "修改",
        "url": '../images/c.png'
      },
      {
        "name": "预定",
        "url": '../images/qq8.png'
      },
      {
        "name": "资产",
        "url": '../images/qq5.png'
      },
      {
        "name": "商铺",
        "url": '../images/qq6.png'
      },
    ]
  },
  swipclick: function (e) {//点击图片触发事件

    console.log("点击了轮播图");
    console.log(e.currentTarget.dataset);
    var url = e.currentTarget.dataset.url;
    //var url = this.data.imgUrls[e.currentTarget.dataset.index];
    console.log(url);




    // wx.redirectTo({
    //   url: url,
    // })

    if (url =='../list/list')
    {
        wx.switchTab({
          url: url,
        });
    }
    else
    {
        wx.navigateTo({
          url: url,
        });
    }
   
  },
  clickButton:function(){
     wx.showModal({
       title: '提示',
       content: '点击',
     });

     //跳转到新页面，没有返回按钮
     /*wx.redirectTo({
       url: '../index/index',
     });*/

     wx.navigateTo({
       url: '../index/index',
     });

  },
  cmenu:function(event){
    wx.showModal({
      title: '提示',
      content: '这是一个模态弹窗',
      success: function (res) {
        if (res.confirm) {
          console.log('用户点击确定')
        }
      }
    })


      console.log("点击了菜单");
      console.log("id:" + event.currentTarget.id);
      console.log(event.currentTarget.dataset);
      
      console.log(event);
      
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
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