<template>
  <div class="body">
    <el-button @click="customClick">{{buttonTitle}}</el-button>
    <div class="log-cls">{{log}}</div>
  </div>
</template>

<script>
import xhbSdk from '../../utils/xhb-js-sdk.js'
export default {
  name: 'XHBParamsModule',
  props: ['customAction'],
  data () {
    return {
      log: '这里是显示的 log',
      buttonTitle: 'default',
      moduleAction: {
        module: 'XHBParamsModule',
        event: '',
        params: ''
      }
    }
  },
  watch: {
    customAction (res) {
      this.log = '这里是显示的 log'
      switch (res) {
        case '9-1':
          this.buttonTitle = 'getXpPrograms'
          this.moduleAction.event = 'getXpPrograms'
          break
        case '9-2':
          this.buttonTitle = 'getXpProgramsAsyn'
          this.moduleAction.event = 'getXpProgramsAsyn'
          break
        case '9-3':
          this.buttonTitle = 'getJsonParams'
          this.moduleAction.event = 'getJsonParams'
          break
      }
    }
  },
  methods: {
    async customClick () {
      this.log = await xhbSdk.useJsbridge(this.moduleAction)
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

