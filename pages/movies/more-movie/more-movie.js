// pages/movies/more-movie/more-movie.js
let util = require('../../../utils/util.js')
let app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    movies: [],
    navigateTitle: '',
    requestUrl: '',
    totalCount: 0,
    isEmpty: true
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let category = options.category;
    this.data.navigateTitle = category;
    let dataUrl = '';
    switch (category) {
      case '正在热映': 
        dataUrl = app.globalData.doubanBase + "/v2/movie/in_theaters";
      break;
      case '即将上映':
        dataUrl = app.globalData.doubanBase + "/v2/movie/coming_soon";
      break;
      case '豆瓣Top250':
        dataUrl = app.globalData.doubanBase + "/v2/movie/top250";
      break;
    }
    this.data.requestUrl = dataUrl;
    // 动态设置当前页面的标题
    wx.setNavigationBarTitle({
      title: this.data.navigateTitle
    })
    util.http(dataUrl, this.processDoubanData)
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
    var refreshUrl = this.data.requestUrl + "?start=0&count=20";
    this.data.movies = [];
    this.data.totalCount = 0;
    util.http(refreshUrl, this.processDoubanData);
    // 在当前页面显示导航条的加载动画
    wx.showNavigationBarLoading()
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
  processDoubanData(moviesDouban) {
    var movies = [];
    for (var idx in moviesDouban.subjects) {
      var subject = moviesDouban.subjects[idx];
      var title = subject.title;
      if (title.length >= 6) {
        title = title.substring(0, 6) + "...";
      }
      // [1,1,1,1,1] [1,1,1,0,0]
      var temp = {
        stars: util.convertToStarsArray(subject.rating.stars),
        title: title,
        average: subject.rating.average,
        coverageUrl: subject.images.large,
        movieId: subject.id
      }
      movies.push(temp)
    }
    let totalMovies = []
    if(!this.data.isEmpty) {
      totalMovies = this.data.movies.concat(movies)
    } else {
      totalMovies = movies;
      this.data.isEmpty = false 
    }
    this.setData({
      movies: totalMovies
    })
    this.data.totalCount += 20;
    // 在当前页面隐藏导航条隐藏动画
    wx.hideNavigationBarLoading();
    // 停止当前页面下拉刷新
    wx.stopPullDownRefresh();
  },
  scrollTap() {
    wx.showNavigationBarLoading();
    let url = this.data.requestUrl + "?start="+this.data.totalCount+"&count=20";
    util.http(url, this.processDoubanData)
  },
  // 电影详情页
  goMovieDetail(event) {
    let movieId = event.currentTarget.dataset.id;
    wx.navigateTo({
      url: '../movie-detail/movie-detail?id=' + movieId,
    })
  }
})