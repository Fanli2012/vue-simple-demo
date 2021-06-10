<template>
  <!--底部导航-start-->
  <div class="foohi">
    <div class="footer">
      <ul>
        <li class="on"><a :href="'#/'"><img src="../../../assets/img/icon_home.png" />
            <p>首页</p>
          </a></li>
        <li><a :href="'#/article'"><img src="../../../assets/img/icon_statistical.png" />
            <p>动态</p>
          </a></li>
        <li><a :href="'#/goods'"><img src="../../../assets/img/icon_fenlei.png" />
            <p>产品</p>
          </a></li>
        <li><a :href="'#/page/detail?id=about'"><img src="../../../assets/img/icon_kefu.png" />
            <p>联系</p>
          </a></li>
      </ul>
    </div>
  </div>
  <!--底部导航-end-->
</template>

<script>
  export default {
    name: 'footer',
    data() {
      return {
        active: "product",
      };
    }
  }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
