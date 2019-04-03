<template>
  <div class="body">
    <el-button @click="customClick">{{buttonTitle}}</el-button>
    <div class="log-cls">{{log}}</div>
  </div>
</template>

<script>
import xhbSdk from '../../utils/xhb-js-sdk.ts'
export default {
  name: 'XHBVideoModule',
  props: ['customAction'],
  data () {
    return {
      log: '需要自定义参数',
      buttonTitle: 'default',
      moduleAction: {
        module: 'XHBVideoModule',
        event: '',
        params: '' // "{"method": "get", "url": "", "params": "{"key": "value"}"}"
      }
    }
  },
  watch: {
    customAction (res) {
      this.log = '这里是显示的 log'
      if (res == '4-1') {
        this.buttonTitle = 'selectVideo'
        this.moduleAction.event = 'selectVideo'
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

