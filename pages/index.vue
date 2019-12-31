<template>
  <div class="container">
    <home />
    <!-- <div>
      <nuxt-link to="/homePage">
        狗狗狗
      </nuxt-link>
      <el-button @click="handlerChange">
        啊哈哈哈哈哈哈
      </el-button>
    </div> -->
  </div>
</template>

<script>
import home from './homePage/index.vue'
import {
  entryActivities
} from '@/http/api/home.js'

export default {
  components: {
    home
  },
  head () {
    return {
      title: '首页',
      meta: [
        { hid: 'first', name: 'description', content: '首页，趣学英语，服务商合作，AI,product,产品中心，研发中心' }
      ]
    }
  },
  data () {
    return {
      subTitleFlag: false,
      list: [
        {
          id: 1,
          title: '首页',
          subTitle: [],
          status: true
        },
        {
          id: 2,
          title: '产品中心',
          subTitle: [
            {
              id: 1,
              title: '教研中心',
              status: true
            },
            {
              id: 2,
              title: 'AI',
              status: false
            },
            {
              id: 3,
              title: '定制服务',
              status: false
            }
          ],
          status: false
        },
        {
          id: 3,
          title: '品牌合作',
          subTitle: [],
          status: false
        },
        {
          id: 4,
          title: '我们是谁',
          subTitle: [],
          status: false
        },
      ]
    }
  },
  async asyncData (ctx) {
    // eslint-disable-next-line no-console
    // console.log('ssjsjsjsjsjsjj')
    // console.log(ctx.app.$api)
    const param = {}
    const res = await entryActivities(ctx.app.$api, param)
    // eslint-disable-next-line no-console
    console.log(res)
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
    changeTitle (val) {
      console.log('外面的按钮')
      this.list.map(item => {
        if (item.id == val.id) {
          item.status = true
        } else {
          item.status = false
        }
      })
      if (val.id == 1) {
        this.$router.push('/homePage')
      } else if (val.id == 2) {
        this.$router.push('/homePage')
      } else if (val.id == 3) {
        this.$router.push('/homePage')
      } else if (val.id == 4) {
        this.$router.push('/homePage')
      }
    },
    changeSubTitle (event,val,itemList) {
      event.preventDefault()
      event.stopPropagation()
      console.log('里面的按钮')
      itemList.map(item => {
        if (item.id == val.id) {
          item.status = true
        } else {
          item.status = false
        }
      })
      console.log(this.list)
      // this.$forceUpdate()
    },
    handlerMouseEnter (e,val) {
      if (val.id == 2) {
        this.subTitleFlag = true
      } else {
        this.subTitleFlag = false
      }
      // console.log(e,val)
    },
    handlerMouseLeave () {
      // console.log('-------')
      this.subTitleFlag = false
    },
    handlerChange () {
      this.$router.push('/homePage')
    },
    async getData () {
      this.$nextTick(() => {
        this.$nuxt.$loading.start()
      })
      const param = {}
      const res = await entryActivities(this.$api, param)
      // console.log(res)
      if (res.code) {
        // eslint-disable-next-line no-console
        // console.log(this.$nuxt)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.container {

}

</style>
