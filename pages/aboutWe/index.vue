<template>
  <div class="about_me">
    <my-carousel></my-carousel>
    <div class="about_quxue">
      <h2>关于趣学</h2>
      <div class="about_content">
        <div class="content_img">
          <img src="../../assets/img/demo.png" alt="">
        </div>
        <div>
          <p>
            多年来致力解决教培机构招生难、教研难、运营难、监管难等问题。并针对国内教培机构特性研发系统教材、教学互动平台、线上外教、中高考测评体系等产品。
            趣学世界-让学习更高效！
          </p>
        </div>
      </div>
    </div>
    <div class="quxue_mile">
      <div>
        <h2>客户感言</h2>
        <my-carousel></my-carousel>
      </div>
      <div>
        <h2>趣学荣誉</h2>
        <my-carousel></my-carousel>
      </div>
      <div>
        <h2>新闻动态</h2>
        <my-carousel></my-carousel>
      </div>
    </div>
  </div>
</template>

<script>
import myCarousel from '@/components/my-carousel'

export default {
  components: {
    myCarousel
  },
  head () {
    return {
      title: '关于我们',
      meta: [
        { hid: 'about', name: 'description', content: 'about me,关于我们，我们是谁，who are you? brand，cooperation，homepage,首页，趣学英语，服务商合作，AI,product,产品中心，研发中心' }
      ]
    }
  },
  data () {
    return {

    }
  },
  mounted () {
    console.log(document.body.clientHeight)
  }
}
</script>

<style lang="scss">
.about_me {
  .about_quxue {
    text-align: center;
    .about_content {
      text-align: left;
      display: flex;
      justify-content: center;
      align-items: center;
      .content_img {
        img {
          vertical-align: middle;
        }
      }
    }
  }
  .quxue_mile {
    text-align: center;
  }
}
</style>
