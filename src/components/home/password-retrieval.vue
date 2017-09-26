<template>
  <div>
    <div class="login-and-regsiter mt-80">
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
                <input class="form-control   input-text Validform_error" type="text" datatype="m" placeholder="请输入手机号码或邮箱" name="tel" errormsg="请输入正确的手机号码或邮箱!" nullmsg="请填写信息！">
                <div class="input-group-btn">
                  <span class="clear-txt"></span>
                </div>
              </div>
              <!--错误提示-->
              <div class=" message-box  f-12">
                <span class=" Validform_checktip Validform_wrong">请填写信息！</span>
              </div>
            </div>
            <!--验证码-->
            <div class="form-group">
              <div class="input-group">
                <div class="input-group-addon ">
                  <div class="form-lable">验证码</div>
                </div>
                <input class="form-control  input-text Validform_wrong" type="text" datatype="p" placeholder="请输入验证码 " nullmsg="验证码不能为空！" errormsg="请输入正确验证码！">
                <div class="input-group-btn">
                  <button type="button" class="btn f-12 btn-text ">获取验证码</button>
                </div>
              </div>
              <!--错误提示-->
              <div class="message-box  f-12">
                <span class="Validform_checktip">请填写信息</span>
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
    <footer-item></footer-item>
  </div>
</template>

<script>
  import footerItem from "../comm/footer-1.vue"
  export  default{
    data(){
      return {

      }
    },
    methods:{
      sub(){
        this.$Message.success("找回成功！");
        this.$router.push({ path:'/reset_password' })
      }
    },
    components:{footerItem}
  }
</script>
