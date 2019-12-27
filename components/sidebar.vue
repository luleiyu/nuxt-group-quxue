<template>
  <div class="my_sidebar">
    <div class="first" @mouseenter="myMouseEnter" @mouseleave="myMouseLeave">
      <div>
        <img class="side_img" src="../assets/img/demo.png" alt="">
        <div>服务号</div>
      </div>
      <div
        v-show="qrcodeFlag"
        class="qrcode">
        <img style="width:100%;" src="../assets/img/demo.png" alt="">
      </div>
    </div>
    <div class="second" @click="handlerClick(2)">
      <div>
        <img class="side_img" src="../assets/img/demo.png" alt="">
        <div>电话咨询</div>
      </div>
      <div
        v-show="qrcodeFlag1"
        class="qrcode qrcode1">
        <img class="side_img" src="../assets/img/demo.png" alt="">
        <el-input v-model="userName" placeholder="请输入姓名"></el-input>
        <el-input v-model="userPhone" placeholder="请输入手机号"></el-input>
        <el-input v-model="userThinkAbout" placeholder="请输入咨询内容"></el-input>
      </div>
    </div>
    <div class="third"  @click="handlerClick(3)">
      <div>
        <img class="side_img" src="../assets/img/demo.png" alt="">
        <div>在线咨询</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      qrcodeFlag: false,
      qrcodeFlag1: false,
      userThinkAbout: '',
      userName: '',
      userPhone: ''
    }
  },
  methods: {
    myMouseEnter () {
      this.qrcodeFlag = true
      console.log('enter')
      this.qrcodeFlag1 = false
    },
    myMouseLeave () {
      this.qrcodeFlag = false
      this.qrcodeFlag1 = false
      console.log('leave')
    },
    handlerClick (val) {
      if (val == 1) {
        console.log(val)
      } else if (val == 2) {
        console.log(val)
        this.qrcodeFlag1 = true
      } else {
        console.log(val)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.my_sidebar {
  position: fixed;
  right: 0px;
  top: 30%;
  z-index: 11;
  text-align: center;
  .side_img {
    width: 50px;
  }
  .qrcode {
    background: red;
    width: 150px;
    height: 200px;
    position: absolute;
    top: 0px;
    left: -160px;
    z-index: 11;
  }
  .qrcode1 {
    background: pink;
    top: 10px;
  }
  .first {
    height: 100px;
    width: 100px;
    background: pink;
    position: relative;
  }
  .second {
    height: 100px;
    width: 100px;
    background: purple;
  }
  .third {
    height: 100px;
    width: 100px;
    background: orange;
  }
}
</style>
