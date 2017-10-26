<template>
  <div class="main">
    <div class="login-and-regsiter mt-60">
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
                <input
                  v-validate="'required|min:6|max:20|alpha_num'"
                  name="pwd"
                  v-model="form_validate.pwd"
                  class="form-control   input-text "
                  type="password"
                  autocomplete="off"
                  placeholder="设置您的登录密码">
                <div class="input-group-btn">
                  <span v-show="form_validate.pwd!=''&&errors.has('pwd')" @click="form_validate.pwd=''" class="clear-txt"></span>
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
                  type="password"
                  autocomplete="off"
                  placeholder="再次输入登录密码">
                <div class="input-group-btn">
           <!--       <span v-show="form_validate.pwdnewagin!=''&&errors.has('pwdnewagin')" @click="form_validate.pwdnewagin=''" class="clear-txt"></span>-->
                </div>
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
            <button @click="sub" class="btn btn-md btn-main btn-block f-16 mt-40" type="button">确认</button>
          </div>
        </div>
      </div>
    </div>
    <v-footer></v-footer>
  </div>
</template>

<script>
  export  default{
    data(){
      return {
        form_validate:{
          user_id:"",
          pwd:"",
        }
      }
    },
    methods:{
      sub(){
        this.$validator.validateAll().then((result) => {
          if (result) {
            /*AJAX*/
            var form_data = JSON.stringify(this.form_validate)
            this.$Message.success("密码设置成功!");
            this.user_id = 1;
            console.log(form_data)
            setTimeout(() => {
              this.$router.push({path: "/login"});
            }, 2000);
          } else {
            alert('有错误!');
          }
        });
      }
    }
  }

</script>
