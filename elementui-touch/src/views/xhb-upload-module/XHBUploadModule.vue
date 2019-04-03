<template>
  <div class="body">
    <el-button @click="customClick">{{buttonTitle}}</el-button>
    <div class="log-cls">{{log}}</div>
  </div>
</template>

<script>
import xhbSdk from '../../utils/xhb-js-sdk.ts'
export default {
  name: 'XHBFileUploadModule',
  props: ['customAction'],
  data () {
    return {
      log: '这里是显示的 log',
      buttonTitle: 'default',
      moduleAction: {
        module: 'XHBFileUploadModule',
        event: '',
        params: ''
      }
    }
  },
  watch: {
    customAction (res) {
      this.log = '这里是显示的 log'
      if (res === 'b-1') {
        this.buttonTitle = 'uploadFile'
        this.moduleAction.event = 'uploadFile'
        this.moduleAction.params = {
          event: 'voice', // voice \ word
          bucketName: '',
          url: ''
        }
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

