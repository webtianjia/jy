
import Vue from 'vue'
import App from './App'
import router from './router/router'
import {delCookie,getCookie,setCookie} from './util/cookie.js'
import ivivew from  'iview'
import "iview/dist/styles/iview.css"
Vue.use(ivivew);

import "bootstrap/dist/css/bootstrap.min.css"

/*轮播插件*/
import "./assets/css/slide/swiper.css"
import VueAwesomeSwiper from "vue-awesome-swiper"
Vue.use(VueAwesomeSwiper);

/*正则验证*/
import zh_CN from 'vee-validate/dist/locale/zh_CN';
import VeeValidate,{ Validator }from "vee-validate"
Validator.addLocale(zh_CN);
Validator.updateDictionary({
  zh_CN: {
    messages:{
      required:()=> "请填写信息!"
    }
  }
});
Validator.extend(
    'mobile_and_email', {/*手机或邮箱*/
      messages: {
        zh_CN:() => '手机或邮箱输入格式不正确',
      },
      validate: value=> {
        return  /^1[34578]\d{9}$/.test(value) ||/^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/.test(value)
      }
    },
);
Vue.use(VeeValidate,{
  locale: 'zh_CN'
});

Vue.config.productionTip = false;
new Vue({
  el: '#app',
  data:{

  },
  router,
  methods:{

  },
  template: '<App/>',
  components: { App }
});

