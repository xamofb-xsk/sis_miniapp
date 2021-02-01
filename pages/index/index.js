// pages/index/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    schedule_click(){
      wx.navigateTo({
        url: '/pages/Schedule/schedule',
      })
    },
    liredbk_click(){
      wx.navigateTo({
        url: '/pages/LitteRedBook/litteredbook',
      })
    },
    act_click(){
      wx.navigateTo({
        url: '/pages/ActivityInquire/activityInquire',
      })
    },
    personal_click(){
      wx.navigateTo({
        url: '/pages/Personal/personal',
      })
    }
  }
})
