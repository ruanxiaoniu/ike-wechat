Component({
  data: {
    tableHeader: ["客户名称", "主联系手机号", "最后跟进时间", "负责人"],
    customerList: [
      {
        id: 1,
        name: "ruanyaolan",
        mainPhone: "13556512184",
        lastFollowTime: "2021-09-20",
        charge: "ruanyaolan"
      },
      {
        id: 1,
        name: "liangshiyi",
        mainPhone: "13556512184",
        lastFollowTime: "2021-09-20",
        charge: "liangshiyi"
      }
    ],
    collumKey: ["name", "mainPhone", "lastFollowTime", "charge"],
    rowKey: "id"
  }
})