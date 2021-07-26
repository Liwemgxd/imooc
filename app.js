// app.js
App({
  //生命周期函数，是在特定时刻自动执行的函数
  //小程序启动时，自动执行
  onLaunch(options) {
    // 展示本地存储能力
    const logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)
    //console.log('hello', options)

    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })
  },
  //当小程序重新展示的时候，自动执行
  onShow(options){
    //console.log('onShow', options)
  },

  //当小程序取消展示的时候，自动执行
  onHide(){
    console.log('hide')
  },
  //当脚本执行错误时，自动执行的函数
  onError(msg){
    console.log('error')
  },
  sayHello(){
    return 'hello'
  },
  globalData: {
    userInfo: null
  },
})
