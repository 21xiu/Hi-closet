//app.js
App({
  onLaunch: function () {
    //调用API从本地缓存中获取数据
    let types = wx.getStorageSync("types");
    if(!types){
      wx.setStorageSync("types", this.globalData.types);
    }
  },
  getUserInfo:function(cb){
    var that = this
    if(this.globalData.userInfo){
      typeof cb == "function" && cb(this.globalData.userInfo)
    }else{
      //调用登录接口
      wx.login({
        success: function () {
          wx.getUserInfo({
            success: function (res) {
              that.globalData.userInfo = res.userInfo
              typeof cb == "function" && cb(that.globalData.userInfo)
            }
          })
        }
      })
    }
  },
  globalData:{
    api:{
      listBaseUrl:"https://route.showapi.com/959-1?showapi_appid=25744&showapi_sign=f3807528bd5d4a4ea6b2027e8286e0dc&type=",
      albumBaseurl:"https://route.showapi.com/959-2?id=%id%&showapi_appid=25744&showapi_sign=f3807528bd5d4a4ea6b2027e8286e0dc",
    },
    currentType:'',
    types: [
      {
        title: "上衣",
        value: "shirt",
        is_show: true
      },
      {
        title: "裤子",
        value: "pants",
        is_show: true
      },
      {
        title: "裙子",
        value: "skirt",
        is_show: true
      },
      {
        title: "外套",
        value: "jacket",
        is_show: true
      },
      {
        title: "鞋子",
        value: "shoes",
        is_show: true
      },
      {
        title: "袜子",
        value: "socks",
        is_show: true
      },
      {
        title: "饰品",
        value: "ornament",
        is_show: true
      }
    ]

  },
  
})