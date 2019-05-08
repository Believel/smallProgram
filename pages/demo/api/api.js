Page({
  data: {

  },
  onLoad: function (options) {

  },
  // 选择收货地址
  onBindChooseAddress() {
    wx.chooseAddress({
      success: function(res) {
        console.log(res);
        // console.log(res.userName);
        // console.log(res.postalCode);
        // console.log(res.telNumber)
      }
    })
  },
  // 用户设置界面
  onBindUserSet() {

  },
  // 检查登录状态
  onBindLogin() {

  },
  // 获得用户信息
  onBindUserInfo() {

  },
  // 开始录音
  onBindStartRecord() {

  },
  // 设置分享 
  onBindSetShare() {

  },
  // 取消分享
  onBindCancelShare() {

  }
})