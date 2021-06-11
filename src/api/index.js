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
  // 获取商品列表
  getGoodsList(params) {
    return request.get(config.appApiUrl + '/goods/index', {
      params: params
    })
  },
  // 获取商品详情
  getGoodsDetail(params) {
    return request.get(config.appApiUrl + '/goods/detail', {
      params: params
    })
  },
  // 获取单页详情
  getPageDetail(params) {
    return request.get(config.appApiUrl + '/page/detail', {
      params: params
    })
  },
  // 获取店铺详情
  getShopDetail(params) {
    return request.get(config.appApiUrl + '/shop/detail', {
      params: params
    })
  },
}

export default getData
