<template>
    <div>
        <div>用户名：</div> <div> {{ account }} </div>
        <div>登录密码：</div> <div> {{ password }} </div>
        <button @click="loginout"> 退出登录 </button>
    </div>
</template>
<script>
export default {
  name: 'LoginMsg',
  data () {
    return {
      account: '',
      password: ''
    }
  },
  methods: {
    defaultAction: function () {
      console.log('defaultaction')
    },
    loginout: function () {
      sessionStorage.setItem('password', '')
      this.$router.replace('/index')
      console.log('退出登录')
      alert('退出登录成功')
    }
  },
  mounted () {
    const account = sessionStorage.getItem('account')
    const password = sessionStorage.getItem('password')
    this.account = account
    this.password = password
  }
}
</script>

<style scoped>
</style>
