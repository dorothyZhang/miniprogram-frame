// 小程序的APPid
const appId = wx.getAccountInfoSync().miniProgram.appId;
const defaultConfig = require('./miniprogram.config').config[appId];

//app.js
App({
    onLaunch: function () {
    },
    onShow: function () {
        this.locationTip();
    },
    locationTip: function () {
    },
    globalData: {
    }
})
