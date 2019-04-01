<template>
  <div class="body">
    <el-button @click="customClick">{{buttonTitle}}</el-button>
    <div class="log-cls">{{log}}</div>
  </div>
</template>

<script>
import xhbSdk from '../../utils/xhb-js-sdk.js'
export default {
  name: 'XHBNetworkModule',
  props: ['customAction'],
  data () {
    return {
      log: '需要自定义参数',
      buttonTitle: 'default',
      moduleAction: {
        module: 'XHBNetworkModule',
        event: '',
        params: '' // "{"method": "get", "url": "", "params": "{"key": "value"}"}"
      }
    }
  },
  watch: {
    customAction (res) {
      if (res == '6-1') {
        this.buttonTitle = 'requestData'
        this.moduleAction.event = 'requestData'
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

