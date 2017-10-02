<template>
  <div id="app">
    <header-item  :header_user_msg="header_user_msg"></header-item>
    <router-view v-on:showState="changeState"></router-view>
  </div>
</template>
<script>
  import  headerItem from "./components/comm/header.vue"
  import {delCookie,getCookie,setCookie} from './util/cookie.js'
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
        this.header_user_msg.user_name=getCookie("username")
      }
    },
    crected:function () {
      if(getCookie("username")){
        this.header_user_msg.user_name=getCookie("username");
        this.header_user_msg.is_login=true;
      }

    },
  components:{headerItem}
}
</script>
<style scoped>
  @import "./assets/css/style.css";
</style>


