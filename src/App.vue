<template>
  <div id="app">
    <header-item :is_Login="is_Login"></header-item>
    <router-view></router-view>
  </div>
</template>
<script>
  import  headerItem from "./components/comm/header.vue"
  export default {
  name: 'app',
    data(){
      return {
        is_Login:false
      }
    },
  components:{headerItem}
}
</script>
<style scoped>
  @import "./assets/css/style.css";

</style>


