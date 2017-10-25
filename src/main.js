
import Vue from 'vue'
import App from './App'
import footer from "./components/comm/footer.vue"
Vue.component("v-footer",footer)
import router from './router/router'
import {fetch,post} from './util/http.js'
Vue.prototype.$get=fetch;
Vue.prototype.$post=post;

import ivivew from  'iview'
Vue.use(ivivew);
/*轮播插件*/
import "./assets/css/slide/swiper.css"
import VueAwesomeSwiper from "vue-awesome-swiper"
Vue.use(VueAwesomeSwiper);
/*代码高亮*/
import hljs from "highlight.js"
import 'highlight.js/styles/github.css' //样式文件
Vue.directive('highlight',function (el) {
  let blocks = el.querySelectorAll('pre code');
  blocks.forEach((block)=>{
    hljs.highlightBlock(block)
  })
})
/*正则验证*/
 import VeeValidate,{ Validator }from "vee-validate"
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
  components: { App },
});
router.afterEach((to, from) => {
 /* auto_layout_height()*/
})

