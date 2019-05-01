// pages/posts/posts-detail/posts-detail.js
let postData = require('../../../data/post-data.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    postDetail: {},
    collection: false,
    postid: ''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // 拿到页面地址参数值
    // console.log(options.postid)
    let id = options.postid;
    this.data.postDetail = postData.postList[id];
    this.setData({ 
      postDetail: this.data.postDetail, 
      postid: id
    })
    // 判断是否已经收藏
    let collections = wx.getStorageSync('collections');
    if(collections) {
      this.setData({
        collection: collections[id] ? true : false
      })
    } else {
      collections = {};
      collections[id] = false;
      wx.setStorageSync('collections', collections)
    }
  },
  onCollectionTap(event) {
    try {
      let collections = wx.getStorageSync('collections');
      let collection = collections[this.data.postid];
      // 收藏变未收藏，未收藏变收藏
      collection = !collection;
      collections[this.data.postid] = collection;
      this.onShowToast(collections, collection)
      // this.onShowModal(collections, collection)
    }catch(e) {}
  },
  onShowToast(collections, collection) {
    wx.setStorageSync('collections', collections)
    this.setData({
      collection: collection
    })
    wx.showToast({
      title: collection ? '收藏成功' : '取消成功',
      icon: 'success',
      duration: 1500
    })
  },
  onShowModal(collections, collection) {
    let _this = this;
    wx.showModal({
      title: '收藏提示',
      content: collection ? '是否确定收藏？' : '是否取消收藏？',
      success(res) {
        if (res.confirm) {
          wx.setStorageSync('collections', collections)
          _this.setData({
            collection: collection
          })
        }
      }
    })
  },
  onShareTap(event) {
    let itemList = [
      '分享给微信好友',
      '分享到朋友圈',
      '分享到QQ',
      '分享到微博'
    ]
    wx.showActionSheet({
      itemList: itemList,
      itemColor: '#405f80',
      success(res) {
        // res.tapIndex
        wx.showModal({
          title: '用户'+ itemList[res.tapIndex],
          content: '用户是否取消,现在无法实现分享，什么时候能支持呢',
        })
      }
    })
  },
  onMusicTap(event) {

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