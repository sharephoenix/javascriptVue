<template>
  <div class="content">
      <div> {{ id }} --- {{subtitle}} </div>
      <button v-on:click="changeDataLocal"> reloadSubtitle </button>
  </div>
</template>

<script>

import Vue from 'vue'

export default {
  name: 'tabbar-item',
  props: ['id', 'subtitle'],
  methods: {
    reloadSubtitle: function () {
      let result = Number(this.id)
      this.id = result * 2
    },
    changeDataLocal: function () {
      Vue.prototype.changeData()
      this.id = Vue.prototype.changeString
    }
  },
  computed: {
    isActive () {
      if (this.$parent.value === this.id) {
        return true
      }
    }
  }
}
</script>

<style scoped>
  .content {
    background-color: red;
    width: 100%;
    height: 100%;
  }
  .m-tabbar-item {
    /*flex: 1;*/
    /*text-align: center;*/
  }
  .m-tabbar-item-icon {
    /*display: block;*/
    /*padding-top: 2px;*/
  }
  img {
    width: 28px;
    height: 28px;
  }

  .m-tabbar-item-text {
    /*display: block;*/
    /*font-size: 10px;*/
    /*color: #949494;*/
  }

  .is-active {
  }
  .m-tabbar-item-text {
    color: #42bd56;
  }

</style>
