// pages/list/list.js


Page({

  /**
   * 页面的初始数据
   */
  data: {
  
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
   
    console.log("page uploaded.....啊啊..");

    wx.showLoading({
      title: '加载中',
      icon: 'loading'
    });

    const currentPage = this
      // 在list页面加载时调用api获取数据
      wx.request({
        url: "https://api.douban.com/v2/movie/in_theaters",
        data: {},
        header: {
          //"Content-Type": "application/json"
          "Content-Type": "application/texts"
        },
        success: function (res) {
          var data = res.data;
          console.log('请求成功了....');
          currentPage.setData({
            list: data.subjects
          });
          wx.hideLoading();
        }
      });

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