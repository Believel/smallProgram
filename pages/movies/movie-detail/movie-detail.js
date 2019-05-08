// pages/movies/movie-detail/movie-detail.js
let app = getApp();
let util = require('../../../utils/util.js')
import {Movie} from 'class/Movie.js';
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
    var movie = new Movie(url);
    console.log(movie)
    movie.getMovieData((movie) => {
      this.setData({
        movie: movie
      })
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