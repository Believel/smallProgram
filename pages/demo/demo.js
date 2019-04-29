// pages/demo/demo.js

var appInstance = getApp()
console.log(appInstance.globalData)
Page({

  /**
   * 页面的初始数据
   */
  data: {
    objectArray: [{
      id: 5,
      unique: 'unique_5'
    },
    {
      id: 4,
      unique: 'unique_4'
    },
    {
      id: 3,
      unique: 'unique_3'
    },
    {
      id: 2,
      unique: 'unique_2'
    },
    {
      id: 1,
      unique: 'unique_1'
    },
    {
      id: 0,
      unique: 'unique_0'
    },
    
    ],
    numberArray: [1, 2, 3, 4],
    item: {
      index: 1,
      msg: 'this is a message'
    },
    isshow: false,
    loading: false
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // 获得全局实例对象
    // console.log(getApp())
    
      // 如果希望用户在最新版本的客户端上体验您的小程序，可以这样子提示
      wx.showModal({
        title: '提示',
        content: '当前微信版本过低，无法使用该功能，请升级到最新微信版本后重试。',
        confirmText: '主操作',
        cancelText: '次要操作',
        success(res) {
          if(res.confirm) {
            console.log('用户点击主操作')
          } else if (res.cancel) {
            console.log('用户点击次要操作')
          }
        }
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
    this.setData({
      isshow: true
    });
    // 可以停止当前页面的下拉刷新
    wx.stopPullDownRefresh();
   },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
     // 当界面的下方距离页面底部距离小于100像素时触发回调
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
  switch: function () {
    let length = this.data.objectArray.length;
    for (let i = 0; i < length; i++) {
      const x = Math.floor(Math.random() * length)
      const y = Math.floor(Math.random() * length)
      const temp = this.data.objectArray[x]
      this.data.objectArray[x] = this.data.objectArray[y]
      this.data.objectArray[y] = temp
    }
    this.setData({
      objectArray: this.data.objectArray
    })
  },
  addToFront: function () {
    let length = this.data.objectArray.length;
    this.data.objectArray = [{ id: length, unique: 'unique_' + length }].concat(this.data.objectArray);
    this.setData({
      objectArray: this.data.objectArray
    })
  },
  addNumberToFront() {
    this.data.numberArray = [this.data.numberArray.length+1].concat(this.data.numberArray);
    this.setData({
      numberArray: this.data.numberArray
    })
  },
  goPage(event) {
    wx.navigateTo({
      url: '/pages/posts/posts?id=1&other=abc',
    })
    console.log(event)
  },
  handleTap: function(evt) {
    // 当点击inner节点时
    // evt.target 是inner view组件
    console.log(evt)
  },
  tap() {
    this.setData({
      loading: true
    })
    wx.showToast({
      title: '已发送',
      icon: 'success',
      duration: 1500
    })
  }
})