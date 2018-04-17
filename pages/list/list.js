var app = getApp();

Page({

  /**
   * 页面的初始数据
   */
  data: {
    dataList: [{
      id: 1,
      name: '应季鲜果',
      count: 1,
      hidden:false,
      twodata: [{
        'id': 11,
        'name': '鸡脆骨'
      }, {
        'id': 12,
        'name': '鸡爪'
      }]
    }, {
      id: 2,
      name: '精致糕点',
      count: 6,
      hidden: false,
      twodata: [{
        'id': 13,
        'name': '羔羊排骨一条'
      }, {
        'id': 14,
        'name': '微辣'
      }]
    }, {
      id: 3,
      name: '全球美食烘培原料',
      count: 12,
      hidden: false,
      twodata: [{
        'id': 15,
        'name': '秋刀鱼'
      }, {
        'id': 16,
        'name': '锡箔纸金针菇'
      }]
    }]
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
    
  },
  tap:function(){
    console.log('1')
  },
  hiddenSub:function(event){
    console.log(event);
    var index = event.target.dataset.index;
    this.data.dataList[index].hidden=true;
    this.setData({
      dataList:this.data.dataList
    });
  }
})