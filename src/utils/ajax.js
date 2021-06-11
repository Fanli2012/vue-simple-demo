import axios from "axios";

/**
 * 封装ajax请求
 * 1.url、method为必填选项
 * 2.type存在时导出数据
 * @param {String}   url                      请求地址
 * @param {String}   method                   请求方式
 * @param {JSON}     data                  请求数据
 * @param {Function} callback                 回调函数
 */
const ajax = (url = '', callback, data = {}, method = 'get', header = {}) => {
  axios({
      url: url,
      headers: header ? header : {
        "Content-Type": "application/json"
      },
      method: method,
      data: data
    })
    .then(response => {
      // console.log(response)
      callback(response);
    })
    .catch(error => {
      console.log(error)
    });
};

export default ajax
