var app = getApp();

Page({

  /**
   * 页面的初始数据
   */
  data: {
    flag:true,
    dataList: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var _this=this;
    wx.request({
      url: 'http://localhost:8081/menuwork/menus/psmenus',
      data: {
        menu_type: '0',
        user_id: 'default_menu',
        parent_menu_id: 'userRoot'
      },
      method: 'GET',
      header: {
        'content-type': 'application/json'
      },
      success: function (res) {
        _this.setData({
          dataList:res.data
        })
      }

    })  
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
  tap:function(event){
    // console.log(event);
    var pindex = event.target.dataset.pindex;
    var subindex = event.target.dataset.idex;
    var details = this.data.dataList[pindex].twodata[subindex].detail;
    wx.navigateTo({
      url: '../detail/detail?details='+JSON.stringify(details),
    })
  },
  hiddenSub:function(event){
    // console.log(event);
    var index = event.target.dataset.index;
    if(this.data.flag){
      this.data.dataList[index].hidden = true;
      
      this.setData({
        flag:false
      });
    }else{
      this.data.dataList[index].hidden = false;
      this.setData({
        flag: true
      });
    }
    
    this.setData({
      dataList: this.data.dataList
    });
  }
})