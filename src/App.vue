<template>
  <div id="app">
    <header-item></header-item>
    <router-view></router-view>
  </div>
</template>
<script>
  import  headerItem from "./components/comm/header.vue"
  export default {
  name: 'app',
  components:{headerItem},
}
</script>
<style scoped>
  @import "./assets/css/style.css";
</style>


