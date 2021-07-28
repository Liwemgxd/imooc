// index.js
// 获取应用实例
const app = getApp()

Page({
  data:{
    showIcon: true,
    swiperList: [],
    courses: [],
    searchList: null,
    type: "recommend",
    tabs: [
      {name: '推荐', type: 'recommend'},
      {name: '路径', type: 'path'},
      {name: '实战', type: 'project'},
      {name: '活动', type: 'activity'}
    ],
    activities: []
  },
  onLoad(){
    wx.request({
      url: 'https://www.fastmock.site/mock/3318e12fecf0186fad855028d64347e9/weixin/api/getData',
      success: (res)=>{
        // const {data: {data}} = res; 
        const data = res.data.data;
        const {swiperList, courses, activities} = data;
        this.setData({
          // swiperList: swiperList,
          // courses: courses
          swiperList,
          courses,
          activities
        })
      },
    })
  },
  handleInputChange(e){
    const value = e.detail.value;
    let searchList = null;
    if(value){
      searchList = this.data.courses.filter(item=>{
        return item.title.indexOf(value)>-1
      }
    );
    }
    this.setData({
      showIcon: value? false:true,
      searchList
    })
  },
  changeType(e){
    let type = e.currentTarget.dataset.type;
    this.setData({type})
  }
})
