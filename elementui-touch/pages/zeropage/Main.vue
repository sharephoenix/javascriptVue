<template>
  <div>this is zero page 参数： {{log}}</div>
</template>

<script>
export default {
  name: 'zeropage',
  data () {
    return {
      log: ''
    }
  },
  mounted () {
    //获取Location对象的search属性值
    var searchStr = location.search
    //由于searchStr属性值包括“?”，所以除去该字符
    searchStr = searchStr.substr(1)
    //将searchStr字符串分割成数组，数组中的每一个元素为一个参数和参数值
    var searchs = searchStr.split("&")
    this.log = JSON.stringify(searchs)
  }
}
</script>

