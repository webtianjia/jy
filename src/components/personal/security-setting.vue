<template>
<div>
  <div class="panel bg_f8f8f8">
    <div class="panel-body ml-80 mt-50 mb-50">
      <div class="media">
        <div class="media-left">
          <img src="../../assets/images/icons/i-65.png" height="70" width="70"/>
        </div>
        <div class="media-body">
          <div class="rg mr-20 mt-10"><router-link class="btn btn-main" to="/personal_information/modify_pwd">修改登录密码</router-link></div>
          <div class="f-16 mt-10">登录密码</div>
          <div class="">注重隐私，勿轻易告知别人登录密码，定期修改密码</div>
        </div>
      </div>
    </div>
  </div>
  <div class="panel">
    <div class="panel-body ml-80 mt-50 mb-50">
      <div class="media">
        <div class="media-left">
          <img src="../../assets/images/icons/i-66.png" height="70" width="70"/>
        </div>
        <div class="media-body">
          <div class="rg mr-20 mt-10"><router-link class="btn btn-main"  to="/personal_information/modify_payment">修改支付密码</router-link></div>
          <div class="f-16 mt-10">余额支付密码</div>
          <div class="">切记外泄支付密码，做好支付密码管理工作，定期修改密码</div>
        </div>
      </div>
    </div>
  </div>
  <div class="panel bg_f8f8f8">
    <div class="panel-body ml-80 mt-50 mb-50">
      <div class="media">
        <div class="media-left">
          <img src="../../assets/images/icons/i-67.png" height="70" width="70"/>
        </div>
        <div class="media-body">
          <div class="rg mr-20 mt-10"><router-link class="btn btn-main"  to="/personal_information/modify_phone">修改绑定账号</router-link></div>
          <div class="f-16 mt-10">手机号</div>
          <div class="">手机号与账号紧密绑定，请注重手机短信信息的保密性</div>
        </div>
      </div>
    </div>
  </div>
</div>
</template>
<script>
    export default {
        data(){
            return {}
        },
        methods: {}
    }
</script>
