App({
  onLaunch(options) {
    // 小程序启动之后 触发
    console.log(options)
    // 获得场景值
    console.log(options.scene)
  },
  globalData: {
    g_isPlayingMusic: false,
    g_isCurrentMusicPostid: null,
    doubanBase: 'http://t.yushu.im'
  }
})