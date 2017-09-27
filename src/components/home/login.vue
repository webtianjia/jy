<template>
  <div>
    <div class="login-and-regsiter mt-80">
      <div class="content">
        <div class="login-banner">
          <img class="img-responsive" src="../../assets/images/login.png">
        </div>
        <div class="box">
          <div class="text-c f-20 mt-80 col-666">密码登录</div>
          <div class="form">
            <!--手机号-->
            <div class="form-group mt-40">
              <div class="input-group">
                <div class="input-group-addon">
                  <div class=" form-lable">账号</div>
                </div>
                <input class="form-control   input-text Validform_error" type="text" datatype="m" placeholder="请输入手机号码或邮箱" name="tel" errormsg="请输入正确的手机号码或邮箱!" nullmsg="请填写信息！">
                <div class="input-group-btn">
                  <span  class="clear-txt"></span>
                </div>
              </div>
              <!--错误提示-->
              <div class=" message-box  f-12">
                <span class=" Validform_checktip Validform_wrong">请填写信息！</span>
              </div>
            </div>
            <!--密码-->
            <div class="form-group ">
              <div class="input-group">
                <div class="input-group-addon">
                  <div class="form-lable">密码</div>
                </div>
                <input class="form-control  f-14 input-text Validform_error" type="text" datatype="m" placeholder="请输入登录密码" name="tel" errormsg="请输入您的手机号码!" nullmsg="请填写信息！">
                <div class="input-group-btn">
                  <span class="clear-txt"></span>
                </div>
              </div>
              <!--错误提示-->
              <div class=" message-box  f-12">
                <span class=" Validform_checktip">请填写信息！</span>
              </div>
            </div>
            <button @click="sub" class="btn btn-md btn-main btn-block f-16 mt-40" type="button">立即登录</button>
            <p class="f-12 text-r mt-20 ">
              <router-link class="col-999 mr-20" to="password_retrieval">忘记密码</router-link>
              <router-link class="col-999" to="register">免费注册</router-link>
            </p>
          </div>
          <!--其他媒体注册-->
          <div   class="social-box text-center">
            <div class="mt-20 f-12 col-666">其他方式登录</div>
            <div class="social-login mt-30">
              <a class="qq" href="javascript:void (0);"></a>
              <a class="wx" href="javascript:void (0)"></a>
              <a class="zfb" href="javascript:void (0);"></a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <footer-item></footer-item>
  </div>
</template>

<script>
  import footerItem from "../comm/footer-1.vue"
  import {delCookie,getCookie,setCookie} from '../../util/cookie.js'
  export  default{
    data(){
      return {

      }
    },
    methods:{
      sub(){
        setCookie('session',1); //设置Session
        setCookie('u_uuid',1);
        this.$router.replace({path:"/control_panel/work_panel"})
      }
    },
    components:{footerItem}
  }
</script>
