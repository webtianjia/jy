
<template>
  <div class="recharge">
      <div class="container ">
        <div class="f-16 top">
          <span>账户充值   当前余额 J$ 111.00</span>
        </div>
        <div class="well-lg well">
         <Tabs value="name1">
            <TabPane icon="ios-monitor-outline"  label="在线充值" name="name1">
              <Form   :label-width="100" class="mt-40 ml-100" style="width:380px;">
                <Form-Item label="充值金额" :class="{'ivu-form-item-error':errors.has('payment_amount')}">
                  <i-Input  v-validate="'required|numeric'" name="payment_amount"  v-model="form_online.payment_amount" placeholder="J$ "></i-Input>
                  <div class="ivu-form-item-error-tip" v-show="errors.has('payment_amount')">请正确填写充值金额</div>
                </Form-Item>
                <Form-item  v-for="(item,index) in price_list">
                  <div @click="option_price(index)" class="checked-item" :class="{'checked':item.checked}">J$  {{item.price}}</div>
                </Form-item>
                <Form-item label="支付方式">
                  <Radio-Group v-model="form_online.radio" vertical>
                    <div class="checked-item ">
                      <Radio label="jk"> &nbsp;&nbsp;&nbsp;&nbsp;吉凯余额支付</Radio>
                    </div>
                    <div class="checked-item mt-30">
                      <Radio label="zfb"><i class="icon-zfb"></i>支付宝支付</Radio>
                    </div>
                    <div class="checked-item mt-30">
                      <Radio label="wx"><i class="icon-wx"></i>微信支付</Radio>
                    </div>
                  </Radio-Group>
                </Form-item>
                <Form-item>
                  <button class="btn btn-main" type="button" @click="form_online_Submit" >立即充值</button>
                </Form-item>
              </Form>
            </TabPane>
            <TabPane icon="card"  label="线下转账" name="name2">
              <i-Form :model="form_line"  ref="form_line"  :rules="ruleInline"  class="mt-40 ml-100 lf" :label-width="100" style="width: 380px">
                <Form-Item label="付款银行" prop="paying_bank">
                  <i-Input  v-model="form_line.paying_bank"></i-Input>
                </Form-Item>
                <Form-Item label="付款账号" prop="paying_account">
                  <i-Input v-model="form_line.paying_account"></i-Input>
                </Form-Item>
                <Form-Item label="交易流水号" prop="batch" >
                  <i-Input v-model="form_line.batch"></i-Input>
                </Form-Item>
                <Form-Item label="付款金额" prop="payment_amount">
                  <i-Input v-model="form_line.payment_amount" placeholder="J$ "></i-Input>
                </Form-Item>
                <Form-item>
                  <button type="button" class="btn btn-main" @click="form_line_Submit('form_line')">确认提交</button>
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
      <v-footer></v-footer>
  </div>
</template>
<script>

  export  default {
    data(){
      return {
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
          radio: 'jk',
        },
        form_line:{/*线下*/
          paying_bank:"", /*付款银行*/
          paying_account:"",/*付款账号*/
          batch:"",/*交易流水*/
          payment_amount:""/*付款金额*/
        },
        ruleInline: {
          paying_bank: [
            { required: true, message: '请填写付款银行', trigger: 'blur' }
          ],
          paying_account: [
            { required: true, message: '请填写付款账号', trigger: 'blur' },
          ],
          batch: [
            { required: true, message: '请填写交易流水', trigger: 'blur' },
          ],
          payment_amount: [
            { required: true, message: '请填写金额', trigger: 'change' },
          ]
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
      form_line_Submit (name) { /*线下*/
        this.$refs[name].validate((valid) => {
          if (valid) {
            this.$Message.success('提交成功!');
            this.$router.replace({"name":"首次充值设置密码",path:"/recharge-frist"})
          } else {
            this.$Message.error('表单验证失败!');
          }
        })
      },
      form_online_Submit(){
        this.$validator.validateAll().then((result) => {
          if (result) {
            /*AJAX*/
            this.$router.replace({"name":"充值成功",path:"/recharge-success"})
          }else {
            this.$Message.error('表单验证失败!');
          }
        });
      },
    }
  }
</script>
