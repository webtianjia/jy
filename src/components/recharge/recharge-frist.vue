<template>
      <div class=" recharge">
          <div  class="container">
            <div class="well mt-20">
              <div class="ml-50">
                <div class="lf">
                  <img src="../../assets/images/icons/i-9.png" height="35" width="35"/>
                </div>
                <div class="ml-50 ">
                  <p>您第一次进行账户充值，为增强账户的安全性，充值前请设置支付密码！</p>
                  <p class="col-999">请安排专人做好密码管理，账户的安全，需要我们一起慎重对待。</p>
                </div>
              </div>
            </div>
            <div class="well-lg well">
              <div class="ml-50">
                <div class="lf">
                  <img src="../../assets/images/icons/i-10.png" height="31" width="26"/>
                </div>
                <div class="ml-20 f-16 lf mt-10">设置支付密码</div>
              </div>
              <div class="clearfix"></div>
              <i-Form   class="mt-40 ml-100 lf" :label-width="100" style="width: 340px">
                <Form-Item label="手机号"  >
                  <i-Input  placeholder="请输入手机号"></i-Input>
                </Form-Item>
                <Form-Item label="短信验证码" >
                  <i-Input style="width: 118px" placeholder="输入验证码"></i-Input><button type="button" class="btn ml-20 btn-outline">获取验证码</button>
                </Form-Item>
                <Form-Item label="设置支付密码">
                  <i-Input  placeholder="设置您支付密码"></i-Input>
                </Form-Item>
                <Form-Item label="确认支付密码" >
                  <i-Input  placeholder="再次输入您的支付密码 "></i-Input>
                </Form-Item>
                <Form-item label="">
                  <button type="button" class="btn btn-main" @click="hasSubmit">确认</button>
                </Form-item>
              </i-Form>
              <div class="clearfix"></div>
            </div>
          </div>
          <v-footer></v-footer>
      </div>
</template>
<script>
    export default {
        data(){
            return {
              form_validate:{
                  phone:"",
                  code:"",
                  pwd:""
              }
            }
        },
        methods: {
          hasSubmit(){

          }
        }
    }
</script>
