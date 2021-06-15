<template>
  <!--底部导航-start-->
  <div class="foohi">
    <div class="footer">
      <ul>
        <template v-if="active == 'home'">
          <li class="on">
            <a :href="'#/'"
              ><img src="../../../assets/img/icon_home2.png" />
              <p>首页</p>
            </a>
          </li> </template
        ><template v-else>
          <li>
            <a :href="'#/'"
              ><img src="../../../assets/img/icon_home.png" />
              <p>首页</p>
            </a>
          </li>
        </template>
        <template v-if="active == 'article'">
          <li class="on">
            <a :href="'#/article'"
              ><img src="../../../assets/img/icon_statistical2.png" />
              <p>动态</p>
            </a>
          </li></template
        ><template v-else>
          <li>
            <a :href="'#/article'"
              ><img src="../../../assets/img/icon_statistical.png" />
              <p>动态</p>
            </a>
          </li>
        </template>
        <template v-if="active == 'goods'">
          <li class="on">
            <a :href="'#/goods'"
              ><img src="../../../assets/img/icon_fenlei2.png" />
              <p>产品</p>
            </a>
          </li></template
        ><template v-else>
          <li>
            <a :href="'#/goods'"
              ><img src="../../../assets/img/icon_fenlei.png" />
              <p>产品</p>
            </a>
          </li>
        </template>
        <template v-if="active == 'page'">
          <li class="on">
            <a :href="'#/page/detail?id=about'"
              ><img src="../../../assets/img/icon_kefu2.png" />
              <p>联系</p>
            </a>
          </li></template
        ><template v-else>
          <li>
            <a :href="'#/page/detail?id=about'"
              ><img src="../../../assets/img/icon_kefu.png" />
              <p>联系</p>
            </a>
          </li>
        </template>
      </ul>
    </div>
  </div>
  <!--底部导航-end-->
</template>

<script>
export default {
  name: "footerNav",
  data() {
    return {
      active: "",
    };
  },
  components: {},
  mounted() {
    if (this.$route.path == "/") {
      this.active = "home";
    } else if (this.$route.path == "/article") {
      this.active = "article";
    } else if (this.$route.path == "/goods") {
      this.active = "goods";
    } else if (this.$route.path == "/page/detail") {
      this.active = "page";
    }
    // console.log(this.$route.query);
    // console.log(this.$route.path);
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
