import Vue from 'vue'
import App from './App'
import footer from "./components/comm/footer.vue"
import router from './router/router'
import Util from './util/util.js'

Vue.prototype.util = Util
import ivivew from 'iview'

/*轮播插件*/
import "./assets/css/slide/swiper.css"
import VueAwesomeSwiper from "vue-awesome-swiper"

/*代码高亮*/
import hljs from "highlight.js"
import 'highlight.js/styles/github.css' //样式文件

import "simditor/styles/simditor.css"

/*正则验证*/
import VeeValidate, {Validator} from "vee-validate"

Validator.updateDictionary({
  zh_CN: {
    messages: {
      required: () => "请填写信息!"
    }
  }
});
Validator.extend(
  'mobile_and_email', {
    /*手机或邮箱*/
    messages: {
      zh_CN: () => '手机或邮箱输入格式不正确',
    },
    validate: value => {
      return /^1[34578]\d{9}$/.test(value) || /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/.test(value)
    }
  },
);

Vue.directive('highlight', function (el) {
  let blocks = el.querySelectorAll('pre code');
  blocks.forEach((block) => {
    hljs.highlightBlock(block)
  })
});
Vue.component("v-footer", footer);
Vue.use(VueAwesomeSwiper);
Vue.use(ivivew);
Vue.use(VeeValidate, {
  locale: 'zh_CN'
});

Vue.config.productionTip = false;
new Vue({
  el: '#app',
  data: {},
  router,
  methods: {},
  template: '<App/>',
  components: {App},
});
router.beforeEach((to, from, next) => {
  ivivew.LoadingBar.start();
  Util.title(to.meta.title);
  next();
});

router.afterEach(() => {
  ivivew.LoadingBar.finish();
  window.scrollTo(0, 0);
});

