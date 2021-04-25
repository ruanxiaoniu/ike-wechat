Component({
  properties: {
    tabName: String
  },
  data: {
    tabOptions: ["全部客户", "我的客户", "联系跟进", "跟进计划", "跟进任务", "客户投诉"],
    tabsrc: ["/pages/CRM/allCustomers/index", "/pages/CRM/myCustomers/index"],
    tabclass: [".item_active"]
  },
  lifetimes:{
    attached(){
      console.log("shizhe ?")
      console.log(this.data.tabName)
      console.log(this.data.tabOptions);
      let index =this.data.tabOptions.findIndex(val =>{
        console.log(val);
        // return val
        return val === this.data.tabName
      })
      console.log("index--", index);
      let itemclass = []
      itemclass[index] = ".item_active"
      this.setData({ tabclass: itemclass})
    }
  },
  methods: {
    
    chickTab:function(event){
      let index = event.currentTarget.dataset.index
      let itemclass = []
      itemclass[index] = ".item_active"
      this.setData({tabclass: itemclass})
      console.log(this.data.tabsrc[index])
      if(this.data.tabsrc[index] === "/pages/CRM/allCustomers/index"){
        wx.switchTab({
          url: this.data.tabsrc[index],
        })
      }else{
        wx.redirectTo({
          url: this.data.tabsrc[index],
        })
      }
      
    }
  }
})