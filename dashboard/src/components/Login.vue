<template>
  <div class="body">
    <header-vs :action="action" @logoutAction="logoutAction">header</header-vs>
    <div class="content-panel">
      <div class="account">
        <el-input v-model="account" size="medium" type="text" placeholder="请输入您的账号"></el-input>
      </div>
      <div class="password">
        <el-input v-model="password" size="medium" type="password" placeholder="请输入您的密码"></el-input>
      </div>
      <div class="login">
        <el-button @click="loginAction" type="primary" icon="el-icon-arrow-left"> 登录 </el-button>
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

  loginAction () {
    if (this.account === 'admin' && this.password === 'qwe123') {
      window.localStorage.setItem("account", this.account) 
      window.localStorage.setItem("password", this.password)
      this.$router.push('/home')
    }
  }

  logoutAction () {
    window.localStorage.removeItem("account") 
    window.localStorage.removeItem("password")
    this.$router.push('/login')
  }

  action (msg: string) {
    alert(msg)
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
