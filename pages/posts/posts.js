// pages/posts/posts.js
// 不支持绝对路径
let postData = require('../../data/post-data.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    images: ['/images/posts/sls.jpg','/images/posts/vr.png','/images/posts/xiaolong.jpg'],
    postList: []
  },
  goDetail(event) {
    let id = event.currentTarget.dataset.postid;
    wx.navigateTo({
      url: `posts-detail/posts-detail?postid=${id}`
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options)
    this.setData({
      postList: postData.postList
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