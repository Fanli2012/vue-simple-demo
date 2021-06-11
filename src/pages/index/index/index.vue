<template>
  <div>
    <img
      v-bind:style="{ width: '100%', height: '50vw' }"
      src="../../../assets/img/banner.jpg"
    />

    <div class="am-notice" role="alert">
      <div class="am-notice-content">
        <marquee scrollamount="3" style="vertical-align: middle"
          >把每个网站当做一个作品来开发，以工匠之心，精雕细琢，追求完美！
        </marquee>
      </div>
    </div>

    <div class="am-list am-list-twoline" style="padding: 0">
      <div class="am-list-body">
        <a
          href="javascript:void(0)"
          class="am-list-item am-list-item-indent line-twoline"
        >
          <div v-if="shopDetail.head_img" class="am-list-thumb">
            <img :src="shopDetail.head_img" alt="" />
          </div>
          <div class="am-list-content">
            <div class="am-list-title">{{ shopDetail.company_name }}</div>
            <div class="am-list-brief" v-if="shopDetail.city_text">
              <img
                style="width: 14px; height: 14px"
                src="../../../assets/img/location2.png"
              />
              {{ shopDetail.province_text }} · {{ shopDetail.city_text }}
            </div>
          </div>
          <div class="am-list-arrow">
            <img
              style="width: 14px; height: 14px"
              src="../../../assets/img/company_icon.png"
            />
          </div>
        </a>
      </div>
    </div>

    <div class="am-list" style="padding-top: 0">
      <div class="am-list-body">
        <a class="am-list-item">
          <div class="am-list-content">
            <span style="color: #999">联系人：</span>{{ shopDetail.contact }}
          </div>
        </a>
        <a class="am-list-item" :href="'tel:' + shopDetail.contact_information">
          <div class="am-list-content">
            <span style="color: #999">联系方式：</span
            >{{ shopDetail.contact_information }}
          </div>
          <div class="am-list-arrow" aria-hidden="true">
            <img
              style="width: 14px; height: 14px"
              src="../../../assets/img/tel.png"
            />
          </div>
        </a>
        <a class="am-list-item" v-if="shopDetail.wechat">
          <div class="am-list-content">
            <span style="color: #999">微信号：</span>{{ shopDetail.wechat }}
          </div>
        </a>
        <a class="am-list-item" v-if="shopDetail.qq">
          <div class="am-list-content">
            <span style="color: #999">QQ：</span>{{ shopDetail.qq }}
          </div>
        </a>
        <a class="am-list-item" v-if="shopDetail.email">
          <div class="am-list-content">
            <span style="color: #999">电子邮箱：</span>{{ shopDetail.email }}
          </div>
        </a>
        <a class="am-list-item" v-if="shopDetail.website">
          <div class="am-list-content">
            <span style="color: #999">官网：</span>{{ shopDetail.website }}
          </div>
        </a>
        <a class="am-list-item">
          <div class="am-list-content">
            <span style="color: #999">地址：</span>{{ shopDetail.address }}
          </div>
          <div class="am-list-arrow">
            <img
              style="width: 14px; height: 14px"
              src="../../../assets/img/location3.png"
            />
          </div>
        </a>
      </div>
    </div>

    <div style="width: 100%; overflow: hidden" v-if="goodsList.length">
      <div
        class="am-horizon-swiper swiper-container swiper-container-horizontal"
      >
        <div class="am-hswiper-title">产品中心</div>
        <div
          class="am-hswiper-list swiper-wrapper"
          style="width: 100%; overflow: scroll"
        >
          <a
            v-for="item in goodsList"
            :key="item.id"
            :href="'#/goods/detail?id=' + item.id"
            class="am-hswiper-item swiper-slide"
          >
            <img :src="item.litpic" class="am-hswiper-img" />
            <div class="am-hswiper-item-title">{{ item.title }}</div>
            <div class="am-hswiper-item-des" style="color: #f60">
              <template v-if="item.price > 0">￥{{ item.price }}</template
              ><template v-else>面议</template>
            </div>
          </a>
          <a
            :href="'#/goods'"
            class="am-hswiper-item am-hswiper-more swiper-slide"
          >
            查看更多
          </a>
        </div>
      </div>
    </div>

    <div class="am-list" v-if="newsList.length">
      <div class="am-list-header">新闻动态</div>
      <div class="am-list-body">
        <a
          v-for="item in newsList"
          :key="item.id"
          :href="'#/article/detail?id=' + item.id"
          class="am-list-item"
        >
          <div class="am-list-thumb" v-if="item.litpic">
            <img :src="item.litpic" alt="" />
          </div>
          <div class="am-list-content">{{ item.title }}</div>
        </a>
        <a :href="'#/article'" class="am-list-more">查看更多</a>
      </div>
    </div>

    <footerNav></footerNav>
  </div>
</template>

<script>
import api from "../../../api";
import util from "../../../utils/util";
import footerNav from "../common/footer";

export default {
  name: "home",
  data() {
    return {
      newsList: [],
      goodsList: [],
      shopDetail: {},
    };
  },
  components: {
    footerNav,
  },
  props: {},
  computed: {},
  watch: {},
  directives: {},
  beforeCreate() {},
  created() {},
  mounted() {
    this.getArticleList();
    this.getGoodsList();
    this.getShopDetail();
  },
  destroyed() {},
  methods: {
    getArticleList() {
      api
        .getArticleList({
          limit: 8,
          offset: 0,
        })
        .then((res) => {
          console.log(res.data);
          if (res.data.data.list) {
            this.newsList = res.data.data.list;
          }
        });
    },
    getGoodsList() {
      api
        .getGoodsList({
          limit: 8,
          offset: 0,
        })
        .then((res) => {
          console.log(res.data);
          if (res.data.data.list) {
            this.goodsList = res.data.data.list;
          }
        });
    },
    getShopDetail() {
      api
        .getShopDetail({
          id: 18,
        })
        .then((res) => {
          console.log(res.data);
          if (res.data.data) {
            this.shopDetail = res.data.data;
          }
        });
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
