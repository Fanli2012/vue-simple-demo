<template>
  <div>
    <div v-if="list.length">
      <div class="am-list" style="padding: 0">
        <div class="am-list-body">
          <a
            v-for="(item, index) in list"
            :key="index"
            :href="'#/article/detail?id=' + item.id"
            class="am-list-item"
          >
            <div class="am-list-thumb" v-if="item.litpic">
              <img :src="item.litpic" alt="" />
            </div>
            <div class="am-list-content">{{ item.title }}</div>
          </a>
        </div>
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
  name: "article-list",
  data() {
    return {
      list: [],
      hasMore: true,
      limit: 15, // 每页十条
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
    this.getArticleList();
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
        this.getArticleList();
      }
    },
    getArticleList() {
      if (!this.hasMore) {
        return;
      }
      api
        .getArticleList({
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
</style>
