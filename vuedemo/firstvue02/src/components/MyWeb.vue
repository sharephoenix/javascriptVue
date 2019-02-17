<template>
    <div class="backweb">
      <div class="mywebtop">
      <div class="mywebicon"> icon </div>
      <div class="mywebbutton"> <button @click="jumptouserinfo"> {{loginstatetxt}}</button></div>
      </div>
      <div class="mywebcontent"> this is my web</div>
      <div class="footer">
        <div class="text">版权所有为 touch</div>
      </div>
    </div>
</template>
<script>
export default {
  name: 'MyWeb',
  data () {
    return {
      default: 'alexluan',
      loginstate: false
    }
  },
  computed: {
    loginstatetxt: function () {
      if (this.loginstate === true) {
        return '已经登录'
      } else {
        return '登录'
      }
    }
  },
  methods: {
    defaultAction: function () {
      console.log('defaultaction')
    },
    jumptouserinfo: function () {
      if (this.loginstate === true) {
        this.$router.push('/loginmsg')
      } else {
        alert('请去登录')
        this.$router.push('/index')
      }
    }
  },
  mounted () {
    const account = sessionStorage.getItem('account')
    const password = sessionStorage.getItem('account')
    if (account.length > 0 && password.length > 0) {
      this.loginstate = true
    } else {
      this.loginstate = false
    }
  }
}
</script>

<style scoped>
  .backweb {
    position: static;
  }
  .mywebtop {
    margin-left: 0px;
    margin-right: 0px;
    margin-top: 0px;
    height: 44px;
    background-color: yellow;
  }
  .mywebicon {
    float: left;
    top: 10px;
    width: 52px;
    height: 100%;
    background-size: 100% auto;
    /* background-color: blueviolet; */
    background-image: url("../assets/th.jpeg");
  }
  .mywebbutton {
    float: right;
    width: auto;
    height: 44px;
    background-color: blueviolet;
    background-repeat: no-repeat;
    background-size: 44px 44px;
  }
  .myweb button {
    display: inline-block;
    width: 44px;
    height: 100%;
  }
  .mywebcontent {
    margin-top: 5px;
    background-color: lightgray;
    height: 400px;
  }
  .footer {
    margin-top: 5px;
    height: 44px;
    background-color: lightblue;
    text-align: left;
    line-height: 44px;
    color: red;
  }
  .footer .text {
    margin-left: 10px;
  }
</style>
