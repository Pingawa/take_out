// index.js
Page({
	data:{
		msg:'hello world',
		avatarUrl:'',
		nickName:'',
		code:''
	},

	 tUserInfo:function(){
	    wx.getUserProfile({
	      desc: '获取用户信息',
	      success:(res) => {
	        console.log(res)
	        this.setData({
	          avatarUrl:res.userInfo.avatarUrl,
	          nickName:res.userInfo.nickName
	        })
	      }
	    })
	 },

	WxLogin:function(){
		wx.login({
		  success: (res) => {
			console.log(res.code)
			this.setData({
				code:res.code
			})
		  },
		})
	},

	request:function(){
		wx.request({
		  url: 'http://localhost:8080/user/shop/status',
		  method: 'GET',
		  success: (res)=>{
			console.log(res.data)
		  } 
		})
	}
})
