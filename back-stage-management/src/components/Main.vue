<template>
  <div @click="toast('哈哈哈')">
    haahha ss {{data}}
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue, Watch } from 'vue-property-decorator'
@Component
export default class Main extends Vue {
  data: string = '我的 data'
  @Prop() private msg!: string;
  
  toast(info: string) {
    this.data = this.data + 1
  }

  @Watch('data', {deep: true})
  updataData() {
    // eslint-disable-next-line
    console.log(this.data)
  } 

  mounted () {
  }
}
</script>
