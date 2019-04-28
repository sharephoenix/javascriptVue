<template>
  <!-- <div class="body"> -->
    <div class="body-container">
      <div class="left-operation">
        <div class="input-cls cls-1" placeholder="moduleId">{{moduleId}}</div>
        <div class="input-cls cls-2" placeholder="moduleName">{{moduleName}}</div>
        <div class="input-cls cls-2" placeholder="moduleDisplayName">{{moduleDisplayName}}</div>
      </div>
      <div class="right-operation">
        <div class="button-cls" @click="editAction">编辑</div>
        <div class="button-cls" @click="deleteAction">删除</div>
      </div>
    </div>
  <!-- </div> -->
</template>

<script lang="ts">
import {Component, Vue, Prop, Watch} from 'vue-property-decorator'
import {Module} from '../models/Module'

@Component
export default class ModuleCell extends Vue {
  @Prop() private moduleData!: Module

  get moduleId () {
    console.log(this.moduleData)
    return this.moduleData.moduleId || 'undefine'
  }

  get moduleName () {
    return this.moduleData.moduleName || 'undefine'
  }

  get moduleDisplayName () {
    return this.moduleData.moduleDisplayName || 'undefine'
  }

  @Watch('moduleData', {deep: true}) 
  moduleDataChange() {
  }

  editAction() {
    this.$emit('editAction', this.moduleData)
  }

  deleteAction() {
    this.$emit('deleteAction', this.moduleData)
  }
}
</script>

<style lang="scss" scoped>
$cellheight: 44px;
  // .body {
  //   display: flex;
  //   flex-direction: row;
  //   justify-content: flex-start;
  //   align-items: center;
  //   background-color: gray;
    .body-container {
      margin-top: 3px;
      margin-bottom: 3px;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      width: 100%;
      height: $cellheight;
      align-items: center;
      background-color: red;
      border: 1px solid red;
      .left-operation {
        display: flex;
        justify-content: space-between;
        background-color: black;
        flex-grow: 1;
        .input-cls {
          height: 44px;
          color: red;
          line-height: 44px;
          text-align: left;
          margin-left: 1px;
          margin-right: 1px;
          background-color: white;
        }
        .cls-1 {
          flex:1;
        }
        .cls-2 {
          flex:2;
        }
      }
      
      .right-operation {
        display: flex;
        justify-content: space-around;
        background-color: white;
        align-items: center;
        width: 167px;
        height: $cellheight;
        .button-cls {
          display: inline-block;
          width: 66px;
          height: $cellheight - 14px;
          text-align: center;
          margin-left: 1px;
          margin-right: 1px;
          line-height: $cellheight - 14px;
          background-color: yellow;
          border: 1px solid gray;
          border-radius: 3px;
        }
      }
    }
    
  // }
</style>
