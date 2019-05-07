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
function convertToCastInfos(casts) {
  var castsArray = []
  for (var idx in casts) {
    var cast = {
      img: casts[idx].avatars ? casts[idx].avatars.large : "",
      name: casts[idx].name
    }
    castsArray.push(cast)
  }
  return castsArray
}
function convertToCastString(casts) {
  var castsjoin = ""
  for (var idx in casts) {
    castsjoin = castsjoin + casts[idx].name + " / "
  }
  return castsjoin.substring(0, castsjoin.length - 2)
}
module.exports = {
  convertToStarsArray,
  http,
  convertToCastString,
  convertToCastInfos
}