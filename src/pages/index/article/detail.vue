<template>
  <div>
    <div class="classreturnbox">
      <div class="classreturn">
        <div class="ds-in-bl return"><a href="javascript:history.back(-1);"><img
              src="../../../assets/img/icon_return3.png" alt="返回"></a>
        </div>
        <div class="ds-in-bl tit center"><span style="vertical-align:middle;">详情</span>
        </div>
      </div>
    </div>

    <div class="am-article">
      <h2>{{ post.title }}</h2>
      <time><span class="am-ft-black">毒舌电影</span> 01-13</time>
      <p>
        <img src="https://gw.alipayobjects.com/zos/rmsportal/MNjjYWCroGUsYVFichMq.png" width="100%" />
      </p>
      <p>
        该片明显将战争的正义与非正义之分模糊化了。作为以第二次世界大战冲绳岛之战为背景的电影，如果避而不谈当时的国际形势、战争起因，仅讨论人性、信仰、恶魔等泛化元素，仅以一个大兵的个人信仰和好恶判断战争难免有为了反战而不顾一切地想掩饰什么之嫌。
      </p>
      <p>
        最近30多年来，美军几乎4-5年就要打一场局部战争，为了师出有名，他们打出的旗号往往是推翻独裁统治、解放受苦难人民等，他们不是总把杀戮别国人民、牺牲美军士兵的战争，标榜为正义战争吗？
      </p>
      <h4>1.2节标题</h4>
      <p>
        支付宝方面介绍，“全球未来机场计划”是指未来游客在海外机场，除了可用支付宝消费之外，还可以通过支付宝使用航班提醒、室内导航、一键叫电瓶车等服务。支付宝表示，希望未来可以覆盖30家接待中国出境游客最多的海外机场。
      </p>
      <blockquote>
        本内容由“第一财经”授权，如果有任何疑问请与“第一财经”联系。
      </blockquote>
      <div class="am-article-tags">
        <span class="am-tag-item">电影</span>
        <span class="am-tag-item">战争</span>
        <span class="am-tag-item">二战</span>
      </div>
    </div>
  </div>
</template>

<script>
  import api from "../../../api";
  import util from "../../../utils/util";
  import footerNav from "../common/footer";
  export default {
    name: 'article-detail',
    data() {
      return {
        post: []
      };
    },
    components: {
      footerNav
    },
    mounted() {
      api.getArticleDetail({
          id: 10
        })
        .then(res => {

          //时间格式化
          var time = util.getTime(res.data.updated_at);
          res.data.updated_at = time['Y'] + '-' + time['m'] + '-' + time['d'];
          this.post = res.data;
        });
    }
  }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
