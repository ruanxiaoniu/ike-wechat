// pages/CRM/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    tabOptions: ["全部客户", "我的客户", "联系跟进", "跟进计划", "跟进任务", "客户投诉"],
    // tabsrc: ["/pages/CRM/allCustomers/index", "/pages/CRM/myCustomers/index"],
    tabclass: [".item_active"],
    active: "全部客户"
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  chickTab:function(event){
    let index = event.currentTarget.dataset.index
    let itemclass = []
    itemclass[index] = ".item_active"
    this.setData({tabclass: itemclass, active: this.data.tabOptions[index]}) 
  }
})