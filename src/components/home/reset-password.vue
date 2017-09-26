<template>
  <div>
    <div class="login-and-regsiter mt-80">
      <div class="content">
        <div class="login-banner">
          <img class="img-responsive" src="../../assets/images/login.png">
        </div>
        <div class="box">
          <div class="text-c f-20 mt-80 col-666">重置密码</div>
          <div class="text-c f-12 col-999 mt-50"><i class="icon-info mr-5"></i><span class="v-m">您的账号验证成功，请设置新的密码</span></div>
          <div class="form">
            <!--密码-->
            <div class="form-group mt-40">
              <div class="input-group">
                <div class="input-group-addon">
                  <div class="form-lable">密码</div>
                </div>
                <input class="form-control  f-14 input-text Validform_error" type="text" datatype="m" placeholder="设置您的登录密码" name="tel" errormsg="请设置您的登录密码!" nullmsg="请填写信息！">
                <div class="input-group-btn">
                  <span class="clear-txt"></span>
                </div>
              </div>
              <!--错误提示-->
              <div class=" message-box  f-12">
                <span class=" Validform_checktip">请填写信息！</span>
              </div>
            </div>
            <!--确认密码-->
            <div class="form-group">
              <div class="input-group">
                <div class="input-group-addon">
                  <div class="form-lable">确认密码</div>
                </div>
                <input class="form-control  input-text Validform_error" type="text" datatype="m" placeholder="再次输入登录密码" name="tel" errormsg="再次输入登录密码!" nullmsg="请填写信息！">
                <div class="input-group-btn">
                  <span class="clear-txt"></span>
                </div>
              </div>
              <!--错误提示-->
              <div class=" message-box  f-12">
                <span class=" Validform_checktip">请填写信息！</span>
              </div>
            </div>
            <button @click="sub" class="btn btn-md btn-main btn-block f-16 mt-40" type="button">确认</button>
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
        this.$Message.success("密码设置成功！");
        this.user_id=1;
        /*设置密码*/
        setTimeout(()=>{
          this.$router.push({path:"/index"});
        },2000);
      }
    },
    components:{footerItem}
  }

</script>
