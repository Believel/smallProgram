// pages/demo/form/form.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    index: 0,
    array: ['美国', '中国', '巴西', '日本']
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },
  onBindSwitchChange(event) {
    // 拿到switch改变时的值 
    // console.log(event.detail.value)
  },
  onBindSliderChange(event) {
    // 完成一次拖动之后的事件触发拿到此时的值
    // console.log(event.detail.value)
  },
  onBindRadioChange(event) {
    // 获得选中的radio的值
    console.log(event.detail.value)
  },
  onBindCheckboxChange(event) {
    // 获得选中的checkbox的值
    console.log(event.detail.value)
  },
  onBindPickerChange(e) {
    this.setData({
      index: e.detail.value
    })
  },
  formSubmit(e) {
    // 拿到提交的数据对象
    console.log('form发生了submit事件，携带数据为：', e.detail.value)
  },
  formReset() {
    console.log('form发生了reset事件')
  }
})