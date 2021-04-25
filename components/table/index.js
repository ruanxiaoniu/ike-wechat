Component({
  properties:{
    tableHeader: Array, // 表头
    data: Array, // 表格数据
    collumKey: Array, // 
    rowKey: String, // 表格的Key

  },
  lifetimes:{
    attached(){
      console.log("表头")
      console.log(this.data.tableHeader)
      console.log(this.data.data[0])
      console.log(this.data.collumKey)
    }
  }
})