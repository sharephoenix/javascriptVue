<template>
  <div class="body">
    <el-button @click="customClick">{{buttonTitle}}</el-button>
    <div class="log-cls">{{log}}</div>
  </div>
</template>

<script>
import xhbSdk from '../../utils/xhb-js-sdk.js'
export default {
  name: 'XHBAudioPlayerModule',
  props: ['customAction'],
  data () {
    return {
      log: '不同的请求需要不同的参数哦！！！',
      buttonTitle: 'default',
      moduleAction: {
        module: 'XHBAudioPlayerModule',
        event: '',
        params: ''
      }
    }
  },
  watch: {
    customAction (res) {
      switch (res) {
        case '6-1':
          this.buttonTitle = 'registerStateSignal'
          this.moduleAction.event = 'registerStateSignal'
          break
        case '6-2':
          this.buttonTitle = 'getState'
          this.moduleAction.event = 'getState'
          break
        case '6-3':
          this.buttonTitle = 'play'
          this.moduleAction.event = 'play'
          this.log = '需要按照要求填写播放列表哦'
          break
        case '6-4':
          this.buttonTitle = 'pause'
          this.moduleAction.event = 'pause'
          break
        case '6-5':
          this.buttonTitle = 'resume'
          this.moduleAction.event = 'resume'
          break
        case '6-6':
          this.buttonTitle = 'stop'
          this.moduleAction.event = 'stop'
          break
        case '6-7':
          this.buttonTitle = 'next'
          this.moduleAction.event = 'next'
          break
        case '6-8':
          this.buttonTitle = 'last'
          this.moduleAction.event = 'last'
          break
      }
    }
  },
  methods: {
    async customClick () {
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

