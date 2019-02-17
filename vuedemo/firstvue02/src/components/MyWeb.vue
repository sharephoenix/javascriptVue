<template>
    <div>
      <button @click="jumptouserinfo"> user info</button>
    </div>
</template>
<script>
export default {
  name: 'MyWeb',
  data () {
    return {
      default: 'alexluan'
    }
  },
  methods: {
    defaultAction: function () {
      console.log('defaultaction')
    },
    jumptouserinfo: function () {
      this.$router.push('/loginmsg')
    }
  }
}
</script>

<style scoped>
  .myweb {
    position:absolute;
    right: 10px;
    top: 10px;
    background-color: blueviolet;
  }
</style>
