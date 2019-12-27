<template>
  <div>
    <div class="nav_bar">
      <div class="logo">
        <img src="../assets/img/demo.png" alt="">
      </div>
      <ul class="first_navBar">
        <li
          @click="changeTitle(item)"
          v-for="(item,index) in list"
          :key="index"
          @mouseenter="handlerMouseEnter($event,item)"
          @mouseleave="mouseLeaveLi($event,item)"
          class="every_tab"
          :class="item.status ? 'tab_select' : ''">
          <div>
            {{item.title}}
          </div>
          <div
            @mouseleave="handlerMouseLeave($event)"
            class="sub_everyTab"
            v-if="item.subTitle.length > 0 && subTitleFlag">
            <div
              @click="changeSubTitle($event,val,item.subTitle)"
              v-for="val in item.subTitle"
              :key="val.id"
              class="sub_sub_eve_tab"
              :class="val.status ? 'sub_tab_select' : ''">
              {{val.title}}
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
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
      this.list.map(item => {
        if (item.id == 2) {
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
    handlerMouseLeave (e) {
      // console.log(e.clientY)
      if (e.clientY > 80) {
        this.subTitleFlag = false
      }
      // console.log('-------')
    },
    mouseLeaveLi (e,val) {
      if (val.id != 2 || e.clientY < 0) {
        this.subTitleFlag = false
      }
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
        // console.log(this.$nuxt)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.nav_bar {
    position: fixed;
    // top: 10px;
    width: 100%;
    height: 60px;
    background: rgba(0,0,0,.2);
    z-index: 3;
    display: flex;
    justify-content: space-around;
    align-items: center;
    box-sizing: border-box;
    .logo {
      img {
        height: 60px;
        vertical-align: middle;
      }
    }
    .first_navBar {
      display: flex;
      justify-content: space-around;
      align-items: center;
      list-style: none;
      position: relative;
      box-sizing: border-box;
      .every_tab {
        padding: 0 20px;
        background: green;
        height: 60px;
        line-height: 60px;
        text-align: center;
        box-sizing: border-box;
        color:#000;
        font-size: 20px;
      }
      // .every_tab:hover {
      //   color: aqua;
      //   background: chartreuse;
      //   font-size: 30px;
      //   font-weight: bold;
      // }
      .tab_select {
        border-bottom: 2px solid pink;
        background: purple;
        color:hotpink;
      }
      .sub_everyTab {
        position: absolute;
        top: 80px;
        left: 34px;
        display: flex;
        justify-content: space-around;
        align-items: center;
        border: 1px solid red;
        // padding: 10px;
        .sub_sub_eve_tab {
          padding: 0 20px;
          background: green;
          height: 60px;
          line-height: 60px;
          text-align: center;
          box-sizing: border-box;
          color:#000;
          font-size: 20px;
        }
        .sub_tab_select {
          background: #000;
          color: #fff;
          border-bottom: 2px solid blue;
        }
      }
    }
  }
</style>
