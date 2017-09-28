<template>
  <div class="panel " style="min-height: 500px">
    <div class="panel-heading">
      重置登录密码
    </div>
    <div class="panel-body">
      <i-Form  :label-width="100" class="mt-40 ml-100" style="width:400px" >
        <Form-Item label="修改前密码">
          <i-input></i-input>
        </Form-Item>
        <Form-Item label="新登录密码">
          <i-input></i-input>
        </Form-Item>
        <Form-Item label="再次输入密码">
          <i-input></i-input>
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
