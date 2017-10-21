<template>
  <div>
    <div class="login-and-regsiter mt-80">
      <div class="content">
        <div class="login-banner">
          <img class="img-responsive" src="../../assets/images/login.png">
        </div>
        <div class="box">
          <div class="t-r">
            <span class="f-12 col-999">已有吉凯账号 <router-link class="col-main" to="login">快捷登录</router-link></span>
          </div>
          <div class="text-c f-20 mt-80 col-666">欢迎注册吉凯平台</div>
          <form @submit.prevent="register">
            <div class="form">
            <!--手机号或邮箱-->
            <div class="form-group mt-40">
              <div class="input-group">
                <div class="input-group-addon">
                  <div class=" form-lable">账号</div>
                </div>
                <input
                  v-validate="'required|mobile_and_email'"
                  name="phone_email"
                  v-model="form_validate.user_id"
                  class="form-control   input-text"
                  type="text"
                  autocomplete="off"
                  placeholder="请输入手机号码或邮箱">
                <div class="input-group-btn">
                  <span v-show="form_validate.user_id!=''&&errors.has('phone_email')" @click="form_validate.user_id=''" class="clear-txt"></span>
                </div>
              </div>
              <!--错误提示-->
              <div class=" message-box  f-12">
                <span v-show="errors.has('phone_email')" class=" Validform_checktip">{{errors.first("phone_email")}}</span>
              </div>
            </div>
            <!--用户名-->
            <div class="form-group">
              <div class="input-group ">
                <div class="input-group-addon">
                  <div class="form-lable">用户名</div>
                </div>
                <input
                  v-validate="'required'"
                  name="username"
                  v-model="form_validate.user_name"
                  class="form-control   input-text"
                  autocomplete="off"
                  type="text" placeholder="请输入用户名">
                <div class="input-group-btn">
                  <span v-show="form_validate.user_name!=''" @click="form_validate.user_name=''" class="clear-txt"></span>
                </div>
              </div>
              <!--错误提示-->
              <div class=" message-box  f-12">
                <span
                  v-show="errors.has('username')"
                  class=" Validform_checktip">
                  取个奇怪的名字吧~
                </span>
              </div>
            </div>
            <!--验证码-->
            <div class="form-group">
              <div class="input-group">
                <div class="input-group-addon ">
                  <div class="form-lable">验证码</div>
                </div>
                <input
                  v-validate="'required|numeric|min:6'"
                  name="code"
                  v-model="form_validate.code"
                  class="form-control  input-text "
                  type="text"
                  autocomplete="off"
                  placeholder="请输入验证码 ">
                <div class="input-group-btn">
                  <button v-if="!send_to" @click="send_authentication_code" type="button" class="btn f-12 btn-text ">获取验证码</button>
                  <button v-else type="button" class="btn f-12 btn-text " disabled>{{send_time}}s可重新发送</button>
                </div>
              </div>
              <!--错误提示-->
              <div class="message-box  f-12">
                    <span
                      v-show="errors.has('code')"
                      class=" Validform_checktip">
                      请输入有效6位数字验证码
                </span>
              </div>
            </div>
            <!--密码-->
            <div class="form-group ">
              <div class="input-group">
                <div class="input-group-addon">
                  <div class="form-lable">密码</div>
                </div>
                <input
                      v-validate="'required|min:6|max:20|alpha_num'"
                      name="pwd"
                      v-model="form_validate.pwd"
                      class="form-control   input-text "
                      type="password"
                      autocomplete="off"
                      placeholder="请输入登录密码">
                <div class="input-group-btn">
                  <span v-show="form_validate.pwd!=''" @click="form_validate.pwd=''" class="clear-txt"></span>
                </div>
              </div>
              <!--错误提示-->
              <div class=" message-box  f-12">
                <span
                  v-show="errors.has('pwd')"
                  class=" Validform_checktip">
                  6到16位（字母，数字，下划线，减号）
                </span>
              </div>
            </div>
            <!--确认密码-->
            <div class="form-group">
              <div class="input-group">
                <div class="input-group-addon">
                  <div class="form-lable">确认密码</div>
                </div>
                <input
                  v-validate="'required|confirmed:pwd'"
                  name="pwdnewagin"
                  class="form-control  input-text "
                  type="passworld"
                  autocomplete="off"
                  placeholder="再次输入登录密码">
              </div>
              <!--错误提示-->
              <div class=" message-box  f-12">
                     <span
                       v-show="errors.has('pwdnewagin')"
                       class=" Validform_checktip">
                        请两次密码输入一致
                </span>
              </div>
            </div>
            <button class="btn btn-md btn-main btn-block f-16 mt-40" type="submit">同意条款并注册</button>
            <p class="f-12 text-center mt-10 ">点击注册，即表示已阅读并同意 <a href="服务协议.html">《服务条款》</a></p>
          </div>
          </form>
        </div>
      </div>
    </div>
    <v-footer></v-footer>
  </div>
</template>
<script>
  import footer from "../comm/footer.vue"
  export  default{
    data(){
      return {
          send_to:false,
          send_time:60,
          form_validate:{
             user_id:"",
             user_name:"",
             code:"",
             pwd:"",
          }
      }
    },
    methods:{
      register(){
        this.$validator.validateAll().then((result) => {
          if (result) {
            /*AJAX*/
            var form_data =  JSON.stringify(this.form_validate)
            console.log(form_data)
          }else {
            alert('有错误!');
          }
        });
      },
      send_authentication_code(){/*发送验证码*/
        this.$validator.validate("phone_email").then((result)=>{
            if(result){
              this.send_to=true;
              var time=setInterval(()=>{
                this.send_time--;
                if( this.send_time<=0){
                  this.send_to=false;
                  this.send_time=60
                  clearInterval(time)
                }
              },1000)
            }else {
                alert("先填写手机号")
            }
        })

        }
    },
    components:{"v-footer":footer}
  }
</script>
