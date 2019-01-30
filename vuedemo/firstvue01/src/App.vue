<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import Vue from 'vue'

export default {
  name: 'App',
  computed: {
    screenWith: function () {
      return Vue.prototype.getViewportSize.width
    },
    screenHeight: function () {
      return Vue.prototype.getViewportSize.height
    }
  }
}
</script>

<style>
#app {
  position: absolute;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: orange;
  width: 100%;
  height: 100%;
  box-sizing:border-box;
}
</style>
