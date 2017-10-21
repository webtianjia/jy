<style  lang='less' >
  .ivu-form-item-required .ivu-form-item-label:before{
    display: none;
  }
</style>
<template>
  <div>
    <div class="panel">
      <div class="panel-body ">
        <div class="media">
          <div class="media-left">
            <img class="img-circle" src="../../assets/images/list/head-2.png" height="80" width="80"/>
          </div>
          <div class="media-body">
            <div class="rg mt-10" style="margin-right: 250px;">
              <div>账户余额  J$ 320.22</div>
              <div class="mt-10"><router-link to="/recharge" class="btn btn-main">立即充值</router-link></div>
            </div>
            <div class="mt-20">{{personal_information.user_name}}</div>
            <div class="mt-10">上次登录时间： 2017-08-17  15:18:17</div>
          </div>
        </div>
      </div>
    </div>
    <div class="panel mt-10 user_msg" style="min-height: 500px">
      <div class="panel-heading">
        基础资料 <button type="button" @click="is_edit=true" :class="{'active':is_edit}" class="user_edit_btn ml-10" ></button>
      </div>
      <div class="panel-body">
        <i-Form ref="personal_information" :model="personal_information" :rules="ruleCustom"   :label-width="110" class="mt-40 ml-100" style="width:400px" >
          <Form-Item label="用户编号">
            <i-Input  placeholder="请输入" value="6461816ng" disabled></i-Input>
          </Form-Item>
          <Form-Item label="注册账号">
            <i-Input  placeholder="请输入" value="138****4368"  disabled></i-Input>
          </Form-Item>
          <Form-Item label="用户名" prop="user_name">
            <i-Input v-model="personal_information.user_name"  placeholder="请输入" :disabled="!is_edit"></i-Input>
          </Form-Item>
          <Form-Item label="联系电话" prop="phone">
            <i-Input v-model="personal_information.phone"  placeholder="请输入"  :disabled="!is_edit"></i-Input>
          </Form-Item>
          <Form-Item label="Email" prop="email">
            <i-Input v-model="personal_information.email"  placeholder="请输入" :disabled="!is_edit"></i-Input>
          </Form-Item>
          <Form-Item label="吉凯账户余额">
            <i-Input  placeholder="请输入" value="￥6000.00" disabled></i-Input>
          </Form-Item>
          <Form-Item label="吉凯信用账户余额">
            <i-Input  placeholder="请输入" value="￥6000.00" disabled></i-Input>
          </Form-Item>
          <Form-Item label="收货地址">
            <i-Input  placeholder="请输入" value="深圳市南山区平山一路世外桃源创意园C-509" :disabled="!is_edit"></i-Input>
          </Form-Item>
          <Form-Item label="发票寄送地址">
            <i-Input  placeholder="请输入" value="深圳市南山区平山一路世外桃源创意园C-509" :disabled="!is_edit"></i-Input>
          </Form-Item>
          <Form-Item label="客户类型">
            <span v-if="!is_edit">{{personal_information.customer_type.label}}</span>
            <i-Select v-else  placeholder="请选择" @on-change="select_customer" label-in-value>
              <i-Option v-for="item in customer_list" :value="item.value" :key="item.value">{{item.label}}</i-Option>
            </i-Select>
          </Form-Item>
          <Form-Item>
            <button v-if="is_edit" type="button" @click="handleSubmit('personal_information')" class="btn btn-main">保存设置</button>
          </Form-Item>
        </i-Form>
      </div>
    </div>
  </div>
</template>
<script>
    export default {
        data(){
          const validate_phone = (rule, value, callback) => {
            if (value === '') {
              callback(new Error('请填写手机号'));
            } else  if (!(/^1[34578]\d{9}$/.test(this.personal_information.phone) ||/^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/.test(this.personal_information.phone))){
              callback(new Error('请填写正确手机号'));
            }else {
              callback();
            }
          };
            return {
              is_edit:false,
              personal_information:{
                user_name:"多肽小王子",
                phone:"138****4368",
                email:"yfguo@kaiyan.biz",
                customer_type:{
                    value: 'krl',
                    label: '看热闹的'
                },
              },
              customer_list:[
                {
                  value: 'krl',
                  label: '看热闹的'
                },
                {
                  value: 'keyan',
                  label: '科研爱好者'
                },
                {
                  value: 'aihao',
                  label: '基因兴趣爱好者'
                },
                {
                  value: 'crn',
                  label: '凑热闹'
                },
              ],
              ruleCustom: {
                user_name: [
                  { required: true, message: '请填写用户名', trigger: 'blur' }
                ],
                phone: [
                  {  validator: validate_phone, trigger: 'blur' },
                ],
                email:[
                  { required: true, message: '邮箱不能为空', trigger: 'blur' },
                  { type: 'email', message: '邮箱格式不正确', trigger: 'blur' }
                ]
              }
            }
        },
        methods: {
          select_customer(option){
            console.log(option)
          },
          handleSubmit(name){
            this.$refs[name].validate((valid) => {
              if (valid) {
                this.$Message.success('提交成功!');
                this.is_edit=false
              } else {
                this.$Message.error('表单验证失败!');
              }
            })
          }
        }
    }
</script>

