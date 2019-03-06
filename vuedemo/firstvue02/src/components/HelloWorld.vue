<template>
  <div class="maincls">
    welcome to my Vue world!!!
    <div @click="push"> router routerrouterrouter </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods: {
    push: function () {
      console.log('push')
      this.$router.push('/index')
    }
  },
  beforeCreate () {
    console.log(this.msg + 'beforeCreatebeforeCreatebeforeCreate')
  },
  created () {
    console.log(this.msg + 'createdcreatedcreatedcreatedcreated')
  },
  beforeMount () {
    console.log(this.msg + 'beforeMountbeforeMountbeforeMountbeforeMount')
  },
  mounted () {
    console.log(this.msg + 'mountedmountedmountedmountedmounted')
  },
  beforeUpdate () {
    console.log(this.msg + 'beforeUpdatebeforeUpdatebeforeUpdatebeforeUpdate')
  },
  updated () {
    console.log(this.msg + 'updatedupdatedupdatedupdatedupdatedupdated')
  },
  beforeDestroy () {
    console.log(this.msg + 'destroyeddestroyeddestroyeddestroyed')
  },
  destroyed () {
    console.log(this.msg + 'destroyeddestroyeddestroyeddestroyed')
  },
  init () {
    console.log(this.msg + 'initinitinitinitinitinitinitinitinit')
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .maincls {
    width: atuo;
    height: 44px;
  }
</style>
