<template>
  <div class="body">
    <el-container style="height: 500px; border: 1px solid #eee">
  <el-aside width="200px" class="left-menu">
    <el-menu :default-openeds="openMenu" @open="handleOpen" @select="handleNodeClick">
      <el-submenu index="1">
        <template slot="title"><i class="el-icon-menu"></i>XHBShare</template>
          <el-menu-item index="1-1">shareWeChat</el-menu-item>
          <el-menu-item index="1-2">shareMoments</el-menu-item>
          <el-menu-item index="1-3">shareQQ</el-menu-item>
          <el-menu-item index="1-4">shareQZone</el-menu-item>
      </el-submenu>
      <el-submenu index="2">
        <template slot="title"><i class="el-icon-menu"></i>XHBNavigationModule</template>
          <el-menu-item index="2-1">setTitle</el-menu-item>
          <el-menu-item index="2-2" disabled>popToRoot</el-menu-item>
          <el-menu-item index="2-3" disabled>close</el-menu-item>
          <el-menu-item index="2-4">setBackgroundColor</el-menu-item>
          <el-menu-item index="2-5" disabled>showBackItem</el-menu-item>
          <el-menu-item index="2-6" disabled>hideBackItem</el-menu-item>
          <el-menu-item index="2-7">navigateTo</el-menu-item>
          <el-menu-item index="2-8">changSafeArea</el-menu-item>
          <el-menu-item index="2-9">getParams</el-menu-item>
      </el-submenu>
      <el-submenu index="3">
        <template slot="title"><i class="el-icon-menu"></i>XHBLoginInfo</template>
          <el-menu-item index="3-1">localUserInfoAsync</el-menu-item>
          <el-menu-item index="3-2">localUserInfo</el-menu-item>
      </el-submenu>
      <el-submenu index="0">
        <template slot="title"><i class="el-icon-menu"></i>XHBDefault</template>
          <el-menu-item index="0-1">Default</el-menu-item>
      </el-submenu>
    </el-menu>
  </el-aside>
  
  <el-container>
    <el-header style="text-align: right; font-size: 12px">
      <span @click="touchMe">touch</span>
    </el-header>
    
    <el-main>
      <XHBShare :customAction="menuSelectedIndex" v-show="menuSelectedIndex.substring(0, 1) === '1'"></XHBShare>
      <NavigationModule :customAction="menuSelectedIndex" v-show="menuSelectedIndex.substring(0, 1) === '2'"></NavigationModule>
      <XHBLoginInfo :customAction="menuSelectedIndex" v-show="menuSelectedIndex.substring(0, 1) === '3'"></XHBLoginInfo>
      <XHBDefault v-show="menuSelectedIndex.substring(0, 1) === '0'"></XHBDefault>
    </el-main>
  </el-container>
</el-container>
  </div>
</template>

<script>
  import XHBShare from '../views/xhb-share/XHBShare.vue'
  import NavigationModule from '../views/xhb-navigation-module/NavigationModule.vue'
  import XHBLoginInfo from '../views/xhb-logininfo/XHBLoginInfo.vue'
  import XHBDefault from '../views/default/XHBDefault.vue'
  export default {
    data() {
      const item = {
        date: '2019-03-20',
        name: 'touch',
        address: '上海市普陀区'
      };
      return {
        tableData: Array(20).fill(item),
        menuSelectedIndex: '1',
        openMenu: ['1']
      }
    },
    methods: {
      touchMe () {
        // eslint-disable-next-line 
        console.log('touch me!!!')
      },
      handleOpen (res) {
        // eslint-disable-next-line 
        console.log(JSON.stringify(res))
      },
      handleNodeClick (res) {
        this.menuSelectedIndex = res
      }
    },
    mounted () {
    },
    components: {
      XHBShare,
      NavigationModule,
      XHBLoginInfo,
      XHBDefault
    }
  }
</script>


<style>
  .body {
    widows: 100%;
    background-color: f2f2f2;
  }

  .el-header {
    background-color: #B3C0D1;
    color: #333;
    line-height: 60px;
  }
  
  .el-aside {
    color: #333;
  }

  .left-menu{
    background-color: rgb(238, 241, 246);
    text-align: left;
  }
</style>

