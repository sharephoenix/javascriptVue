<template>
  <div class="body">
    <el-button @click="customClick">{{buttonTitle}}</el-button>
    <div class="log-cls">{{log}}</div>
  </div>
</template>

<script>
import xhbSdk from '../../utils/xhb-js-sdk.ts';

export default {
  name: 'XHBShare',
  props: ['customAction'],
  data () {
    return {
      log: '这里是显示的 log',
      buttonTitle: 'default',
      moduleAction: {
        module: 'XHBShare',
        event: '',
        params: {url: String, title: String, imageUrl: String, content: String, imageBase64: 'Base64'}
      }
    }
  },
  watch: {
    customAction (res) {
      this.log = '这里是显示的 log'
      const imgBase64 = this.getBase64()
      switch (res) {
        case '1-1': 
          this.buttonTitle = '微信分享'
          this.moduleAction.event = 'shareWeChat'
          this.moduleAction.params = {
              url: 'http://www.baidu.com',
              title: 'this is titld',
              imageUrl: 'https://tse1-mm.cn.bing.net/th?id=OIP.MuD55ahLvSLd7pdCLOLEcgHaE8&w=252&h=166&c=7&o=5&pid=1.7',
              imageBase64: imgBase64,
              content: 'this the content'
            }
          break
        case '1-2': 
          this.buttonTitle = '微信分享朋友圈'
          this.moduleAction.event = 'shareMoments'
          this.moduleAction.params = {
              url: 'http://www.baidu.com',
              title: 'this is titld',
              imageUrl: 'https://tse1-mm.cn.bing.net/th?id=OIP.MuD55ahLvSLd7pdCLOLEcgHaE8&w=252&h=166&c=7&o=5&pid=1.7',
              imageBase64: imgBase64,
              content: 'this the content'
            }
          break
        case '1-3': 
          this.buttonTitle = 'QQ分享'
          this.moduleAction.event = 'shareQQ'
          this.moduleAction.params = {
              url: 'http://www.baidu.com',
              title: 'this is titld',
              imageUrl: 'https://tse1-mm.cn.bing.net/th?id=OIP.MuD55ahLvSLd7pdCLOLEcgHaE8&w=252&h=166&c=7&o=5&pid=1.7',
              imageBase64: imgBase64,
              content: 'this the content'
            }
          break
        case '1-4': 
          this.buttonTitle = 'QQ空间分享'
          this.moduleAction.event = 'shareQZone'
          this.moduleAction.params = {
              url: 'http://www.baidu.com',
              title: 'this is titld',
              imageUrl: 'https://tse1-mm.cn.bing.net/th?id=OIP.MuD55ahLvSLd7pdCLOLEcgHaE8&w=252&h=166&c=7&o=5&pid=1.7',
              imageBase64: imgBase64,
              content: 'this the content'
            }
          break
        case '1-5': 
          this.buttonTitle = '分享到班级'
          this.moduleAction.event = 'shareClassroom'
          this.moduleAction.params = {
              url: 'http://www.baidu.com',
              title: 'this is titld',
              imageUrl: 'https://tse1-mm.cn.bing.net/th?id=OIP.MuD55ahLvSLd7pdCLOLEcgHaE8&w=252&h=166&c=7&o=5&pid=1.7'
            }
          break
      }
    }
  },
  methods: {
    async customClick () {
      if (this.moduleAction.event === '') {
        return
      }
      this.log = await xhbSdk.useJsbridge(this.moduleAction) || '请填写相关方法参数'
    },
    getBase64 () {
      return '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'
    }
  },
  mounted () {
  }
}
</script>

<style scoped>
  .body {
    background-color: lightgray;
    height: 100%;
    border-radius: 5px;
  }

  .log-cls {
    background-color: aliceblue;
    width: 100%;
  }
</style>

