
import Vue from 'vue'
import App from './App'
import router from './router/router'
import {post,fetch,patch,put} from './util/http.js'
import {delCookie,getCookie,setCookie} from './util/cookie.js'
import ivivew from  'iview'
import "iview/dist/styles/iview.css"
Vue.use(ivivew)

import "bootstrap/dist/css/bootstrap.min.css"

/*轮播插件*/
import "./assets/css/slide/swiper.css"
import VueAwesomeSwiper from "vue-awesome-swiper"
Vue.use(VueAwesomeSwiper);

/*import $ from 'jquery'*/

/*import VueCodeMirror from 'vue-codemirror-lite'
Vue.use(VueCodeMirror)*/

Vue.config.productionTip = false;
new Vue({
  el: '#app',
  data:{
  },
  router,
  template: '<App/>',
  components: { App }
});
router.beforeEach((to, from, next) => {
  next()
})
