<template>
  <div class="body">
    <div>
      <div>user</div>
      <div>secrect</div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class Login extends Vue {
  @Prop() private msg!: string;
}
</script>

<style lang="scss" scoped>
  .body {
    background-color: #f0f0f0;
  }
</style>
