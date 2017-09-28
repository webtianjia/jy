<template>
  <div class="panel " style="min-height: 500px">
    <div class="panel-heading">
      修改支付密码
    </div>
    <div class="panel-body">
      <i-Form  :label-width="100" class="mt-40 ml-100" style="width:400px" >
        <Form-Item label="手机号">
          <i-input></i-input>
        </Form-Item>
        <Form-Item label="短信验证码">
          <i-input style="width: 185px"></i-input>
          <button type="button" class="btn btn-outline ml-10">获取验证码</button>
        </Form-Item>
        <Form-Item label="原支付密码">
          <i-input></i-input>
        </Form-Item>
        <Form-Item label="新支付密码">
          <i-input></i-input>
        </Form-Item>
        <Form-Item label="再次输入密码">
          <i-input></i-input>
        </Form-Item>
        <Form-Item label="验证码">
          <i-input style="width: 148px"></i-input>
          <a href="#" class="ml-10">
            <img style="width: 100px;height: 32px" src="../../images/list/createCode.jpg">
            换一换</a>
        </Form-Item>
        <Form-Item label="">
          <button type="button" class="btn btn-main">重置密码</button>
        </Form-Item>
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
