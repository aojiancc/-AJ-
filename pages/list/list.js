// pages/list/list.js


Page({

  /**
   * 页面的初始数据
   */
  data: {
  
  },
  keyinput:function(result){
      // console.log(result);
      var ivlaue = result.detail.value;
      console.log(ivlaue);

      //url :https://api.douban.com/v2/movie/in_theaters  /v2/movie/search?q={text}
      //https://api.douban.com/v2/movie/search?q=%E5%A5%87%E9%97%A8%E7%82%96%E9%B8%A1
    const currentPage = this;
      wx.request({
        url: 'https://api.douban.com/v2/movie/search?q=' + ivlaue,
        header: {
          //"Content-Type": "application/json"
          "Content-Type": "application/texts"
        },
        success: function (res) {
          //var data = res.data;
          console.log('请求成功了....');
          console.log(res);

          var data = res.data;
          console.log('请求成功了....');
          currentPage.setData({
            list: data.subjects
          });

        }
      });

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

    const currentPage = this;
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
  showDetail:function(event)
  {
      console.log("点击了电影啊啊");
      console.log(event);


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