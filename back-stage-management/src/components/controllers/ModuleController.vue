<template>
  <div>
    <div class="body">
    <el-header class="header">
      <div class="add-cls" @click="addAction">
        <p>添加</p>
      </div>
    </el-header>
    <el-container class="container">
      <div class="container-view">
        <template v-for="item in data">
          <module-cell 
          v-bind:key="item.moduleId"
          :moduleData="item"
          @editAction="editAction"
          @deleteAction="deleteAction"
          ></module-cell>
        </template>
      </div>
    </el-container>
  </div>
  </div>
</template>

<script lang="ts">

import {Component, Vue, Prop} from 'vue-property-decorator'
import {Module} from '../models/Module'
import ModuleCell from '../views/ModuleCell.vue'

@Component({
  components: {
    'module-cell': ModuleCell
  }
})
export default class ModuleController extends Vue {
  @Prop() private data!: Module[]
  mounted() {
  }

  editAction(message: Module): void {
    alert("编辑" + message.moduleId)
  }

  deleteAction(message: Module): void {
    alert("删除"  + message.moduleId)
  }

  addAction(): void {
    alert("添加")
  }
}
</script>

<style lang="scss" scoped>
$header-height: 33px;
$container-height: 600px;
  .body {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    background-color: green;
  }

  .header {
    display: absolute;
    height: $header-height;
    background-color: orange;
    .add-cls {
      float: right;
      width: 44px;
      height: 33px;
      transform: translateY(50%);
      line-height: 33px;
      vertical-align: middle;
      background-color: white;
    }
  }

  .container {
    display: block;
    width: 100%;
    height: $container-height;
    background-color: aqua;
    .container-view {
      display: block;
      width: 100%;
      background-color:gray;
      margin-top: 2px;
    }
  }
  
</style>
