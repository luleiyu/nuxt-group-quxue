<template>
  <div class="custom_quxue">
    <my-carousel></my-carousel>
    <div class="services_quxue">
      <div class="cooperate">
        <h2>合作案例</h2>
        <div class="together">
          <div class="together_img">
            <img src="../../assets/img/demo.png" alt="">
          </div>
          <div>
            <p style="text-align:left;">多年来致力解决教培机构招生难、教研难、运营难、监管难等问题。并针对国内教培机构特性研发系统教材、教学互动平台、线上外教、中高考测评体系等产品。
            趣学世界-让学习更高效！</p>
          </div>
        </div>
      </div>
      <div class="together">
        <div>
          <h2>课件定制</h2>
          <div>
            <img src="../../assets/img/demo.png" alt="">
          </div>
        </div>
        <div>
          <h2>App定制</h2>
          <div>
            <img src="../../assets/img/demo.png" alt="">
          </div>
        </div>
      </div>
      <div class="four">
        <h2>图片展示</h2>
        <img src="../../assets/img/demo.png" alt="">
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
.custom_quxue {
  .services_quxue {
    text-align: center;
    .together {
      display: flex;
      justify-content: center;
      align-items: center;
      text-align: center;
    }
    .cooperate {
      .together_img {
        img {
          vertical-align: middle;
        }
      }
    }
    .four {

    }
  }
}
</style>
