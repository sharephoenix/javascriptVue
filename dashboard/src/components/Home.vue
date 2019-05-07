<template>
  <div class="body">
    <header-vs @logoutAction="logoutAction">header</header-vs>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import Header from './customs/Header.vue';

@Component({
  components: {
    'header-vs': Header
  }
})
  
export default class Home extends Vue {
  logoutAction () {
    window.localStorage.removeItem("account") 
    window.localStorage.removeItem("password")
    this.$router.push('/login')
  }
}
</script>

<style lang="scss" scoped>
$bg-color: #f2f2f2f2;
  .body {
    background-color: $bg-color;
  }
</style>
