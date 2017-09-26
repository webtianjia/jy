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
            <!--昵称-->
            <div class="form-group">
              <div class="input-group ">
                <div class="input-group-addon">
                  <div class="form-lable">昵称</div>
                </div>
                <input class="form-control   input-text Validform_wrong" type="text" placeholder="请输入昵称" datatype="s6-18" errormsg="昵称至少6个字符,最多18个字符" nullmsg="请填写信息！">
                <div class="input-group-btn">
                  <span class="clear-txt"></span>
                </div>
              </div>
              <!--错误提示-->
              <div class=" message-box  f-12">
                <span class=" Validform_checktip">请填写信息</span>
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
            <button class="btn btn-md btn-main btn-block f-16 mt-40" type="button">同意条款并注册</button>
            <p class="f-12 text-center mt-10 ">点击注册，即表示已阅读并同意 <a href="服务协议.html">《服务条款》</a></p>
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
    components:{footerItem}
  }
</script>
