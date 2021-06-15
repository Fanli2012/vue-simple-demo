import Vue from 'vue'
import Router from 'vue-router'

import HelloWorld from '@/components/HelloWorld'
import Index from "../pages/index/index"
import Article from "../pages/index/article/index"
import ArticleDetail from "../pages/index/article/detail"
import Goods from "../pages/index/goods/index"
import GoodsDetail from "../pages/index/goods/detail"
import PageDetail from "../pages/index/page/detail"

Vue.use(Router)

export default new Router({
  // mode: 'history', // 去除Vue访问链接含有#号
  routes: [{
      path: '/',
      name: 'home',
      component: Index,
      meta: {
        title: '首页',
        keepAlive: false, // 不需要被缓存
      }
    },
    {
      path: '/article/detail',
      name: 'article-detail',
      component: ArticleDetail,
      meta: {
        title: '文章详情',
        keepAlive: true, // 不需要被缓存
      }
    },
    {
      path: '/article',
      name: 'article',
      component: Article,
      meta: {
        title: '新闻动态',
        keepAlive: false, // 不需要被缓存
      }
    },
    {
      path: '/goods/detail',
      name: 'goods-detail',
      component: GoodsDetail,
      meta: {
        title: '产品详情',
        keepAlive: true, // 不需要被缓存
      }
    },
    {
      path: '/goods',
      name: 'goods',
      component: Goods,
      meta: {
        title: '产品中心',
        keepAlive: false, // 不需要被缓存
      }
    },
    {
      path: '/page/detail',
      name: 'page-detail',
      component: PageDetail,
      meta: {
        title: '页面详情',
        keepAlive: true, // 不需要被缓存
      }
    },
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
  ]
})
