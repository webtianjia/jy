<template>
  <div>
    <div class="login-and-regsiter mt-60">
      <div class="content">
        <div class="login-banner">
          <img class="img-responsive" src="../../assets/images/login.png">
        </div>
        <div class="box">
          <div class="text-c f-20 mt-80 col-666">找回密码</div>
          <div class="text-c f-12 col-999 mt-50"><i class="icon-info mr-5"></i><span class="v-m">请输入你需要找回登录密码的账户名</span></div>
          <div class="form">
            <!--手机号-->
            <div class="form-group mt-40">
              <div class="input-group">
                <div class="input-group-addon">
                  <div class=" form-lable">账号</div>
                </div>
                <input
                  v-validate="'required|mobile_and_email'"
                  name="phone_email"
                  v-model="form_validate.user_id"
                  class="form-control   input-text "
                  type="text"
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
            <button @click="sub" class="btn btn-md btn-main btn-block f-16 mt-40" type="button">确认</button>
            <p class="f-12 text-r mt-20 ">
              <router-link class="col-999" to="register">免费注册</router-link>
            </p>
          </div>
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
            code:"",
          }
        }
    },
    methods:{
      sub(){
        this.$validator.validateAll().then((result) => {
          if (result) {
            /*AJAX*/
            var form_data =  JSON.stringify(this.form_validate)
            console.log(form_data)
                this.$Message.success("找回成功！");
             this.$router.push({ path:'/reset_password' })
          }else {
            alert('有错误!');
          }

      })
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
    components:{
        "v-footer":footer}
  }
</script>
