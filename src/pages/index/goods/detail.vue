<template>
  <div>
    <div class="goods_detail">
      <!--顶部滚动广告栏-start-->
      <div class="tbanner">
        <!-- Swiper -->
        <div class="swiper-container">
          <div class="swiper-wrapper">
            <div
              class="swiper-slide"
              v-for="item in post.goods_img_list"
              :key="item.id"
            >
              <img :src="item.url" alt="" />
            </div>
          </div>
          <!-- Add Pagination -->
          <div class="swiper-pagination swiper-pagination-white"></div>
        </div>
      </div>
      <!--顶部滚动广告栏-end-->

      <div class="goods-header">
        <h1 class="title">{{ post.title }}</h1>

        <div class="goods-price">
          <div class="current-price">
            <span>￥</span><i class="price">{{ post.price }}</i>
          </div>
          <span v-if="post.is_promote > 0" class="btn-retail">促销</span>
        </div>

        <div class="stock-detail table-cell">
          <dl>
            <dt>运费:</dt>
            <dd>免运费</dd>
          </dl>
          <dl>
            <dt>库存:</dt>
            <dd>{{ post.goods_number }}</dd>
          </dl>
          <dl>
            <dt>销量:</dt>
            <dd>{{ post.sale }}</dd>
          </dl>
        </div>
      </div>

      <div class="goods-content">
        <div class="module-title">宝贝详情</div>
        <div class="module-content" v-html="post.body"></div>
      </div>
    </div>
  </div>
</template>

<script>
import api from "../../../api";
import util from "../../../utils/util";
import footerNav from "../common/footer";
//这里删掉了.babelrc文件里的第11行代码插件项"plugins": ["transform-runtime"]
import "../../../assets/js/swiper.min.js";

export default {
  name: "goods-detail",
  data() {
    return {
      post: [],
    };
  },
  components: {
    footerNav,
  },
  mounted() {
    api
      .getGoodsDetail({
        id: this.$route.query.id,
      })
      .then((res) => {
        console.log(res.data);
        this.post = res.data.data;
      });

    //Swiper轮播
    var swiper = new Swiper(".swiper-container", {
      pagination: ".swiper-pagination",
      paginationClickable: true,
      autoHeight: true, //enable auto height
      slidesPerView: 1,
      paginationClickable: true,
      spaceBetween: 30,
      loop: true,
      centeredSlides: true,
      autoplay: 3000,
      autoplayDisableOnInteraction: false,
    });
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import "../../../assets/css/swiper.min.css";

.swiper-container {
  width: 100%;
  height: 90vw;
}
.swiper-slide {
  text-align: center;
  font-size: 18px;
  background: #fff;
}
.swiper-slide img {
  width: 100%;
  height: 100vw;
}

/*商品详情*/
.goods-header {
  display: block;
  height: auto;
  padding: 10px 0 0;
  -webkit-tap-highlight-color: transparent;
  border-top: 1px solid #f2f2f2;
  background-color: #fff;
  margin-bottom: 10px;
  position: relative;
}
.goods-header .title {
  font-weight: normal;
  padding: 0 10px;
  font-size: 18px;
  line-height: 1.3;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
.goods-header .wish-add {
  position: relative;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  color: #ea6f5a;
  background-color: transparent;
  border: 1px solid #ea6f5a;
  border-radius: 2px;
  font-size: 14px;
  padding: 0 3px;
  display: inline-block;
  margin-right: 10px;
}
.goods-header .wish-add-activate {
  color: #fff;
  background-color: #ea6f5a;
}
.goods-header .goods-price {
  padding: 10px 10px 2px;
  text-align: left;
}
.goods-header .current-price {
  color: #f60;
  display: inline-block;
}
.goods-header .current-price span {
  font-size: 16px;
  display: inline-block;
  vertical-align: middle;
}
.goods-header .current-price .price {
  display: inline-block;
  vertical-align: middle;
  font-size: 20px;
}
.goods-header .btn-retail {
  padding: 0 3px;
  border-radius: 2px;
  color: #fff;
  background-color: #1cbb7f;
  display: inline-block;
  text-align: center;
  font-size: 12px;
  cursor: pointer;
  line-height: 1.5;
  -webkit-appearance: none;
}
.goods-header .stock-detail {
  position: relative;
  line-height: 1.5;
  color: #999;
  background-color: #fff;
  padding: 5px 10px;
}
.goods-header .stock-detail dl {
  display: table-cell;
  margin-top: 10px;
  margin-bottom: 10px;
  font-size: 14px;
  zoom: 1;
}
.goods-header .stock-detail dt {
  display: inline-block;
}
.goods-header .stock-detail dd {
  display: inline-block;
  word-wrap: break-word;
}
.goods-header .goods-comment {
  margin-top: 10px;
  border-top: 10px solid #f1f1f1;
  height: 44px;
  line-height: 44px;
  padding: 0 10px 0 10px;
}
.goods-header .goods-comment span {
  float: right;
  color: #999;
}
.goods-content {
  background-color: #fff;
}
.goods-content .module-title {
  background: #fff;
  height: 44px;
  line-height: 44px;
  position: relative;
  padding: 0 10px 0 10px;
  font-size: 16px;
  color: #666;
  border-left: 3px solid #ff0036;
  border-bottom: 1px solid #f4f4f4;
}
.goods-content .module-content {
  padding: 10px 0 0 0;
}
.goods-content .module-content img {
  max-width: 100%;
  height: auto;
}
.table-cell {
  display: table;
  width: 100%;
}
</style>
