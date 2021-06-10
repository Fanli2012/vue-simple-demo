<template>
  <div>
    <div class="am-list" style="padding:0;">
      <div class="am-list-body">
        <a :href="'#/article/detail?id=1'" class="am-list-item">
          <div class="am-list-thumb"><img src="https://gw.alipayobjects.com/zos/rmsportal/JHWXyxsAgbuBUnvjjfos.png"
              alt=""></div>
          <div class="am-list-content">标题文字</div>
        </a>
        <a :href="'#/article/detail?id=1'" class="am-list-item">
          <div class="am-list-thumb"><img src="https://gw.alipayobjects.com/zos/rmsportal/JHWXyxsAgbuBUnvjjfos.png"
              alt=""></div>
          <div class="am-list-content">标题文字</div>
        </a>
      </div>
    </div>

    <footerNav></footerNav>
  </div>
</template>

<script>
  import footerNav from "../common/footer";
  export default {
    name: 'article',
    data() {
      return {
        msg: 'Welcome to Your Vue.js App'
      };
    },
    components: {
      footerNav
    }
  }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
