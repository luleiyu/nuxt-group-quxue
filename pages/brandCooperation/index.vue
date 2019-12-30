<template>
  <div class="brand_quxue">
    <my-carousel></my-carousel>
    <div>
      <div
        @mouseenter="imgDialogCover(val)"
        @mouseleave="imgLeaveDialogCover(val)"
        class="parent_div"
        v-for="(val,index) in imgListContent"
        :key="index">
        <img style="vertical-align:middle;" src="../../assets/img/demo.png" alt="">
        <div v-if="val.status" class="inner_content">
          <div>{{val.title}}</div>
          <div>{{val.content}}</div>
        </div>
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
      imgListContent: [
        {
          id: 1,
          src: '',
          title: '趣学Talk',
          content: '以语言能力训练为主，强调情景对话的 “听说为先”，以对话、单词、句型的听力和口语训 练为核心训练内容，提供跟读练习和角色扮演学习环节。',
          status: false
        },
        {
          id: 2,
          src: '',
          title: '趣学Talk',
          content: '以语言能力训练为主，强调情景对话的 “听说为先”，以对话、单词、句型的听力和口语训 练为核心训练内容，提供跟读练习和角色扮演学习环节。',
          status: false
        },
        {
          id: 3,
          src: '',
          title: '趣学Talk',
          content: '以语言能力训练为主，强调情景对话的 “听说为先”，以对话、单词、句型的听力和口语训 练为核心训练内容，提供跟读练习和角色扮演学习环节。',
          status: false
        },
        {
          id: 4,
          src: '',
          title: '趣学Talk',
          content: '以语言能力训练为主，强调情景对话的 “听说为先”，以对话、单词、句型的听力和口语训 练为核心训练内容，提供跟读练习和角色扮演学习环节。',
          status: false
        },
      ]
    }
  },
  mounted () {
    console.log(document.body.clientHeight)
  },
  methods: {
    imgDialogCover (val) {
      this.imgListContent.map(item => {
        if (val.id == item.id) {
          item.status = true
        } else {
          item.status = false
        }
      })
    },
    imgLeaveDialogCover (val) {
      this.imgListContent.map(item => {
        if (val.id == item.id) {
          item.status = false
        } else {
          // item.status = false
        }
      })
    },
  }
}
</script>

<style lang="scss">
.brand_quxue {
  .parent_div {
    text-align:center;
    margin: 10px 0;
    border: 1px solid red;
    position: relative;
    .inner_content {
      position: absolute;
      z-index: 1;
      left: 0;
      top: 0;
      background: red;
      height: 502px;
      width: 100%;
    }
  }
}
</style>
