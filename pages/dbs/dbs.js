// pages/dbs/dbs.js
const util = require('../../utils/util.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    icon: "/images/next.png",
    tableNames: []

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //加载  
    var that = this;
    this.getTableList();
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

  },

  getTableList: function () {
    var that = this;
    that.setData({
      loading: true,
      tip: "正在加载"
    })
    //获取表名
    var that = this;
    wx.request({
      url: util.basePath + '/database/getTableNames',
      data: {},
      dataType: 'json',
      header: {
        'content-type': 'application/json'
      },
      success(res) {
        if (res.statusCode == 200) {
          if (res.data != null) {
            console.log('接口返回数据加载数据');
            that.setData({
              // 分页追加数据
              'tableNames': that.data.tableNames.concat(res.data)
            });
          }

          // if (res.data.body.hasMore != true) {
          //   setTimeout(function () {
          //     that.setData({
          //       loading: false,
          //       tip: "没有数据了"
          //     })
          //   }, 1000);
          // }

        } else {
          $Toast({
            content: '请求错误',
            type: 'error'
          });
        }
      }
    })
  }
})