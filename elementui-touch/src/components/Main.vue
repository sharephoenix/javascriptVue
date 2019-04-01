<template>
  <div class="body">
    <el-container style="height: 500px; border: 1px solid #eee">
  <el-aside :width="asideWidth" class="left-menu-aside">
    <el-menu class="left-menu" :default-openeds="openMenu" @open="handleOpen" @select="handleNodeClick" :collapse="isCollapse">
      <el-submenu index="1" style="text-align:left;">
        <template slot="title"><i class="el-icon-menu "></i>{{isCollapse? '' : 'XHBShare'}}</template>
          <el-menu-item index="1-1">shareWeChat</el-menu-item>
          <el-menu-item index="1-2">shareMoments</el-menu-item>
          <el-menu-item index="1-3">shareQQ</el-menu-item>
          <el-menu-item index="1-4">shareQZone</el-menu-item>
      </el-submenu>
      <el-submenu index="2" style="text-align:left;">
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
      <el-submenu index="3" style="text-align:left;">
        <template slot="title"><i class="el-icon-menu"></i>{{isCollapse? '' : 'XHBLoginInfo'}}</template>
          <el-menu-item index="3-1">localUserInfoAsync</el-menu-item>
          <el-menu-item index="3-2">localUserInfo</el-menu-item>
      </el-submenu>
      <el-submenu index="4" style="text-align:left;">
        <template slot="title"><i class="el-icon-menu"></i>{{isCollapse? '' : 'XHBVideoModule'}}</template>
          <el-menu-item index="4-1">selectVideo</el-menu-item>
      </el-submenu>
      <el-submenu index="5" style="text-align:left;">
        <template slot="title"><i class="el-icon-menu"></i>{{isCollapse? '' : 'XHBNetworkModule'}}</template>
          <el-menu-item index="5-1">requestData</el-menu-item>
      </el-submenu>
      <el-submenu index="6" style="text-align:left;">
        <template slot="title"><i class="el-icon-menu"></i>{{isCollapse? '' : 'XHBAudioPlayerModule'}}</template>
          <el-menu-item index="6-1">registerStateSignal</el-menu-item>
          <el-menu-item index="6-2">getState</el-menu-item>
          <el-menu-item index="6-3">play</el-menu-item>
          <el-menu-item index="6-4">pause</el-menu-item>
          <el-menu-item index="6-5">resume</el-menu-item>
          <el-menu-item index="6-6">stop</el-menu-item>
          <el-menu-item index="6-7">next</el-menu-item>
          <el-menu-item index="6-8">last</el-menu-item>
      </el-submenu>
      <el-submenu index="7" style="text-align:left;">
        <template slot="title"><i class="el-icon-menu"></i>{{isCollapse? '' : 'XHBLocalWeb'}}</template>
          <el-menu-item index="7-1">getLocalUrl</el-menu-item>
      </el-submenu>
      <el-submenu index="8" style="text-align:left;">
        <template slot="title"><i class="el-icon-menu"></i>{{isCollapse? '' : 'XHBFileBrowseModule'}}</template>
          <el-menu-item index="8-1">openDocument</el-menu-item>
          <el-menu-item index="8-2">saveImageWithBase64String</el-menu-item>
          <el-menu-item index="8-3">selectImage</el-menu-item>
      </el-submenu>
      <el-submenu index="9" style="text-align:left;">
        <template slot="title"><i class="el-icon-menu"></i>{{isCollapse? '' : 'XHBParamsModule'}}</template>
          <el-menu-item index="9-1">getXpPrograms</el-menu-item>
          <el-menu-item index="9-2">getXpProgramsAsyn</el-menu-item>
          <el-menu-item index="9-3">getJsonParams</el-menu-item>
      </el-submenu>
      <el-submenu index="a" style="text-align:left;">
        <template slot="title"><i class="el-icon-menu"></i>{{isCollapse? '' : 'XHBMessage'}}</template>
          <el-menu-item index="a-1">forwardMessage</el-menu-item>
      </el-submenu>
      <el-submenu index="b" style="text-align:left;">
        <template slot="title"><i class="el-icon-menu"></i>{{isCollapse? '' : 'XHBFileUploadModule'}}</template>
          <el-menu-item index="b-1">uploadFile</el-menu-item>
      </el-submenu>
      <el-submenu index="c" style="text-align:left;">
        <template slot="title"><i class="el-icon-menu"></i>{{isCollapse? '' : 'XHBAudioModule'}}</template>
          <el-menu-item index="c-1">selectAudio</el-menu-item>
      </el-submenu>
      <el-submenu index="d" style="text-align:left;">
        <template slot="title"><i class="el-icon-menu"></i>{{isCollapse? '' : 'XHBAPPDeviceInfo'}}</template>
          <el-menu-item index="d-1">getDeviceInfoAsyn</el-menu-item>
          <el-menu-item index="d-2">getDeviceInfo</el-menu-item>
      </el-submenu>
      <el-submenu index="e" style="text-align:left;">
        <template slot="title"><i class="el-icon-menu"></i>{{isCollapse? '' : 'XHBScan'}}</template>
          <el-menu-item index="e-1">scanCodeInfo</el-menu-item>
      </el-submenu>
      <el-submenu index="f" style="text-align:left;">
        <template slot="title"><i class="el-icon-menu"></i>{{isCollapse? '' : 'XHBRouter'}}</template>
          <el-menu-item index="f-1">openPage</el-menu-item>
      </el-submenu>
      <el-submenu index="g" style="text-align:left;">
        <template slot="title"><i class="el-icon-menu"></i>{{isCollapse? '' : 'storage'}}</template>
          <el-menu-item index="g-1">setItem</el-menu-item>
          <el-menu-item index="g-2">getItem</el-menu-item>
          <el-menu-item index="g-3">removeItem</el-menu-item>
      </el-submenu>
      <el-submenu index="0" style="text-align:left;">
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
      <XHBVideo :customAction="menuSelectedIndex" v-show="menuSelectedIndex.substring(0, 1) === '4'"></XHBVideo>
      <XHBNetwork :customAction="menuSelectedIndex" v-show="menuSelectedIndex.substring(0, 1) === '5'"></XHBNetwork>
      <XHBAudioPlayer :customAction="menuSelectedIndex" v-show="menuSelectedIndex.substring(0, 1) === '6'"></XHBAudioPlayer>
      <XHBLocalWeb :customAction="menuSelectedIndex" v-show="menuSelectedIndex.substring(0, 1) === '7'"></XHBLocalWeb>
      <XHBBrowseModule :customAction="menuSelectedIndex" v-show="menuSelectedIndex.substring(0, 1) === '8'"></XHBBrowseModule>
      <XHBParams :customAction="menuSelectedIndex" v-show="menuSelectedIndex.substring(0, 1) === '9'"></XHBParams>
      <XHBForwardMessage :customAction="menuSelectedIndex" v-show="menuSelectedIndex.substring(0, 1) === 'a'"></XHBForwardMessage>
      <XHBFileUploadModule :customAction="menuSelectedIndex" v-show="menuSelectedIndex.substring(0, 1) === 'b'"></XHBFileUploadModule>
      <XHBAudioModule :customAction="menuSelectedIndex" v-show="menuSelectedIndex.substring(0, 1) === 'c'"></XHBAudioModule>
      <XHBAppDevice :customAction="menuSelectedIndex" v-show="menuSelectedIndex.substring(0, 1) === 'd'"></XHBAppDevice>
      <XHBScan :customAction="menuSelectedIndex" v-show="menuSelectedIndex.substring(0, 1) === 'e'"></XHBScan>
      <XHBRouter :customAction="menuSelectedIndex" v-show="menuSelectedIndex.substring(0, 1) === 'f'"></XHBRouter>
      <XHBStorage :customAction="menuSelectedIndex" v-show="menuSelectedIndex.substring(0, 1) === 'g'"></XHBStorage>
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
  import XHBVideo from '../views/xhb-video-module/XHBVideo.vue'
  import XHBNetwork from '../views/xhb-network/XHBNetwork.vue'
  import XHBAudioPlayer from '../views/xhb-audio-player/XHBAudioPlayert.vue'
  import XHBLocalWeb from '../views/xhb-weblocal/XHBWeblocal.vue'
  import XHBBrowseModule from '../views/xhb-browse-module/XHBBrowseModule.vue'
  import XHBParams from '../views/xhb-params-module/XHBParams.vue'
  import XHBForwardMessage from '../views/xhb-forward-message/XHBForwardMessage.vue'
  import XHBFileUploadModule from '../views/xhb-upload-module/XHBUploadModule.vue'
  import XHBAudioModule from '../views/xhb-audio-module/XHBAudioModule.vue'
  import XHBAppDevice from '../views/xhb-appdevice-module/XHBAppDevice.vue'
  import XHBScan from '../views/xhb-scan-module/XHBScan.vue'
  import XHBRouter from '../views/xhb-routers/XHBRoutes.vue'
  import XHBStorage from '../views/xhb-storage/XHBStorage.vue' 
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
        openMenu: ['0'],
        isCollapse: false,
        asideWidth: '150pt'
      }
    },
    watch: {
      isCollapse (res) {
        if (res) {
          this.asideWidth = '50pt'
        } else {
          this.asideWidth = '150pt'
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
      XHBVideo,
      XHBNetwork,
      XHBAudioPlayer,
      XHBLocalWeb,
      XHBBrowseModule,
      XHBParams,
      XHBForwardMessage,
      XHBFileUploadModule,
      XHBAudioModule,
      XHBAppDevice,
      XHBScan,
      XHBRouter,
      XHBStorage,
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
    /* height: 33px;
    line-height: 33px; */
  }

  div el-submenu i{
    word-wrap: break-word;
  }
</style>

