<template>
  <div class="body">
    <el-button @click="customClick">{{buttonTitle}}</el-button>
    <div class="log-cls">{{log}}</div>
  </div>
</template>

<script>
import xhbSdk from '../../utils/xhb-js-sdk.js'
export default {
  name: 'XHBFileBrowseModule',
  props: ['customAction'],
  data () {
    return {
      log: '这里是显示的 log',
      buttonTitle: 'default',
      moduleAction: {
        module: 'XHBFileBrowseModule',
        event: '',
        params: ''
      }
    }
  },
  watch: {
    customAction (res) {
      switch (res) {
        case '8-1':
          this.buttonTitle = 'openDocument'
          this.moduleAction.event = 'openDocument'
          break
        case '8-2':
          this.buttonTitle = 'saveImageWithBase64String'
          this.moduleAction.event = 'saveImageWithBase64String'
          break
        case '8-3':
          this.buttonTitle = 'selectImage'
          this.moduleAction.event = 'selectImage'
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

