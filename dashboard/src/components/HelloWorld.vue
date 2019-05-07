<template>
  <div>
    <header-vs>header</header-vs>
   Helloworld
  </div>
</template>

<script lang="ts">
import Header from './customs/Header.vue';
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component({
  components: {
    'header-vs': Header,
  },
})
export default class HelloWorld extends Vue {
  @Prop() private msg!: string;
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
