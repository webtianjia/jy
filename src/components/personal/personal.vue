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
            <div class="mt-20">我是一个用户名1</div>
            <div class="mt-10">上次登录时间： 2017-08-17  15:18:17</div>
          </div>
        </div>
      </div>
    </div>
    <div class="panel mt-10 user_msg" style="min-height: 500px">
      <div class="panel-heading">
        基础资料 <button type="button" @click="edit=!edit" :class="{'active':edit}" class="user_edit_btn ml-10" ></button>
      </div>
      <div class="panel-body">
        <i-Form  :label-width="80" class="mt-40 ml-100" style="width:400px" >
          <Form-Item label="注册账号">
            <i-Input  placeholder="请输入" value="138****4368"  :disabled="!edit"></i-Input>
          </Form-Item>
          <Form-Item label="昵称">
            <i-Input  placeholder="请输入" value="多肽小王子" :disabled="!edit"></i-Input>
          </Form-Item>
          <Form-Item label="联系电话">
            <i-Input  placeholder="请输入" value="138****4368" :disabled="!edit"></i-Input>
          </Form-Item>
          <Form-Item label="Email">
            <i-Input  placeholder="请输入" value="yfguo@kaiyan.biz" :disabled="!edit"></i-Input>
          </Form-Item>
          <Form-Item label="所在城市">
            <span v-if="!edit">{{address.label}}</span>
            <i-Select v-else   placeholder="请选择" @on-change="sel_option_address" clearable  label-in-value>
              <i-Option v-for="item in user_msg.cityList" :value="item.value" :key="item.value">{{ item.label }}</i-Option>
            </i-Select>
          </Form-Item>
          <Form-Item label="客户类型">
            <span v-if="!edit">{{customer_type.label}}</span>
            <i-Select v-else  placeholder="请选择" @on-change="sel_option_customer_type" label-in-value>
              <i-Option value="0">看热闹的</i-Option>
              <i-Option value="1">基因兴趣爱好者</i-Option>
              <i-Option value="2">科研爱好者</i-Option>
              <i-Option value="3">瞎玩玩的</i-Option>
            </i-Select>
          </Form-Item>
          <Form-Item>
            <button v-if="edit" @click="edit=false" class="btn btn-main">保存设置</button>
          </Form-Item>
        </i-Form>
      </div>
    </div>
  </div>
</template>
<script>
    export default {
        data(){
            return {
              edit:false,
              address:"",
              customer_type:"",
              user_msg:{
                customer_type:"",
                cityList: [
                  {
                    value: 'beijing',
                    label: '北京市'
                  },
                  {
                    value: 'shanghai',
                    label: '上海市'
                  },
                  {
                    value: 'shenzhen',
                    label: '深圳市'
                  },
                  {
                    value: 'hangzhou',
                    label: '杭州市'
                  },
                  {
                    value: 'nanjing',
                    label: '南京市'
                  },
                  {
                    value: 'chongqing',
                    label: '重庆市'
                  }
                ],
              }

            }
        },
        methods: {
          sel_option_address(option){
            this.address=option;
            console.log(this.address)
          },
          sel_option_customer_type(option){
            this.customer_type=option;
            console.log(this.user_msg)
          }
        },
      watch:{
        user_msg:function () {
          console.log(this.user_msg.address)
        }
      }
    }
</script>
