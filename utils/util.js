function convertToStarsArray(stars) {
  let array = [];
  let num = stars.toString().substring(0, 1);
  for (var i = 1; i <= 5; i++) {
    if (i <= num) {
      array.push(1)
    } else {
      array.push(0)
    }
  }
  return array;
}
function http(url, callback) {
  wx.request({
    url: url,
    method: 'GET',
    header: {
      "Content-Type": "application/json"
    },
    data: {},
    success: function(res) {
      callback(res.data)
    },
    fail: function(error) {
      console.log(error)
    }
  })
}
module.exports = {
  convertToStarsArray,
  http
}