<template>
  <div class="body">
    <el-container style="height: 500px; border: 1px solid #eee">
  <el-aside :width="asideWidth" class="left-menu-aside">
    <el-menu class="left-menu" :default-openeds="openMenu" @open="handleOpen" @select="handleNodeClick" :collapse="isCollapse">
      <el-submenu index="1">
        <template slot="title"><i class="el-icon-menu "></i>{{isCollapse? '' : 'XHBShare'}}</template>
          <el-menu-item index="1-1">shareWeChat</el-menu-item>
          <el-menu-item index="1-2">shareMoments</el-menu-item>
          <el-menu-item index="1-3">shareQQ</el-menu-item>
          <el-menu-item index="1-4">shareQZone</el-menu-item>
      </el-submenu>
      <el-submenu index="2">
        <template slot="title"><i class="el-icon-menu"></i>{{isCollapse? '' : 'XHBNavigationModule'}}</template>
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
        <template slot="title"><i class="el-icon-menu"></i>{{isCollapse? '' : 'XHBLoginInfo'}}</template>
          <el-menu-item index="3-1">localUserInfoAsync</el-menu-item>
          <el-menu-item index="3-2">localUserInfo</el-menu-item>
      </el-submenu>
      <el-submenu index="0">
        <template slot="title"><i class="el-icon-menu"></i>{{isCollapse? '' : 'XHBDefault'}}</template>
          <el-menu-item index="0-1">Default</el-menu-item>
      </el-submenu>
    </el-menu>
  </el-aside>
  
  <el-container>
    <el-header class="container-header">
      <el-button  type="primary" circle class="show-hide-button" @click="toCollapse">{{isCollapse ? 'Show' : 'Hide'}}</el-button>
      <div><span @click="touchMe">touch</span></div>
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
        openMenu: ['1'],
        isCollapse: true,
        asideWidth: '50pt'
      }
    },
    watch: {
      isCollapse (res) {
        if (res) {
          this.asideWidth = '50pt'
        } else {
          this.asideWidth = '100pt'
        }
      }
    },
    methods: {
      toCollapse () {
        this.isCollapse = !this.isCollapse
      },
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

  .eft-menu-aside{
    background-color: rgb(238, 241, 246);
    text-align: left;
  }

  .left-menu {
  }

  el-submenu {
    justify-content: flex-start;
    align-items: flex-start;
  }

  .container-header {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    text-align: right; 
    font-size: 12px
  }

  .show-hide-button {
    /* height: 33px; */
    /* line-height: 33px; */
  }

  div el-submenu i{
    word-wrap: break-word;
  }
</style>

