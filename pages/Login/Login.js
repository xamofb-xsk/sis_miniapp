// index.js
// 获取应用实例
const app = getApp()

Page({
  data: {
    login: "登录",
    infoMess: '',
    userName: '',
    passWord: ''
  },
  userNameInput:function(e){
    this.setData({
      userName:e.detail.value
    })
  },
  passWdInput:function(e){
    this.setData({
      passWord:e.detail.value
    })
  },
  loginBtn:function(){
    if(this.data.userName.length  == 0 || this.data.passWord.length == 0){
      this.setData({
        infoMess:'用户名或密码为空'
      })
    }
    else{
      this.setData({
        infoMess:''
      })
      wx.request({
        url: 'http://192.168.123.72:8000/api/auth/',
        header:{'content-type': 'text/plain;charset=utf-8'},
        method: "post",
        data:{
          username: this.data.userName,
          password: this.data.passWord
        } 
      })
    }
  },
  onLoad:function(){
    console.log('onLoad')
  }
})
