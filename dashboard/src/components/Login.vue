<template>
  <div class="body">
    <header-vs>header</header-vs>
    <div class="content-panel">
      <div class="account">
        <el-input v-model="account" size="medium" type="text" placeholder="请输入您的账号"></el-input>
      </div>
      <div class="password">
        <el-input v-model="password" size="medium" type="password" placeholder="请输入您的密码"></el-input>
      </div>
      <div class="login">
        <el-button @click="lgoinAction" type="primary" icon="el-icon-arrow-left"> 登录 </el-button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import Header from './customs/Header.vue';

@Component({
  components: {
    'header-vs': Header,
  },
})
export default class Login extends Vue {

  account: string = ''
  password: string = ''

  lgoinAction () {
    alert('account:' + this.account + '**password:' + this.password)
  }
}
</script>

<style lang="scss">
$input-bg-color: #00000000;
  .body {
    background-color: #f0f0f0;
    height: 100%;
    .content-panel {
      margin: 10px auto auto auto;
      width: 400px;
      background-color: green;
      border-radius: 4px 4px;
      border: 1px solid orange;
      .account {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 300px;
        margin: 20px auto auto auto;
        background-color: $input-bg-color;
      }
      .password {
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 10px auto 10px auto;
        width: 300px;
        background-color: $input-bg-color;
      }
      .login {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 44px;
      }
    }
  }
</style>
