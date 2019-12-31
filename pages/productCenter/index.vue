<template>
  <div>
    <my-carousel></my-carousel>
    <img src="../../assets/img/demo.png" alt="">
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
      title: this.title,
      meta: [
        { hid: 'description', name: 'description', content: 'product,产品中心，研发中心' }
      ]
    }
  },
  data () {
    return {
      title: '产品中心'
    }
  },
  mounted () {
    console.log(document.body.clientHeight)
  }
}
</script>

<style lang="scss">

</style>
