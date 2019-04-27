<template>
  <div>
    <el-header class="header">
      <div class="logo"></div>
      <div class="logo"></div>
    </el-header>
    <el-container class="container">
      <el-aside class="left-aside" width="200px">
        <template v-for="item in modules">
          <div class="cell" v-bind:key="item.moduleId">asdf {{item.moduleId}}</div>
        </template>
      </el-aside>
      <el-main class="main">
          <module-controller class="module-cell" :data="modules"></module-controller>
      </el-main>
    </el-container>
    <el-footer class="footer">

    </el-footer>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue, Watch } from 'vue-property-decorator'
import ModuleController from './controllers/ModuleController.vue'
import {Module as ModuleModel} from './models/Module'

@Component({
  components: {
    'module-controller': ModuleController,
  },
})
export default class Main extends Vue {
  data: string = '我的 data'
  modules: ModuleModel[] = []

  @Prop() private msg!: string;
  
  toast(info: string) {
    this.data = this.data + 1
  }

  @Watch('data', {deep: true})
  updataData() {
    // eslint-disable-next-line
    console.log(this.data)
  } 

  created() {
    for(let i = 0; i<115; i++) {
      const item = new ModuleModel("" + i)
      item.moduleName = i + "name"
      item.moduleDisplayName = i + "displaname"
      this.modules[i] = item
    }
  }

  mounted () {
    
  }
}
</script>

<style lang="scss" scoped>
  $header-height: 64px;
  $container-height: 600px;
  $footer-height: 64px;
  .header {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    height: $header-height;
    width: 100%;
    background-color: #f2f2f2;
    .logo {
      width: 44px;
      height: 44px;
      background-image: url('../assets/logo.png');
      background-size: contain;
      background-color: #ee4499;
    }
  }
  .container {
    .left-aside {
      width: 45px;
      height: 100%;
      background-color: red;
      height: $container-height;
      .cell {
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: green;
        margin-top: 4px;
        height: 44px;
      }
    }
    .main {
      width: 100%;
      height: $container-height;
      background-color: blue;
      padding: 1px;
      .module-cell {
        margin-top: 1px;
      }
    }
  }
  .footer {
    margin-top: 2px;
    height: $footer-height;
    width: 100%;
    background-color: green;
  }
</style>
