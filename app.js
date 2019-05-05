App({
  onLaunch(options) {
    // 小程序启动之后 触发
    console.log(options)
  },
  globalData: {
    g_isPlayingMusic: false,
    g_isCurrentMusicPostid: null,
    doubanBase: 'http://t.yushu.im'
  }
})