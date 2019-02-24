<template>
  <div ref="backCls" class="backCls">
    <div ref="line4" class="lineTrack fixdiv">
    <div class="ball">ball</div>
      <div ref="line3" class="lineTrack fixdiv">
      <div class="ball">ball</div>
        <div ref="line2" class="lineTrack fixdiv">
        <div class="ball">ball</div>
          <div ref="line1" class="lineTrack fixdiv">
          <div class="ball">ball</div>
            <div ref="line0" class="lineTrack fixdiv">
            <div class="ball">ball</div>
              <!-- <div ref="sun" class="sun"> -->
              <!-- </div> -->
            </div>
          </div>
        </div>
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
  },
  mounted () {
    let size = 0
    let gap = 150
    for (let i = 0; i < 5; i++) {
      size = (i + 1) * gap
      this.$refs['line' + i].style.width = size + 'px'
      this.$refs['line' + i].style.height = size + 'px'
      this.$refs['line' + i].style.marginTop = -(size / 2) + 'px'
      this.$refs['line' + i].style.marginLeft = -(size / 2) + 'px'
      this.$refs['line' + i].style.borderRadius = (size / 2) + 'px'
    }

    this.$refs['backCls'].style.width = size + gap + 'px'
    this.$refs['backCls'].style.height = size + gap + 'px'

    let sunSize = 10
    this.$refs['sun'].style.width = sunSize + 'px'
    this.$refs['sun'].style.height = sunSize + 'px'
    this.$refs['sun'].style.marginTop = -(sunSize / 2) + 'px'
    this.$refs['sun'].style.marginLeft = -(sunSize / 2) + 'px'
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .backCls {
    position: relative;
    background-color: black;
    margin-left: auto;
    margin-right: auto;
    width: 400px;
    height: 400px;
  }
  .lineTrack {
    position: absolute;
    top: 50%;
    left: 50%;
    margin-top: -150px;
    margin-left: -150px;
    width: 300px;
    height: 300px;
    border: 1px dotted white;
    border-radius: 150px;
  }
  .sun {
    position: absolute;
    top: 50%;
    left: 50%;
    margin-top: -15px;
    margin-left: -15px;
    width: 30px;
    height: 30px;
    border: 1px dotted red;
    border-radius: 15px;
    background-color: red;
  }
  .ball {
    position: absolute;
    width: 20px;
    left: 50%;
    margin-top: -10px;
    margin-left: -10px;
    height: 20px;
    background-color: yellow;
    border-radius: 10px;
    /* animation: zizhuan 10s linear infinite; */
    animation:circle 1s infinite linear;
  }

@keyframes zizhuan {
  from {
    transform: rotateX(0 deg) rotateY(0 deg);
  }
  to {
    transform: rotateX(0deg) rotateY(0deg) rotateZ(360deg);
  }
}
@keyframes circle{

 to {transform: rotate(-45deg) skew(0deg) scale(1);}
}
/* 
div{
          animation: inner-circle 5s linear 0s infinite;
      }
      @keyframes circle {
          from { transform:rotate(0deg); }
          to { transform:rotate(360deg); }
      }
      @keyframes inner-circle{
           from{
               transform: rotate(360deg);
           }
       } */

.fixdiv {
      animation: inner-circle 5s linear 0s infinite;
      }
      @keyframes circle {
        from { transform:rotate(360deg); }
          to { transform:rotate(0deg); }
          
      }
      @keyframes inner-circle{
           from{
               transform: rotate(360deg);
           }
}

</style>
