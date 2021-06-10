/**
 * 自定义配置文件
 */
var host = "14592619.qcloud.la"

var config = {

  // 下面的地址配合云端 Server 工作
  host,

  // 登录地址，用于建立会话
  loginUrl: `https://${host}/login`,

  // 测试的请求地址，用于测试会话
  requestUrl: `https://${host}/testRequest`,

  // 上传文件接口
  uploadFileUrl: `https://${host}/upload`,

  // 下载示例图片接口
  downloadExampleUrl: `https://${host}/static/weapp.jpg`,

  // API 接口
  appApiUrl: "https://xinqibao.xyabb.com/api"
};

module.exports = config
