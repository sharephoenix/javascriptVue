<template>
  <div class="body">
    <div @click="XHBDefault">XHBDefault</div>
  </div>
</template>

<script>
import xhbDefault from './xhb-default.js'
import xhbSdk from '../../utils/xhb-js-sdk.js'
export default {
  name: 'XHBDefault',
  methods: {
    XHBDefault () {
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
</style>

