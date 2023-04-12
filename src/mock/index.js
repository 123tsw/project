//引入mockjs库
import Mock from "mockjs";
//引入数据
import checkList from "./checkList.json";

//这里为了演示,就不单独建立一个bannerData的文件了
/* const bannerData = [
  {
    "id|1-3": "001",
    "name|1": ["家用电器1", "家用电器2", "家用电器3"],
    "keywords": ["节能补贴", "4K电视", "空气净化器", "IH电饭煲", "滚筒洗衣机"],
  }
] */

// 记录数据模板。当拦截到匹配 url 的 Ajax 请求时，将根据数据模板 template 生成模拟数据，并作为响应数据返回。
Mock.mock("/mock/bannerData",{
  code:200,
  data:checkList
});
