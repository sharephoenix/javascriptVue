import Vue from 'vue'

Vue.prototype.changeData = function () {
  alert('执行成功')
  console.log('this is common action')
}

Vue.prototype.changeString = 'this is my change String'

Vue.prototype.getViewportSize = function() {
  return {
    width: window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth,
    height: window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight
  };
};
