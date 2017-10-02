<template>
  <div id="app">
    <header-item  :header_user_msg="header_user_msg"></header-item>
    <router-view v-on:showState="changeState"></router-view>
  </div>
</template>
<script>
  import  headerItem from "./components/comm/header.vue"
  export default {
  name: 'app',
    data(){
      return {
        header_user_msg:{
          is_login:false,
          user_name:""
        }
      }
    },
    methods:{
      changeState(msg){
        this.header_user_msg.is_login=true;
        this.header_user_msg.user_name=msg.user_id
      }
    },
  components:{headerItem}
}
</script>
<style scoped>
  @import "./assets/css/style.css";
</style>


