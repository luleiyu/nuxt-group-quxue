<template>
  <div>
    <my-header></my-header>
    <nuxt />
    <my-sidebar></my-sidebar>
    <my-footer></my-footer>
  </div>
</template>

<script>
import myHeader from '@/components/header'
import myFooter from '@/components/footer'
import mySidebar from '@/components/sidebar'

import {
  entryActivities
} from '@/http/api/home.js'

export default {
  components: {
    myHeader,
    myFooter,
    mySidebar
  },
  data () {
    return {

    }
  },
  async asyncData (ctx) {
    // console.log('ssjsjsjsjsjsjj')
    // console.log(ctx.app.$api)
    // const param = {}
    // const res = await entryActivities(ctx.app.$api, param)

    // console.log(res)
  },
  fetch (ctx) {
    // console.log(ctx)
  },
  created () {

  },
  mounted () {
    this.$nextTick(() => {
      this.getData()
    })
    setTimeout(() => {
      this.$nuxt.$loading.finish()
    }, 5000)
  },
  methods: {
    async getData () {
      this.$nextTick(() => {
        this.$nuxt.$loading.start()
      })
      const param = {}
      const res = await entryActivities(this.$api, param)
      // console.log(res)
      if (res.code) {
        // console.log(this.$nuxt)
      }
    }
  }
}
</script>

<style lang="scss">
html,body,ul,li {
  margin: 0;
  padding: 0;
}
</style>
