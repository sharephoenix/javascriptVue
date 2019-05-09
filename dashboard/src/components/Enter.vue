<template>
  <div>
    <router-view></router-view> 
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class Enter extends Vue {
  mounted() {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)")
　　var r = window.location.search.substr(1).match(reg)
    alert(r)

// this.$router.push({name: 'login', query: {name: 'alex'}, params: {a: 'a'}})

    // const account = window.localStorage.getItem("account") 
    // const password = window.localStorage.getItem("password")
    // if (account === 'admin' && password === 'qwe123') {
    //   this.$router.push('/home')
    //   } else {
    //     this.$router.push('/login')
    // }
  }
}
</script>