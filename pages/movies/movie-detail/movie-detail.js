// pages/movies/movie-detail/movie-detail.js
let app = getApp();
let util = require('../../../utils/util.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    movie: {}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options.id)
    let id = options.id;
    let url = app.globalData.doubanBase + "/v2/movie/subject/" + id;
    util.http(url, this.processMovieData)
  },
  processMovieData(data) {
    if(!data) {
      return;
    }
    var director = {
      avatar: '',
      name: '',
      id: ''
    }
    if (data.directors[0]!== null) {
      if (data.directors[0].avatars !== null) {
        director.avatar = data.directors[0].avatars.large
      }
      director.name = data.directors[0].name;
      director.id = data.directors[0].ids
    }
    var movie = {
      movieImg: data.images ? data.images.large : "",
      country: data.countries[0],
      title: data.title,
      originalTitle: data.original_title,
      wishCount: data.wish_count,
      commentCount: data.comments_count,
      year: data.year,
      generes: data.genres.join("、"),
      stars: util.convertToStarsArray(data.rating.stars),
      score: data.rating.average,
      director: director,
      casts: util.convertToCastString(data.casts),
      castsInfo: util.convertToCastInfos(data.casts),
      summary: data.summary
    }
    this.setData({
      movie
    })
  },
  viewMoviePostImg(event) {
    let imgUrl = event.currentTarget.dataset.src;
    // 在新页面中全屏预览图片
    wx.previewImage({
      urls: [imgUrl],
    })
  }
})  