<template>
  <div style="background: #fff">
    <div class="classreturnbox">
      <div class="classreturn">
        <div class="ds-in-bl return">
          <a href="javascript:history.back(-1);"
            ><img src="../../../assets/img/icon_return3.png" alt="返回"
          /></a>
        </div>
        <div class="ds-in-bl tit center">
          <span style="vertical-align: middle">详情</span>
        </div>
      </div>
    </div>

    <div class="am-article">
      <h2>{{ post.title }}</h2>
      <time
        ><!-- <span class="am-ft-black">毒舌电影</span> -->{{
          post.updated_at
        }}</time
      >
      <div class="content" v-html="post.body"></div>
    </div>
  </div>
</template>

<script>
import api from "../../../api";
import util from "../../../utils/util";
import footerNav from "../common/footer";

export default {
  name: "article-detail",
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
      .getArticleDetail({
        id: this.$route.query.id,
      })
      .then((res) => {
        console.log(res.data);
        //时间格式化
        var time = util.getTime(res.data.data.updated_at);
        res.data.data.updated_at =
          time["Y"] + "-" + time["m"] + "-" + time["d"];
        this.post = res.data.data;
      });
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
