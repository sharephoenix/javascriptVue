<template>
  <div class="body">
    <el-button @click="customClick">{{buttonTitle}}</el-button>
    <div class="log-cls">{{log}}</div>
  </div>
</template>

<script>
import xhbSdk from '../../utils/xhb-js-sdk.ts'
export default {
  name: 'storage',
  props: ['customAction'],
  data () {
    return {
      log: '这里是显示的 log',
      buttonTitle: 'default',
      moduleAction: {
        module: 'storage',
        event: '',
        params: ''
      }
    }
  },
  watch: {
    customAction (res) {
      this.log = '这里是显示的 log'
      switch (res) {
        case 'g-1':
          this.buttonTitle = 'setItem'
          this.moduleAction.event = 'setItem'
          this.moduleAction.params = {name: 'alexluan'}
          break
        case 'g-2':
          this.buttonTitle = 'getItem'
          this.moduleAction.event = 'getItem'
          this.moduleAction.params = 'name'
          break
        case 'g-3':
          this.buttonTitle = 'removeItem'
          this.moduleAction.event = 'removeItem'
          this.moduleAction.params = 'name'
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

