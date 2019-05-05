// pages/movies/movies.js
let util = require('../../utils/util.js')
let app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let inTheatersUrl = app.globalData.doubanBase + "/v2/movie/in_theaters" + "?start=0&count=3";
    let comingSoonUrl = app.globalData.doubanBase + "/v2/movie/coming_soon" + "?start=0&count=3";
    let top250Url = app.globalData.doubanBase + "/v2/movie/top250" + "?start=0&count=3";
    this.getMovieListData(inTheatersUrl, 'inTheaters', '正在热映')
    this.getMovieListData(comingSoonUrl, 'comingSoon', '即将上映')
    this.getMovieListData(top250Url, 'top250', '豆瓣Top250')
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

  },
  getMovieListData(url, key, categoryTitle) {
    let _this = this;
    wx.request({
      url: url,
      header: {
        'content-type': 'application/json' // 默认值
      },
      method: 'GET',
      success(res) {
        _this.processDoubanData(res.data, key, categoryTitle)
      },
      fail(error) {
        // 断网
        console.log(error)
      }
    })
  },
  processDoubanData(data, key, categoryTitle) {
    let movies = [], readyData = {};
    for(let idx in data.subjects) {
      let subject = data.subjects[idx]
      let title = subject.title
      if(title.length >= 6) {
        title = title.substring(0, 6) + '...';
      }
      let temp = {
        stars: util.convertToStarsArray(subject.rating.stars),
        title: title,
        average: subject.rating.average,
        coverageUrl: subject.images.large,
        movieId: subject.id
      }
      movies.push(temp)
    }
    readyData[key] =  {
      categoryTitle,
      movies
    }
    this.setData(readyData)
  },
  // 更多
  getMoreMovie(event) {
    let category = event.currentTarget.dataset.category;
    wx.navigateTo({
      url: 'more-movie/more-movie?category='+ category
    })
  }
})