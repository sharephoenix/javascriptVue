<template>
  <div class="body">
    <el-button @click="customClick">{{buttonTitle}}</el-button>
    <div class="log-cls">{{log}}</div>
  </div>
</template>

<script>
import xhbSdk from '../../utils/xhb-js-sdk.js'
export default {
  name: 'XHBDefault',
  props: ['customAction'],
  data () {
    return {
      buttonTitle: 'Default',
      log: '这里是显示的 log',
      moduleAction: {
        module: 'XHBLoginInfo',
        event: '',
        params: ''
      },
    }
  },
  watch: {
    log (res) {
      if (res === undefined || res === '') {
        this.log = '这里是显示的 log'
      }
    },
    customAction (res) {
      this.log = ''
      switch (res) {
        case '3-1':
          this.buttonTitle = 'localUserInfoAsync'
          this.moduleAction.event = 'localUserInfoAsync'
          break
        case '3-2':
          this.buttonTitle = 'localUserInfo'
          this.moduleAction.event = 'localUserInfo'
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
    word-wrap: break-word;
  }
</style>

