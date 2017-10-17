<template>
  <div>
    <div class="login-and-regsiter mt-80">
      <div class="content">
        <div class="login-banner">
          <img class="img-responsive" src="../../assets/images/login.png">
        </div>
        <div class="box">
          <div class="text-c f-20 mt-80 col-666">密码登录</div>
          <form ref="form_validate" :model="form_validate" :rules="ruleInline">
              <div class="form">
                <!--手机号-->
                <div class="form-group mt-40">
                  <div class="input-group">
                    <div class="input-group-addon">
                      <div class=" form-lable">账号</div>
                    </div>
                    <input
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
                    <span  class=" Validform_checktip"></span>
                  </div>
                </div>
                <!--密码-->
                <div class="form-group ">
                  <div class="input-group">
                    <div class="input-group-addon">
                      <div class="form-lable">密码</div>
                    </div>
                    <input
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
                    <span class=" Validform_checktip"></span>
                  </div>
                </div>
                <button :disabled="sub_login" @click="login('form_validate')"  class="btn btn-md btn-main btn-block f-16 mt-40" type="submit" v-text="btn_text"></button>
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
  import footerItem from "../comm/footer.vue"
  import {delCookie,getCookie,setCookie} from '../../util/cookie.js'
  export  default{
    data(){
      return {
        sub_login: false,
        btn_text: "立即登录",
        form_validate: {
          user_id: "",
          pwd: "",
        },
        ruleInline: {
          user_id: [
            {required: true, message: '请填写用户名', trigger: 'blur'}
          ],
          pwd: [
            {required: true, message: '请填写密码', trigger: 'blur'},
            {type: 'string', min: 6, message: '密码长度不能小于6位', trigger: 'blur'}
          ]
        }
      }
    },
    methods:{
      login(name){
   /*     this.[name].validate((valid) => {
          if (valid) {
            this.$Message.success('提交成功!');
          } else {
            this.$Message.error('表单验证失败!');
          }
        })*/
   /*           /!*AJAX*!/
              setTimeout(()=>{
                setCookie("username",this.form_validate.user_id,1000*60);
                this.$emit("showState");
                this.$router.push('/index')
              },1000)*/
      }
    },
    mounted(){
    },
    computed:{

    },
    created(){
    },
    components:{footerItem},
  }
</script>
