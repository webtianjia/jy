<template>
  <div class="main">
    <div class="login-and-regsiter mt-60">
      <div class="content">
        <div class="login-banner">
          <img class="img-responsive" src="../../assets/images/login.png">
        </div>
        <div class="box">
          <div class="text-c f-20 mt-80 col-666">密码登录</div>
          <form @submit.prevent="login">
              <div class="form">
                <!--手机号-->
                <div class="form-group mt-40">
                  <div class="input-group">
                    <div class="input-group-addon">
                      <div class=" form-lable">账号</div>
                    </div>
                    <input
                      v-validate="'required|mobile_and_email'"
                      name="userId"
                      class="form-control input-text "
                      maxlength="30"
                      v-model="form_validate.user_id"
                      type="text"
                      placeholder="请输入手机号码或邮箱">
                    <div class="input-group-btn">
                      <span v-show="form_validate.user_id!=''" @click="form_validate.user_id=''"  class="clear-txt"></span>
                    </div>
                  </div>
                  <!--错误提示-->
                  <div class=" message-box  f-12">
                    <span v-show="errors.has('userId')" class=" Validform_checktip">{{ errors.first('userId') }}</span>
                  </div>
                </div>
                <!--密码-->
                <div class="form-group ">
                  <div class="input-group">
                    <div class="input-group-addon">
                      <div class="form-lable">密码</div>
                    </div>
                    <input
                      v-validate="'required'"
                      class="form-control  input-text "
                      maxlength="30"
                      type="password"
                      name="password"
                      v-model="form_validate.pwd"
                      autocomplete="off"
                      placeholder="请输入登录密码" >
                    <div class="input-group-btn">
                      <span v-show="form_validate.pwd!=''" @click="form_validate.pwd=''" class="clear-txt"></span>
                    </div>
                  </div>
                  <!--错误提示-->
                  <div class=" message-box  f-12">
                    <span v-show="errors.has('password')" class=" Validform_checktip">{{ errors.first('password') }}</span>
                  </div>
                </div>
                <button :disabled="sub_login"  class="btn btn-md btn-main btn-block f-16 mt-40" type="submit" v-text="btn_text"></button>
                <p class="f-12 text-r mt-20 ">
                  <router-link class="col-999 mr-20" to="password_retrieval">忘记密码</router-link>
                  <router-link class="col-999" to="register">免费注册</router-link>
                </p>
              </div>
          </form>
          <!--其他媒体注册-->
          <div   class="social-box text-center">
            <div class="mt-20 f-12 col-666">其他方式登录</div>
            <div class="social-login mt-30">
              <a class="wx" href="javascript:void (0)"></a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <v-footer></v-footer>
  </div>
</template>
<script>
  import {delCookie,getCookie,setCookie} from '../../util/cookie.js'
  export  default{
    data(){
      return {
        sub_login:false,
        btn_text:"立即登录",
        form_validate:{
          user_id:"",
          pwd:"",
        }
      }
    },
    methods:{
      login(){
          this.$get("http://localhost:8080/static/test.json").then(function (res) {
              console.log(res)
          })
          this.$validator.validateAll().then((result) => {
            if (result) {
              this.sub_login=true;
                this.btn_text="登录中...";
              /*AJAX*/
              setTimeout(()=>{
                setCookie("username",this.form_validate.user_id,1000*60);
                this.$emit("showState");
                this.$router.replace({name:"工作面板",path:"/control_panel/work_panel"})
              },1000)
            }
          });
      }
    },
    mounted(){
    },
    computed:{

    },
    created(){
    }
  }
</script>
