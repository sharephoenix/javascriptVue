<template>
  <div class="body">
    <el-button @click="customClick">{{buttonTitle}}</el-button>
    <div class="log-cls">{{log}}</div>
  </div>
</template>

<script>
import XHBNavigation from './navigation-module.ts'
import xhbJsSdk from '../../utils/xhb-js-sdk.ts';

export default {
  name: 'XHBNavigation',
  props: ['customAction'],
  data () {
    return {
      moduleAction: {
        module: 'XHBNavigationModule',
        event: '',
        params: {url: String, title: String, imageUrl: String, content: String, imageBase64: 'Base64'}
      },
      buttonTitle: 'Default',
      log: '这里是显示的 log'
    }
  },
  watch: {
    log (res) {
      if (res === undefined || res === '') {
        this.log = '这里是显示的 log'
      }
    },
    customAction (res) {
      this.log = '这里是显示的 log'
      switch (res) {
        case '2-1': 
          this.buttonTitle = 'setTitle'
          this.moduleAction.event = 'setTitle'
          this.moduleAction.params = {title: '我的', color: '#ff0000'}
          break
        case '2-2': 
          this.buttonTitle = 'popToRoot'
          this.moduleAction.event = 'popToRoot'
          this.moduleAction.params = {}
          break
        case '2-3': 
          this.buttonTitle = 'close'
          this.moduleAction.event = 'close'
          this.moduleAction.params = {}
          break
        case '2-4': 
          this.buttonTitle = 'setBackgroundColor'
          this.moduleAction.event = 'setBackgroundColor'
          this.moduleAction.params = '#00ff00'
          break
        case '2-5': 
          this.buttonTitle = 'showBackItem'
          this.moduleAction.event = 'showBackItem'
          this.moduleAction.params = ''
          break
        case '2-6': 
          this.buttonTitle = 'hideBackItem'
          this.moduleAction.event = 'hideBackItem'
          this.moduleAction.params = ''
          break
        case '2-7': 
          this.buttonTitle = 'navigateTo'
          this.moduleAction.event = 'navigateTo'
          this.moduleAction.params = {
            path: '/zero.html',
            replace: 'replacefalse',
            params:{
              first: 'firstvalue',
              second: 'secondvalue'
            }}
          break
        case '2-8': 
          this.buttonTitle = 'changSafeArea'
          this.moduleAction.event = 'changSafeArea'
          this.moduleAction.params = {
            bottomColor: 'fff000',
            toHide: 'hide'
          }
          break
        case '2-9': 
          this.buttonTitle = 'getParams'
          this.moduleAction.event = 'getParams'
          this.moduleAction.params = ''
          break
        case '2-10': 
          this.buttonTitle = 'copyToPastboard'
          this.moduleAction.event = 'copyToPastboard'
          this.moduleAction.params = 'a;sdlkjfa;lskjdf;a'
          break
        case '2-11': 
          this.buttonTitle = 'closeCurrentPage'
          this.moduleAction.event = 'closeCurrentPage'
          this.moduleAction.params = 'a;sdlkjfa;lskjdf;a'
          break
        default: 
          this.buttonTitle = 'Default'
      }
    }
  },
  methods: {
    XHBDefault () {
      XHBNavigation.testAction()
    },
    async customClick () {
      this.log = await xhbJsSdk.useJsbridge(this.moduleAction) || '请填写相关方法参数'
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

