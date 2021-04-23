// pages/dashboard/index.js
import * as echarts from "../../ec-canvas/echarts"
// let chartLine;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    customer_chart: {
      onInit: init_cutomer_chart
    },
    order_chart: {
      onInit: init_order_chart
    }
  },
  

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

})
// 初始化全部客户
function init_cutomer_chart(canvas, width, height){
  //初始化echarts元素，绑定到全局变量，方便更改数据
  const chartLine = echarts.init(canvas, null, {
      width: width,
      height: height
  });
  canvas.setChart(chartLine);

  //可以先不setOption，等数据加载好后赋值，
  //不过那样没setOption前，echats元素是一片空白，体验不好，所有我先set。
  var xData = [1,2,3,4,5];  // x轴数据 自己写
  var option = getCustomerOption(xData);
  chartLine.setOption(option);
  return chartLine
}
function getCustomerOption(xData, data_cur, data_his) {
  var option = {
    title: {
      text: '全部客户总览',
      left: "center"
    },
    legend: {
      orient: "vertical",
      left: "left"
    },
    tooltip: {
      trigger: 'item'
    },
    series: [{
      name: '全部客户总览',
      radius: '50%',
      type: 'pie',
      data: [
          {value: 1048, name: '今日新增'},
          {value: 735, name: '今日跟进'},
          {value: 580, name: '从未跟进'},
      ],
    }]
  };
  return option;
}

// 初始化订单情况
function init_order_chart(canvas, width, height){
  //初始化echarts元素，绑定到全局变量，方便更改数据
  const chartLine = echarts.init(canvas, null, {
    width: width,
    height: height
  });
  canvas.setChart(chartLine);

  //可以先不setOption，等数据加载好后赋值，
  //不过那样没setOption前，echats元素是一片空白，体验不好，所有我先set。
  var xData = [1,2,3,4,5];  // x轴数据 自己写
  var option = getOrderOption(xData);
  chartLine.setOption(option);
  return chartLine
}

function getOrderOption(){
  var option = {
    title: {
      text: '订单总览',
      left: "center"
    },
    legend: {
      orient: "vertical",
      left: "left"
    },
    tooltip: {
      trigger: 'item'
    },
    series: [{
      name: '订单总览',
      radius: '50%',
      type: 'pie',
      data: [
          {value: 1048, name: '成交订单'},
          {value: 735, name: '汇款订单'},
          {value: 580, name: '退款订单'},
      ],
    }]
  };
  return option;
}