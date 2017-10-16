
<template>
  <div>
    <div class="main recharge">
      <div v-if="status===1" class="container">
        <div class="f-16 top">
          <span>账户充值   当前余额 J$ 111.00</span>
        </div>
        <div class="well-lg well">
          <Tabs value="name1">
            <TabPane icon="ios-monitor-outline"  label="在线充值" name="name1">
              <Form   :label-width="100" class="mt-40 ml-100" style="width:380px;">
                <Form-Item label="充值金额">
                  <i-Input v-model="form_online.payment_amount" placeholder="J$ "></i-Input>
                </Form-Item>
                <Form-item  v-for="(item,index) in price_list">
                  <div @click="option_price(index)" class="checked-item" :class="{'checked':item.checked}">J$  {{item.price}}</div>
                </Form-item>
                <Form-item label="支付方式">
                  <Radio-Group v-model="form_online.radio" vertical>
                    <div class="checked-item">
                      <Radio label="zfb"><i class="icon-zfb"></i>支付宝支付</Radio>
                    </div>
                    <div class="checked-item mt-30">
                      <Radio label="wx"><i class="icon-wx"></i>微信支付</Radio>
                    </div>
                  </Radio-Group>
                </Form-item>
                <Form-item>
                  <button class="btn btn-main" type="button">立即充值</button>
                </Form-item>
              </Form>
            </TabPane>
            <TabPane icon="card"  label="线下转账" name="name2">
              <i-Form :model="form_line"  class="mt-40 ml-100 lf" :label-width="100" style="width: 380px">
                <Form-Item label="付款银行" >
                  <i-Input  v-model="form_line.paying_bank"></i-Input>
                    <!-- <div class="ivu-form-item-error-tip">请输入正确的银行账号</div>-->
                </Form-Item>
                <Form-Item label="付款账号" >
                  <i-Input v-model="form_line.paying_account"></i-Input>
                  <!--  <div class="ivu-form-item-error-tip" v-if="is_sub">账号不能为空</div>-->
                </Form-Item>
                <Form-Item label="交易流水号">
                  <i-Input v-model="form_line.batch"></i-Input>
                  <!--<div class="ivu-form-item-error-tip">交易流水号不能为空</div>-->
                </Form-Item>
                <Form-Item label="付款金额">
                  <i-Input v-model="form_line.payment_amount" placeholder="J$ "></i-Input>
                  <!--  <div class="ivu-form-item-error-tip">支付金额不能为空</div>-->
                </Form-Item>
                <Form-item>
                  <button type="button" class="btn btn-main" @click="hasSubmit">确认提交</button>
                </Form-item>
                <Form-item>
                  <p class="f-12 col-999 info-text">注：线下付款详情会作为到账确认的重要凭证，2个工作日内核准到账；在“我的账户”的“交易记录”中可跟踪。 </p>
                </Form-item>
              </i-Form>
              <div class="table-bordered rg mr-100 mt-40">
                <table class="table mb-0">
                  <thead>
                  <tr>
                    <td width="150" colspan="1">收款账号资料</td>
                    <td width="200"></td>
                  </tr>
                  </thead>
                  <tbody>
                  <tr>
                    <td>收款账户名</td>
                    <td>上海吉凯生物科技有限公司</td>
                  </tr>
                  <tr>
                    <td>收款银行</td>
                    <td>中国银行深圳市科技园支行</td>
                  </tr>
                  <tr>
                    <td>收款账号</td>
                    <td>4558 6548 9898 1254</td>
                  </tr>
                  <tr>
                    <td>联系电话</td>
                    <td>0755-8214567</td>
                  </tr>
                  </tbody>
                </table>
              </div>
            </TabPane>
          </Tabs>
        </div>
      </div>
      <div v-if="status===2" class="container">
        <div class="well-lg well text-c mt-20">
          <div><img src="../../assets/images/icons/i-11.png" height="229" width="400"/></div>
          <div class="f-16 mt-20">提交转账凭证成功，等待后台确认</div>
          <div class="col-999">预计两个工作日到账</div>
          <div class="mt-50">
            <router-link class="btn btn-main" to="/control_panel/my_account">充值记录</router-link>
          </div>
          <div class="f-12 col-999 mt-10">点击 <span class="col-666">“充值记录”</span>可以查看到账情况 </div>
          <div class="mt-100"></div>
        </div>
      </div>
      <div v-if="status===3" class="container">
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
              <!--   <div class="ivu-form-item-error-tip" v-if="is_sub">请输入正确的手机号</div>-->
            </Form-Item>
            <Form-Item label="短信验证码" >
              <i-Input style="width: 118px" placeholder="输入验证码"></i-Input><button type="button" class="btn ml-20 btn-outline">获取验证码</button>
              <!--  <div class="ivu-form-item-error-tip" v-if="is_sub">账号不能为空</div>-->
            </Form-Item>
            <Form-Item label="设置支付密码">
              <i-Input  placeholder="设置您支付密码"></i-Input>
              <!--<div class="ivu-form-item-error-tip">交易流水号不能为空</div>-->
            </Form-Item>
            <Form-Item label="确认支付密码" >
              <i-Input  placeholder="再次输入您的支付密码 "></i-Input>
              <!--  <div class="ivu-form-item-error-tip">支付金额不能为空</div>-->
            </Form-Item>
            <Form-item label="">
              <button type="button" class="btn btn-main" @click="hasSubmit">确认</button>
            </Form-item>
          </i-Form>
          <div class="clearfix"></div>
        </div>
      </div>
    </div>
    <div class="text-c">
      <button @click="test">test</button>
    </div>
    <footer-item></footer-item>
  </div>
</template>
<script>
  import  footerItem from "../comm/footer.vue"
  export  default {
    data(){
      return {
        status:1,
        price_list:[
          {
            checked:false,
            price:50.00
          },
          {
            checked:false,
            price:100.00
          },
          {
            checked:false,
            price:200.00
          }
        ],
        form_online:{/*在线*/
          payment_amount:"",
          radio: 'zfb',
        },
        form_line:{/*线下*/
          paying_bank:"", /*付款银行*/
          paying_account:"",/*付款账号*/
          batch:"",/*交易流水*/
          payment_amount:""/*付款金额*/
        }
      }
    },
    methods:{
      option_price(index){ /*选择价格*/
        this.price_list.forEach(function (i,index,val) {
          val[index].checked=false
        });
        this.price_list[index].checked=true;
        this.form_online.payment_amount=this.price_list[index].price
      },
      hasSubmit () { /*提交验证*/

      },
      test(){
        this.status++
        this.status>3&& (this.status=1);
      }
    },
    components:{footerItem}
  }
</script>
