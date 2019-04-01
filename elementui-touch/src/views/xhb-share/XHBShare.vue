<template>
  <div class="body">
    <el-button @click="customClick">{{buttonTitle}}</el-button>
    <div class="log-cls">{{log}}</div>
  </div>
</template>

<script>
import xhbSdk from '../../utils/xhb-js-sdk.js';

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
      switch (res) {
        case '1-1': 
          this.buttonTitle = '微信分享'
          this.moduleAction.event = 'shareWeChat'
          break
        case '1-2': 
          this.buttonTitle = '微信分享朋友圈'
          this.moduleAction.event = 'shareMoments'
          break
        case '1-3': 
          this.buttonTitle = 'QQ分享'
          this.moduleAction.event = 'shareQQ'
          break
        case '1-4': 
          this.buttonTitle = 'QQ空间分享'
          this.moduleAction.event = 'shareQZone'
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

