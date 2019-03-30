<template>
  <div class="body">
    <el-button @click="customClick">{{buttonTitle}}</el-button>
    <div class="log-cls">{{log}}</div>
  </div>
</template>

<script>
import xhbDefault from './xhb-default.js'
import xhbSdk from '../../utils/xhb-js-sdk.js'
export default {
  name: 'XHBDefault',
  data () {
    return {
      buttonTitle: '',
      log: ''
    }
  },
  methods: {
    customClick () {
      xhbDefault.testAction()
      xhbSdk.useJsbridge({})
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

