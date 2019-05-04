Page({
  onbindContainer:function() {
    // 顶部含有返回按钮，执行onHide方法
    // wx.navigateTo({
    //   url: '../posts/posts',
    //   success: function() {
    //     console.log('success')
    //   },
    //   fail: function() {
    //     console.log('fail')
    //   },
    //   complete: function() {
    //     console.log('complete')
    //   }
    // })
    // 顶部没有返回按钮,执行onUnload方法
    // wx.redirectTo({
    //   url: '../posts/posts',
    // })
    wx.switchTab({
      url: '../posts/posts',
    })
  },
  onUnload: function() {
    console.log('onunload')
  },
  onHide: function() {
    console.log('onHide')
  }
})