<template>
  <div class="body">
    <el-button @click="customClick">{{buttonTitle}}</el-button>
    <div class="log-cls">{{log}}</div>
    <div class="log-cls">{{stateLog}}</div>
  </div>
</template>

<script>
import xhbSdk from '../../utils/xhb-js-sdk.ts'
export default {
  name: 'XHBAudioPlayerModule',
  props: ['customAction'],
  data () {
    return {
      log: '不同的请求需要不同的参数哦！！！',
      stateLog: '播放器状态',
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
      this.log = '这里是显示的 log'
      const playInfo = this.getPlayInfo()
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
          this.moduleAction.params = playInfo
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
      if (this.moduleAction.event === 'registerStateSignal') {
        this.observeCallback()
      }
      this.log = await xhbSdk.useJsbridge(this.moduleAction) || '请填写相关方法参数'
    },
    getPlayInfo () {
      return {"index": 0,
      "data": [
        {
          "id": "1",
          "title": "我是真的爱过你",
          "picUrl": "http://img3.imgtn.bdimg.com/it/u=2654568910,985787723&fm=26&gp=0.jpg",
          "musicUrl" : "https://link.hhtjim.com/163/509512959.mp3",
          "contentUrl": "https://www.baidu.com",
          "xpUrl": "",
          "duration": 0,
          "size": 0,
          "isManager": true
        }
      ]
      }
    },
    observeCallback () {
        window.WebViewJavascriptBridge.registerHandler('XHBAudioPlayerModule', (data) => {
          if (typeof info === 'string') {
            // eslint-disable-next-line
            console.log(info)
          }
          const { module, event, params } = JSON.parse(data)
          if (module === 'XHBAudioPlayerModule' && event === 'registerStateSignal') {
            const playingItem = params
            if (typeof playingItem === 'string') {
              this.stateLog = playingItem
            } else {
              this.stateLog = JSON.parse(playingItem)
            }
          }
        })
    }
  },
  mounted () {
    // stateLog
    // Window.WebViewJavascriptBridge(bridge => {
    //    bridge.registerHandler('XHBAudioPlayerModule', (res,) => {
    //       if (typeof res === 'string') {
    //         this.stateLog = res
    //       } else {
    //         this.stateLog = JSON.parse(res)
    //       }
    //     })
    // })
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

