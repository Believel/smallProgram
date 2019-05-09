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
    // 调起客户端小程序设置界面
    wx.openSetting({
      success: (res) => {
        console.log(res);
      }
    })
    // 获得用户的当前设置
    // wx.getSetting({
    //   success: function(res) {
    //     // 用户授权的结果
    //     console.log(res.authSetting)
    //     console.log(res.authSetting['scope.userInfo'])
    //     if (res.authSetting['scope.userInfo']) {
    //       // 获取用户信息(明文信息)
    //       wx.getUserInfo({
    //         // withCredential为true，必须要求用户登录
    //         withCredentials: true,
    //         success(res) {
    //           console.log(res)
    //         }
    //       })
    //     }
    //   }
    // })
  },
  // 检查登录状态
  onBindLogin() {
    // 不需要授权，静默登录
    // 登录状态有时效性
    // 多久失效由服务器决定
    // wx.login({
    //   success: function(res) {
    //     // console.log(res);
    //     // 用户登录的凭证（有效期五分钟）
    //     console.log(res.code)
    //     if(res.code) {

    //     } else {
    //       console.log('登录失败！'+ res.errMsg)
    //     }
    //   }
    // })
    // 可查看是否失效 
    wx.checkSession({
      success: function() {
        console.log('登录未过期')
      },
      fail: function() {
        // 重新登录
        wx.login({
          success: function (res) {
            // console.log(res);
            // 用户登录的凭证（有效期五分钟）
            console.log(res.code)
            if (res.code) {

            } else {
              console.log('登录失败！' + res.errMsg)
            }
          }
        })
      
      }
    })
  },
  // 获得用户信息
  onBindUserInfo() {
    wx.login({
      success() {
        wx.getUserInfo({
          withCredentials: true,
          success(res) {
            console.log(res)
          }
        })
      }
    })
  },
  onGotUserInfo(e) {
    console.log(e.detail.errMsg)
    console.log(e.detail.userInfo)
    console.log(e.detail.rawData)

  },
  // 开始录音
  onBindStartRecord() {

  },
  // 设置分享 
  onBindSetShare() {
    wx.showShareMenu({
      withShareTicket: true,
      success: (res) => {
        console.log(res);
      }
    })
  },
  // 取消分享
  onBindCancelShare() {
    // 隐藏转发按钮
    wx.hideShareMenu()
  },
  onShareAppMessage: function(res) {
    if(res.from === 'button') {
      // 来自页面内转发按钮
      console.log(res.target)
    }
    return {
      title: '自定义转发标题',
      path: '/pages/demo/form'
    }
  }
})