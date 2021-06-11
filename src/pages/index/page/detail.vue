<template>
  <div style="background: #fff">
    <img
      v-bind:style="{ width: '100%', height: '50vw' }"
      src="../../../assets/img/banner.jpg"
    />

    <div class="am-article">
      <h2>{{ post.title }}</h2>
      <div class="content" v-html="post.body"></div>
    </div>

    <footerNav></footerNav>
  </div>
</template>

<script>
import api from "../../../api";
import util from "../../../utils/util";
import footerNav from "../common/footer";
export default {
  name: "page-detail",
  data() {
    return {
      post: [],
    };
  },
  components: {
    footerNav,
  },
  mounted() {
    // console.log(this.$route.query);
    api
      .getPageDetail({
        id: this.$route.query.id,
      })
      .then((res) => {
        console.log(res.data);
        this.post = res.data.data;
      });
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
