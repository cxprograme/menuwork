Component({
  options:{
    multipleSlots: true // 在组件定义时的选项中启用多slot支持
  },
 /**
   * 组件的属性列表
   * 用于组件自定义设置
   */
  properties:{
    dataList:{
      type:null
    }
  },
  /**
   * 私有数据,组件的初始数据
   * 可用于模版渲染
   */
  data: {
    isShow: false
  },
  /**
  * 组件的方法列表
  * 更新属性和数据的方法与更新页面数据的方法类似
  */
  
  methods: {
    /**
     * 跳转二级页面
     */
    tap: function (event) {
      var sid =event.target.dataset.sid;
      console.log(sid);
      var _this = this;
      wx.request({
        url: 'http://localhost:8081/menuwork/menus/psmenus',
        data: {
          menu_type: '0,1',
          user_id: 'default_menu',
          parent_menu_id: sid
        },
        method: 'GET',
        header: {
          'content-type': 'application/json'
        },
        success: function (res) {
          _this.setData({
            dataList: res.data
          })
        }
      })
    },
    /**
     * toggle事件
     */
    hiddenSub: function (event) {
      // console.log(event);
      var index = event.target.dataset.index;
      console.log(this.data.dataList[index].sub_menu)
      if (this.data.dataList[index].sub_menu.length == 0){
        var menu_id = event.target.dataset.pid;
        wx.navigateTo({
          url: '../detail/detail?menu_id='+menu_id
        });
        return;
      }
      if (!this.data.dataList[index].hidden) {
        this.data.dataList[index].hidden = true;

        // this.setData({
        //   isShow: false
        // });
      } else {
        this.data.dataList[index].hidden = false;
        // this.setData({
        //   isShow: true
        // });
      }

      this.setData({
        dataList: this.data.dataList
      });
    }
  }
})