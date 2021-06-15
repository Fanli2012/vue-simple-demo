<template>
  <div>
    <ul
      class="ll-list"
      id="goods_list"
      style="padding-top: 15px"
      v-if="list.length"
    >
      <li v-for="(item, index) in list" :key="index">
        <a :href="'#/goods/detail?id=' + item.id">
          <span v-if="item.is_promote > 0" class="label">限时抢购</span>
          <img alt="" :src="item.litpic" />
          <div class="ll-list-info">
            <p class="ll-list-tit2">{{ item.title }}</p>
            <p class="ll-list-click">{{ item.click }}人查看</p>
            <div class="ll-list-price">
              <span class="price">￥{{ item.price }}</span>
              <span class="market-price">￥{{ item.market_price }}</span>
            </div>
          </div>
        </a>
      </li>
      <div class="cl"></div>
    </ul>

    <footerNav></footerNav>
  </div>
</template>

<script>
import api from "../../../api";
import util from "../../../utils/util";
import footerNav from "../common/footer";

export default {
  name: "article-list",
  data() {
    return {
      list: [],
      hasMore: true,
      limit: 10, // 每页十条
      offset: 0,
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
    this.getGoodsList();
    window.addEventListener("scroll", this.scrollLoadMore, true);
  },
  destroyed() {
    window.removeEventListener("scroll", this.scrollLoadMore, false);
  },
  methods: {
    /**
     * 滚动到底部
     */
    scrollLoadMore() {
      // 滚动到底部,获取数据
      if (util.isScrollBottom()) {
        this.getGoodsList();
      }
    },
    getGoodsList() {
      if (!this.hasMore) {
        return;
      }
      api
        .getGoodsList({
          limit: this.limit,
          offset: this.offset,
        })
        .then((res) => {
          // console.log(res.data);
          if (res.data.data.list) {
            this.offset = this.offset + this.limit;
            this.list = this.list.concat(res.data.data.list);
          } else {
            this.hasMore = false;
          }
        });
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.ll-tit {
  font-size: 20px;
  font-weight: 400;
  background-color: #fff;
  color: #000000;
  height: 60px;
  line-height: 60px;
  padding-left: 15px;
  padding-right: 15px;
  text-align: center;
}
.ll-list {
  padding: 0 15px 0 15px;
  overflow: hidden;
  background-color: #ffffff;
}
.ll-list li {
  margin-bottom: 15px;
  padding-bottom: 10px;
  width: 50%;
  float: left;
}
.ll-list li a {
  position: relative;
  display: block;
  margin-right: 8px;
  overflow: hidden;
}
.ll-list li:nth-child(even) a {
  margin-right: 0;
  margin-left: 8px;
}
.ll-list li img {
  border-radius: 4px;
  width: 100%;
  height: 46vw;
}
.ll-list .ll-list-tit {
  margin-top: 8px;
  color: #333;
  font-size: 14px;
  line-height: 22px;
  white-space: nowrap;
  overflow: hidden;
}
.ll-list .ll-list-tit2 {
  margin-top: 8px;
  color: #333;
  font-size: 14px;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  height: 40px;
  line-height: 20px;
  overflow: hidden;
}
.ll-list .label {
  font-size: 12px;
  position: absolute;
  color: #fff;
  background: #ff3333;
  display: inline-block;
  border-bottom-right-radius: 5px;
  padding: 0 4px;
  text-align: center;
  font-size: 12px;
}
.ll-list .ll-list-click {
  color: #aaaaaa;
  font-size: 12px;
}
.ll-list .ll-list-price {
  height: 30px;
  line-height: 32px;
  font-size: 16px;
  color: #484848;
}
.ll-list .ll-list-price .price {
  font-size: 18px;
  color: #ff3333;
}
.ll-list .ll-list-price .market-price {
  font-size: 12px;
  color: #aaaaaa;
  text-decoration: line-through;
}
</style>
