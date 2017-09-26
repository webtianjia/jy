
import Vue from 'vue'
import App from './App'
import router from './router/router'
import {post,fetch,patch,put} from './util/http.js'
import {delCookie,getCookie,setCookie} from './util/util.js'
import $ from "jquery"
import ivivew from  'iview'
import "bootstrap/dist/css/bootstrap.min.css"
import "iview/dist/styles/iview.css"

import "./assets/js/slide/swiper.css"
import VueAwesomeSwiper from "vue-awesome-swiper"
Vue.use(VueAwesomeSwiper);

Vue.prototype.getCookie =getCookie;
Vue.prototype.delCookie =delCookie;
Vue.prototype.setCookie =setCookie;
Vue.use(ivivew);
Vue.config.productionTip = false;
new Vue({
  el: '#app',
  data:{
  },
  router,
  template: '<App/>',
  components: { App },

});

