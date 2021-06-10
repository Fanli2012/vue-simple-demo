import config from "../config"
import router from "../router"
import request from "../utils/request"

// 跳转登陆页面
const toLogin = () => {
  router.push({
    path: '/login'
  })
}

const getData = {
  // 获取文章列表
  getArticleList(params) {
    return request.get(config.appApiUrl + '/article/index', {
      params: params
    })
  },
  // 获取文章详情
  getArticleDetail(params) {
    return request.get(config.appApiUrl + '/article/detail', {
      params: params
    })
  },
}

export default getData
