<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class Enter extends Vue {
  mounted() {
   const account = window.localStorage.getItem("account") 
   const password = window.localStorage.getItem("password")
   if (account === 'admin' && password === 'qwe123') {
     this.$router.push('/home')
    } else {
       this.$router.push('/login')
    }
  }
}
</script>