<template>
  <div class="my_sidebar">
    <div class="first" @click="handlerClick(1)">
      <div>
        <img class="side_img" src="../assets/img/demo.png" alt="">
        <div>服务号</div>
      </div>
    </div>
    <div class="second"  @click="handlerClick(2)">
      <div>
        <img class="side_img" src="../assets/img/demo.png" alt="">
        <div>电话咨询</div>
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

    }
  },
  methods: {
     handlerClick (val) {
       if (val == 1) {
         console.log(val)
       } else if (val == 2) {
         console.log(val)
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
  .first {
    height: 100px;
    width: 100px;
    background: pink;
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
