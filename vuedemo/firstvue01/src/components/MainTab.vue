<template>
    <div class="content">
      <div class="contentpage">
        <div class="pageNavbar"> navator </div>
        content
      </div>
      <div class="tabbarBottom">
        <TabbarItem class="tabbar" id=1111111 subtitle="subtitle1"></TabbarItem>
        <TabbarItem class="tabbar" id=222222 subtitle="subtitle2"></TabbarItem>
        <TabbarItem class="tabbar" id=333333 subtitle="subtitle3"></TabbarItem>
        <TabbarItem class="tabbar" id=333333 subtitle="subtitle3"></TabbarItem>
      </div>
    </div>
</template>

<script>

import tabbarItem from './tabbar-item'

export default {
  name: 'MainTab',
  data () {
    return {content: 'this is my content'}
  },
  methods: {
    action: function () {
      console.log('this is my action ')
    }
  },
  components: {
    'TabbarItem': tabbarItem
  }
}
</script>

<style scoped>
  .content {
    position: static;
    height: 100%;
    width: 100%;

    background-color: aqua;
  }
  .contentpage {
    position: absolute;
    width: 100%;
    top: 0px;
    bottom: 64px;
    z-index: 99;
    background-color: orange;
  }
  .pageNavbar {
    width: 100%;
    height: 64px;
    background-color: aliceblue;
  }
  .tabbarBottom {
    position: absolute;
    width: 100%;
    bottom: 0px;
    display: flex;
    flex-direction: row;
    height: 64px;
    justify-content: space-between;
    align-items: flex-start;
    background-color: aqua;
    padding: 2px;
    margin-right: 5px;
  }
  .tabbar {
    background-color: antiquewhite;
  }
</style>
