<template>
<div class="footer">
  <div class="footer_leiyu">
    <div class="sub_footer">
      <div class="first">
        <div class="title_color">
          服务协议
        </div>
        <div
          @click="everySeverEvent(item)"
          class="title_color"
          v-for="item in serveList"
          :key="item.id">
          {{item.title}}
        </div>
      </div>
      <div class="second">
        <div class="title_color">联系方式</div>
        <div class="title_color"
          v-for="val in telMeList"
          :key="val.id">
          <div>
            <span>{{val.title}}</span>
            <span>{{val.tel}}</span>
            <span>{{val.subTitle}}</span>
          </div>
        </div>
      </div>
      <div class="third">
        <img src="../assets/img/demo.png" alt="">
      </div>
    </div>
    <div class="title_color">
      Copyright@2011-2017 趣学世界 All Rights reserved.版权所有
    </div>
  </div>
  <div class="sub_footer_leiyu" v-if="showFlag">
    <div class="first">
      <img src="../assets/img/demo.png" alt="">
      <span>免费领取全年办校方案</span>
    </div>
    <div class="second">
      <el-input
        class="sec_input"
        v-model="phone"
        maxlength="11"
        placeholder="请输入您的手机号"></el-input>
    </div>
    <el-button
      class="third"
      @click="buttonClick"
      :type="primaryFlag"
      :disabled="disabledFlag">立即领取</el-button>
  </div>
  <div style="height:100px;width:100%;"></div>
</div>
</template>

<script>
import {
  validatPhone
} from '@/utils/validate'

export default {
  data () {
    return {
      phone: '',
      serveList: [
        {
          id: 1,
          title: '用户协议',
        },
        {
          id: 2,
          title: '隐私政策',
        },
        {
          id: 3,
          title: '收费标准',
        },
        {
          id: 4,
          title: '购买须知',
        },
      ],
      telMeList: [
        {
          id: 1,
          title: '服务热线',
          tel: '400-550-2928',
          subTitle: '(周一至周五 9:00-18:00)'
        },
        {
          id: 2,
          title: '邮箱',
          tel: 'bd@quxueabc.com'
        },
        {
          id: 3,
          title: '联系地址',
          subTitle: '北京市海淀区中关村南大街31号神舟大厦10层1008'
        }
      ],
      showFlag: false,
      disabledFlag: true,
      primaryFlag: ''
    }
  },
  watch: {
    phone (val) {
      var reg = /^[1][0-9]{10}$/
      console.log(reg.test(val))
      if (reg.test(val)) {
        this.disabledFlag = false
        this.primaryFlag = 'primary'
      } else {
        this.disabledFlag = true
        this.primaryFlag = ''
      }
    }
  },
  created () {

  },
  mounted () {
    document.addEventListener('scroll', e => {
      if (document.documentElement.scrollTop < 500) {
        this.showFlag = false
      } else {
        this.showFlag = true
      }
    })
  },
  methods: {
    everySeverEvent (val) {
      console.log(val)
    },
    buttonClick () {
      console.log('获取资料')
      this.$message({
        showClose: true,
        message: '恭喜您领取成功，我们会有专人尽快联系您',
        type: 'success',
        duration: 5000
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.footer {
  .footer_leiyu {
    background: #000;
    width: 100%;
    height: 220px;
    text-align: center;
    .title_color {
      color:#fff;
      cursor: pointer;
    }
    .sub_footer {
      display: flex;
      align-items: center;
      .first {
        width: 40%
      }
      .second {
        width: 40%
      }
      .third {
        width: 180px;
        img {
          width: 100%;
          vertical-align: middle;
        }
      }
    }

  }
  .sub_footer_leiyu {
    width: 100%;
    height: 100px;
    background: pink;
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    z-index: 4;
    bottom: 0px;
    .first {
      width: 40%;
      img {
        width: 80px;
        vertical-align: middle;
      }
    }
    .second {
      width: 40%;
      .sec_input {
        width: 250px;
        font-size: 18px;
      }
    }
    .third {
      border-radius: 30px;
      font-size: 20px;
    }
  }
}
</style>

<style lang="scss">
.el-input__inner {
  border-radius: 20px!important;
}
</style>
