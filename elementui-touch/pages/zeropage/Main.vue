<template>
  <div>
    <div>{{computedMsg}}</div>
    <div>==={{msg}}===</div>
    <MainView></MainView>
  </div>
</template>

<script lang="ts">

import MainView from './views/Main.vue'
import { Component, Vue, Watch, Prop, Model, Emit} from 'vue-property-decorator';

@Component
export default class Main extends Vue {
  
  log: string = ''
  msg: string = ''
  change: boolean = false

  @Prop(Number) readonly propA!: number
  @Prop({ default: 'default value' }) readonly propB!: string
  @Prop([String, Boolean]) readonly propC!: string | boolean

  get computedMsg () {
    return 'xxxxxx' + ' ' + this.$data.log
  }

  @Model('change', { type: Boolean }) readonly checked!: boolean
  
  @Watch('log')
  onChildChanged(val: string, oldVal: string) {
    this.$data.msg = '+++++++++' + val + '+++++++++'
  }

  count = 0

  @Emit()
  addToCount(n: number) {
    this.count += n
  }

  @Emit('reset')
  resetCount() {
    this.count = 0
  }

  @Emit()
  returnValue() {
    return 10
  }

  @Emit()
  promise() {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(20)
      }, 0)
    })
  }

  mounted () {
    // alert(JSON.stringify(this.$data))
    this.$data.log = 'asdfadsf'
    this.$data.msg = 'fff'
    //获取Location对象的search属性值
    var searchStr = location.search
    //由于searchStr属性值包括“?”，所以除去该字符
    searchStr = searchStr.substr(1)
    //将searchStr字符串分割成数组，数组中的每一个元素为一个参数和参数值
    var searchs = searchStr.split("&")
    this.$data.log = JSON.stringify(searchs)
  }
  
}
</script>

