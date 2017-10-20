<template>
  <div class="panel " style="min-height: 500px">
    <div class="panel-heading">
      重置登录密码
    </div>
    <div class="panel-body">
      <i-Form  ref="formCustom" :model="formCustom" :rules="ruleCustom" :label-width="100" class="mt-40 ml-100" style="width:400px" >
        <Form-Item  label="修改前密码" prop="before_pwd">
          <i-input type="password" v-model="formCustom.before_pwd"></i-input>
        </Form-Item>
        <Form-Item label="新登录密码" prop="new_pwd">
          <i-input type="password" v-model="formCustom.new_pwd"></i-input>
        </Form-Item>
        <Form-Item label="再次输入密码" prop="pwd_check">
          <i-input type="password" v-model="formCustom.pwd_check"></i-input>
        </Form-Item>
        <Form-Item label="">
          <button type="button" class="btn btn-main" @click="handleSubmit('formCustom')">重置密码</button>
        </Form-Item>
      </i-Form>
    </div>
  </div>
</template>
<script>
    export default {
        data(){
          const validate_before_pwd = (rule, value, callback) => {
            if (!value) {
              return callback(new Error('密码不能为空'));
            }
            // 模拟异步验证效果
            callback()
          };
          const validate_new_pwd = (rule, value, callback) => {
            if (value === '') {
              callback(new Error('请输入新密码'));
            } else {
                if(this.formCustom.pwd_check!==""){
                  // 对第二个密码框单独验证
                  this.$refs.formCustom.validateField("pwd_check")
                }
                callback()
            }
          };
          const validate_pwd_check = (rule, value, callback) => {
              if (value === '') {
                callback(new Error('请再次输新入密码'));
              } else if (value !== this.formCustom.new_pwd) {
                callback(new Error('两次输入密码不一致!'));
              } else {
                callback();
              }
          };
          return {
              formCustom: {
                before_pwd: '',
                new_pwd: '',
                pwd_check: ''
              },
              ruleCustom: {
                before_pwd: [
                  { validator: validate_before_pwd, trigger: 'blur' }
                ],
                new_pwd: [
                  { validator: validate_new_pwd, trigger: 'blur' }
                ],
                pwd_check: [
                  { validator: validate_pwd_check, trigger: 'blur' }
                ]
              }
            }
        },
        methods: {
          handleSubmit (name) {
            this.$refs[name].validate((valid) => {
              if (valid) {
                this.$Message.success('提交成功!');
              } else {
                this.$Message.error('表单验证失败!');
              }
            })
          },
        }
    }
</script>
