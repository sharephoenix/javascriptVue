<template>
  <div class="body">
    <div @click="XHBDefault">XHBXHBNavigation</div>
  </div>
</template>

<script>
import XHBNavigation from './navigation-module.js'

export default {
  name: 'XHBNavigation',
  methods: {
    XHBDefault () {
      XHBNavigation.testAction()
    }
  },
  mounted () {
  }
}
</script>

<style scoped>
  .body {
    background-color: lightgray;
    height: 100%;
    border-radius: 5px;
  }
</style>

