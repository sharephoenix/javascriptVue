<template>
  <div class="body-header">
    <div class="logo">logo{{msg}}</div>
    <div class="edit" @click="logoutAction">logout</div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class Header extends Vue {
  @Prop() private msg!: string;
  // @Prop() private action!: Function;

  logoutAction () {
    this.$emit('logoutAction', 'params')
    // this.action('hahaha')
  }
}
</script>

<style scoped lang="scss">
$headercolor: green;
  .body-header {
    background-color: $headercolor;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    height: 64px;
    border-radius: 12px;
  }
  .logo {
    margin-left: 10px;
    background-color: #f2f2f2;
    height: 44px;
    width: 44px;
    border-radius: 22px;
    text-align: center;
    line-height: 44px;
  }
  .edit {
    margin-right: 10px;
    background-color: #f2f2f2;
    height: 44px;
    width: 44px;
    border-radius: 22px;
    text-align: center;
    line-height: 44px;
  }
</style>