// pages/hot/hot.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    type: undefined,
    rankTypes: [
      {
        title: '实战排行',
        type: 'project'
      },
      {
        title: '路径排行',
        type: 'path'
      }
    ],
    period: undefined,
    rankPeriods: [
      {
        title: '周',
        value: 'week'
      },
      {
        title: '月',
        value: 'month'
      }
    ],
    currentList: [],
    "listData": {}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log('load');
    wx.request({
      url: 'https://www.fastmock.site/mock/3318e12fecf0186fad855028d64347e9/weixin/api/getRecommend',
      success: (res)=>{
        console.log(res);
        const {data: {data}} = res;
        this.setData({listData: data});
        const period = wx.getStorageSync('period') || 'week';
        const type = wx.getStorageSync('type') || 'project';
        this.setData({
          period,
          type
        })
        this.changeCurrentList(type, period);
      }
    })
  }, 
  changeCurrentList(type, period){
    let currentList = [];
    if(type === 'project' && period === 'week'){
      currentList = this.data.listData.projectWeek;
    }else if(type === 'project' && period === 'month'){
      currentList = this.data.listData.projectMonth;
    }else if(type === 'path' && period === 'week'){
      currentList = this.data.listData.pathWeek;
    }else if(type === 'path' && period === 'month'){
      currentList = this.data.listData.pathMonth;
    }
    this.setData({currentList})
  },

  handleTabChange(e){
    let type = e.currentTarget.dataset.type;
    let period = this.data.period;
    this.setData({
      type: type
    })
    wx.setStorageSync('type', type);
    this.changeCurrentList(type, period);
  },

  handlePeriodChange(e){
    let period = e.currentTarget.dataset.value;
    let type = this.data.type;
    this.setData({
      period: period
    });
    wx.setStorageSync('period', period)
    this.changeCurrentList(type, period)
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

  }
})