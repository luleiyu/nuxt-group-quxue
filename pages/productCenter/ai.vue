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

</style>
