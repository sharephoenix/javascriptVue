<template>
    <div class="maincls">
        <div class="mainlogin">
        <input ref='account' type="text" :model="account" placeholder="请输入用户名"/>
        <input ref='password' type="text" placeholder="请输入密码"/>
        <input ref='repassword' type="text" placeholder="请再次输入密码"/>
        <button @click="loginAction">{{ logininfo }}</button>
        </div>
    </div>
</template>
<script>
export default {
  name: 'MainIndex',
  data () {
    return {
      logininfo: '登录'
    }
  },
  methods: {
    loginAction: function () {
      this.$router.go(-1)
      const account = this.$refs.account.value
      const password = this.$refs.password.value
      const repassword = this.$refs.repassword.value
      var loginSuccess = false
      var alertmsg = ''
      if (account.length > 8 && password === repassword) {
        loginSuccess = this.saveLoginInfo({account, password})
      } else {
        if (account.length <= 8) {
          alertmsg = '用户名长度小于 8！！'
        } else if (password !== repassword) {
          alertmsg = '两次输入的密码不同！！'
        }
      }
      if (loginSuccess === true) {
        this.$router.push('/myweb')
      } else {
        alert(alertmsg)
      }
    },
    saveLoginInfo: function (params) {
      const {account, password} = params
      if (account !== undefined && password !== undefined) {
        sessionStorage.setItem('account', account)
        sessionStorage.setItem('password', password)
        this.account = account
        this.password = password
        return true
      } else {
        return false
      }
    }
  },
  mounted () {
    const account = sessionStorage.getItem('account')
    const password = sessionStorage.getItem('password')
    this.$refs.account.value = account
    this.$refs.password.value = password
  }
}
</script>

<style scoped>
  .maincls {
    margin-top: 0px;
    width: auto;
    height: auto;
    background-color: lightgray;
  }
  .mainlogin {
      float: center;
      display: inline-block;
      width: 500px;
      margin-top: 30px;
      margin-bottom: 30px;
      background-color: red;
  }
  .mainlogin input {
      display: block;
      margin-left: auto;
      margin-right: auto;
      margin-top: 10px;
      margin-bottom: 10px;
  }
  .mainlogin button {
      margin-bottom: 10px;
  }
</style>
