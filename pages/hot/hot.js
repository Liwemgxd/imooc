// pages/hot/hot.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    type: 'project',
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
    period: 'week',
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
    currentList: [{
      imgUrl: 'https://img1.mukewang.com/szimg/5f1eafb709e18bf912000676.png',
      title: '前端性能优化--6大角度综合型优化方案',
    }, {
      imgUrl: 'https://img2.mukewang.com/szimg/5c18d2d8000141c506000338.jpg',
      title: '剑指Java面试-Offer直通车',
    }, {
      imgUrl: 'https://img4.mukewang.com/szimg/5ac2dfe100014a9005400300.jpg',
      title: 'Vue2.5 开发去哪儿网App',
    }, {
      imgUrl: 'https://img3.mukewang.com/szimg/5d1032ab08719e0906000338.jpg',
      title: '计算机组成原理+操作系统+计算机网络',
    },{
      imgUrl: 'https://img1.mukewang.com/szimg/5f3cdd710925166812000676.png',
      title: 'Spark Streaming',
    }],
    listData: { 
      projectWeek: [{
        imgUrl: 'https://img1.mukewang.com/szimg/5f1eafb709e18bf912000676.png',
        title: '前端性能优化--6大角度综合型优化方案',
      }, {
        imgUrl: 'https://img2.mukewang.com/szimg/5c18d2d8000141c506000338.jpg',
        title: '剑指Java面试-Offer直通车',
      }, {
        imgUrl: 'https://img4.mukewang.com/szimg/5ac2dfe100014a9005400300.jpg',
        title: 'Vue2.5 开发去哪儿网App',
      }, {
        imgUrl: 'https://img3.mukewang.com/szimg/5d1032ab08719e0906000338.jpg',
        title: '计算机组成原理+操作系统+计算机网络',
      },{
        imgUrl: 'https://img1.mukewang.com/szimg/5f3cdd710925166812000676.png',
        title: 'Spark Streaming',
      }],
      projectMonth: [{
        imgUrl: 'https://img1.mukewang.com/szimg/5f1eafb709e18bf912000676.png',
        title: '前端性能优化--6大角度综合型优化方案',
      }, {
        imgUrl: 'https://img3.mukewang.com/szimg/5d1032ab08719e0906000338.jpg',
        title: '计算机组成原理+操作系统+计算机网络',
      }, {
        imgUrl: 'https://img4.mukewang.com/szimg/5ac2dfe100014a9005400300.jpg',
        title: 'Vue2.5 开发去哪儿网App',
      }, {
        imgUrl: 'https://img1.mukewang.com/szimg/5f3cdd710925166812000676.png',
        title: 'Spark Streaming',
      },{
        imgUrl: 'https://img2.mukewang.com/szimg/5c18d2d8000141c506000338.jpg',
        title: '剑指Java面试-Offer直通车',
      }],
      pathWeek: [{
        imgUrl: 'https://img3.mukewang.com/szimg/5d1032ab08719e0906000338.jpg',
        title: '计算机组成原理+操作系统+计算机网络',
      }, {
        imgUrl: 'https://img4.mukewang.com/szimg/5ac2dfe100014a9005400300.jpg',
        title: 'Vue2.5 开发去哪儿网App',
      }, {
        imgUrl: 'https://img1.mukewang.com/szimg/5f3cdd710925166812000676.png',
        title: 'Spark Streaming',
      },{
        imgUrl: 'https://img2.mukewang.com/szimg/5c18d2d8000141c506000338.jpg',
        title: '剑指Java面试-Offer直通车',
      },{
        imgUrl: 'https://img1.mukewang.com/szimg/5f1eafb709e18bf912000676.png',
        title: '前端性能优化--6大角度综合型优化方案',
      }],
      pathMonth: [{
        imgUrl: 'https://img4.mukewang.com/szimg/5ac2dfe100014a9005400300.jpg',
        title: 'Vue2.5 开发去哪儿网App',
      }, {
        imgUrl: 'https://img3.mukewang.com/szimg/5d1032ab08719e0906000338.jpg',
        title: '计算机组成原理+操作系统+计算机网络',
      },{
        imgUrl: 'https://img1.mukewang.com/szimg/5f3cdd710925166812000676.png',
        title: 'Spark Streaming',
      },{
        imgUrl: 'https://img2.mukewang.com/szimg/5c18d2d8000141c506000338.jpg',
        title: '剑指Java面试-Offer直通车',
      },{
        imgUrl: 'https://img1.mukewang.com/szimg/5f1eafb709e18bf912000676.png',
        title: '前端性能优化--6大角度综合型优化方案',
      }]
    }
  },
  changeCurrentList(type, period){
    let currentList = [];
    if(type === 'project' && period === 'week'){
      currentList = this.data.listData.projectWeek;
    }else if(type === 'project' && period === 'month'){
      currentList = this.data.listData.projectMonth;
    }else if(type === 'path' && period === 'week'){
      currentList = this.data.listData.pathWeek;
    }else{
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
    this.changeCurrentList(type, period);
  },

  handlePeriodChange(e){
    let period = e.currentTarget.dataset.value;
    let type = this.data.type;
    this.setData({
      period: period
    });
    this.changeCurrentList(type, period)
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