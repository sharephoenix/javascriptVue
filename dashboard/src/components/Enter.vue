<template>
  <div>
    <router-view></router-view> 
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import IndexNew from '../../api/index'
import axios from 'axios'

@Component
export default class Enter extends Vue {
  mounted() {
    const instance = axios.create({
        baseURL: "http://www.baidu.com",
        timeout: 3000,
        headers: {
          'X-Custom-Header': 'foobar'
        },
        responseType: 'json'
      })

      instance({
        url: "/api/users",
        method: "get"})
      .then (res => {
        console.log(res.data)
      })
      .catch(error => {
        console.log(error)
      })
    // this.$router.push('/enter/a')
    // console.log(IndexNew.domain)
    // console.log(IndexNew.domain.TEST)
    // console.log(IndexNew.domain.VUE_APP_TEST)
    // this.getTest()

//     var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)")
// 　　var r = window.location.search.substr(1).match(reg)

// this.$router.push({name: 'login', query: {name: 'alex'}, params: {a: 'a'}})

    // const account = window.localStorage.getItem("account") 
    // const password = window.localStorage.getItem("password")
    // if (account === 'admin' && password === 'qwe123') {
    //   this.$router.push('/home')
    //   } else {
    //     this.$router.push('/login')
    // }
  }

  getTest(){
    // this.$http.get('/api/test').then(function(res){
    //     console.log(res.data);
    // });
  }
}
</script>