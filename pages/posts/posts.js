// pages/posts/posts.js
// 不支持绝对路径
let postData = require('../../data/post-data.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    images: [{
      img: '/images/posts/sls.jpg',
      postid: 2
    }, {
      img: '/images/posts/vr.png',
      postid: 4
    }, {
      img: '/images/posts/xiaolong.jpg',
      postid: 3
    }],
    postList: []
  },
  goDetail(event) {
    let id = event.currentTarget.dataset.postid;
    let readings = wx.getStorageSync('readings');
    if(Object.keys(readings).indexOf(id + '')>-1) {
      readings[id+'']++;
    }else {
      readings[id+''] = 1;
    }
    wx.setStorageSync('readings', readings)
    wx.navigateTo({
      url: `posts-detail/posts-detail?postid=${id}`
    })

  },
  onSwipeTap(event) {
    let id = event.target.dataset.postid;
    wx.navigateTo({
      url: 'posts-detail/posts-detail?postid=' + id,
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    console.log(options)
    let postList = postData.postList;
    this.getReadingNum(postList);
  },
  getReadingNum(postList) {
    // 读取每个列表项的阅读人数
    let readings = wx.getStorageSync('readings');
    if (readings) {
      postList.forEach((item) => {
        let isPostId = Object.keys(readings).indexOf(item.postId + '');
        if (isPostId > -1) {
          item.reading = Object.values(readings)[isPostId]
        } else {
          item.reading = 0
        }
      })
    } else {
      readings = {};
      wx.setStorageSync('readings', readings)
    }
    this.setData({
      postList
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {
    this.getReadingNum(this.data.postList)
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})