<template>
  <div class="hello">
    <div calss="track0">
      sss
      <div calss="track1">
        bb
        <!-- <div calss="track2"> -->
          <!-- <div class="ball"></div> -->
        <!-- </div> -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hello {
  background-color: red;
  justify-content: center;
  align-items: center;
  width: 400px;
  height: 400px;
}
.ball {
  background-color: orchid;
  width: 50px;
  height: 50px;
  border-radius: 25px;
}
.track0 {
  /* margin: 30px 30px 30px 30px; */
  width: 300px;
  height: 300px;
  /* border: 1px solid lightblue; */
  background-color: blue;
}
.track1 {
  margin: 30px 30px 30px 30px;
  border: 1px solid lightblue;
}
.track2 {
  margin: 30px 30px 30px 30px;
  border: 1px solid lightblue;
}
</style>
