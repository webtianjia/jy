<template>
  <div>
    <div class="panel mt-10">
      <div class="mt-20 ml-10">
        <ul class="tabs">
          <li class="mr-80" @click="type=0" :class="{'active':type===0}">
            <a href="javascript:void(0)">
              <span>支付记录</span>
              <span class="badge">4</span>
            </a>
            <i></i>
          </li>
          <li class="type=1" @click="type=1"  :class="{'active':type===1}">
            <a href="javascript:void(0)">
              <span>充值记录</span>
              <span class="badge">56</span>
            </a>
            <i></i>
          </li>
        </ul>
      </div>
      <div class="mt-20"></div>
    </div>
    <div class="panel mt-10">
      <div class="mt-20 ml-10">
        <Row>
          <i-Col span="6">
            <Date-Picker type="daterange" placement="bottom-end" placeholder="选择日期" style="width: 200px"></Date-Picker>
          </i-Col>
          <i-Col span="6">
            <i-Select  style="width:100px" placeholder="交易状态">
              <i-Option value="success">交易成功</i-Option>
              <i-Option value="not-success">交易失败</i-Option>
            </i-Select>
          </i-Col>
          <i-Col span="6">
            <i-Input  placeholder="支付/交易号" class="search-input" style="width: 300px">
              <i-Button slot="append" class="search-btn">搜索</i-Button>
            </i-Input>
          </i-Col>
        </Row>
      </div>
      <div class="mt-20"></div>
    </div>
    <!--支付记录-->
    <div v-if="type===0"  class="panel mt-10">
      <table class="table table-hover">
        <thead >
        <tr class="bg_f8f8f8">
          <td><img class="mr-5" src="../../assets/images/icons/i-42.png">支付交易号</td>
          <td><img class="mr-5" src="../../assets/images/icons/i-48.png">项目</td>
          <td><img class="mr-5" src="../../assets/images/icons/i-43.png">支付金额</td>
          <td><img class="mr-5" src="../../assets/images/icons/i-47.png">明细</td>
          <td><img class="mr-5" src="../../assets/images/icons/i-45.png">账号余额</td>
          <td><img class="mr-5" src="../../assets/images/icons/i-46.png">交易状态</td>
          <td><img class="mr-5" src="../../assets/images/icons/i-40.png">时间</td>
        </tr>
        </thead>
        <tbody class="col-666">
        <tr>
          <td>
            <p>AP170818A244IP</p>
          </td>
          <td>
            <p>SSEAL-009881SEAL-0098...SEAL-009881SEAL-0098...SEAL-009881SEAL-0098...SEAL-009881SEAL-0098...SEAL-009881SEAL-0098...SEAL-009881SEAL-0098......</p>
          </td>
          <td>
            <p>0.990.990.990...</p>
          </td>
          <td>
            <p>SEAL-009881SEAL-0098...SEAL-009881SEAL-0098...SEAL-009881SEAL-0098...SEAL-009881SEAL-0098...SEAL-009881SEAL-0098...,,,</p>
          </td>
          <td><p>53.70.990.990....</p></td>
          <td><p>交易成功</p></td>
          <td><p>2017-08-09 15:23:45</p></td>
        </tr>
        <tr>
          <td>
            <p>AP170818A244IP</p>
          </td>
          <td>
            <p>SSEAL-009881SEAL-0098...SEAL-009881SEAL-0098...SEAL-009881SEAL-0098...SEAL-009881SEAL-0098...SEAL-009881SEAL-0098...SEAL-009881SEAL-0098......</p>
          </td>
          <td>
            <p>0.990.990.990...</p>
          </td>
          <td>
            <p>SEAL-009881SEAL-0098...SEAL-009881SEAL-0098...SEAL-009881SEAL-0098...SEAL-009881SEAL-0098...SEAL-009881SEAL-0098...,,,</p>
          </td>
          <td><p>53.70.990.990....</p></td>
          <td><p>交易成功</p></td>
          <td><p>2017-08-09 15:23:45</p></td>
        </tr>
        <tr>
          <td>
            <p>AP170818A244IP</p>
          </td>
          <td>
            <p>SSEAL-009881SEAL-0098...SEAL-009881SEAL-0098...SEAL-009881SEAL-0098...SEAL-009881SEAL-0098...SEAL-009881SEAL-0098...SEAL-009881SEAL-0098......</p>
          </td>
          <td>
            <p>0.990.990.990...</p>
          </td>
          <td>
            <p>SEAL-009881SEAL-0098...SEAL-009881SEAL-0098...SEAL-009881SEAL-0098...SEAL-009881SEAL-0098...SEAL-009881SEAL-0098...,,,</p>
          </td>
          <td><p>53.70.990.990....</p></td>
          <td><p>交易成功</p></td>
          <td><p>2017-08-09 15:23:45</p></td>
        </tr>
        <tr>
          <td>
            <p>AP170818A244IP</p>
          </td>
          <td>
            <p>SSEAL-009881SEAL-0098...SEAL-009881SEAL-0098...SEAL-009881SEAL-0098...SEAL-009881SEAL-0098...SEAL-009881SEAL-0098...SEAL-009881SEAL-0098......</p>
          </td>
          <td>
            <p>0.990.990.990...</p>
          </td>
          <td>
            <p>SEAL-009881SEAL-0098...SEAL-009881SEAL-0098...SEAL-009881SEAL-0098...SEAL-009881SEAL-0098...SEAL-009881SEAL-0098...,,,</p>
          </td>
          <td><p>53.70.990.990....</p></td>
          <td><p>交易成功</p></td>
          <td><p>2017-08-09 15:23:45</p></td>
        </tr>
        <tr>
          <td>
            <p>AP170818A244IP</p>
          </td>
          <td>
            <p>SSEAL-009881SEAL-0098...SEAL-009881SEAL-0098...SEAL-009881SEAL-0098...SEAL-009881SEAL-0098...SEAL-009881SEAL-0098...SEAL-009881SEAL-0098......</p>
          </td>
          <td>
            <p>0.990.990.990...</p>
          </td>
          <td>
            <p>SEAL-009881SEAL-0098...SEAL-009881SEAL-0098...SEAL-009881SEAL-0098...SEAL-009881SEAL-0098...SEAL-009881SEAL-0098...,,,</p>
          </td>
          <td><p>53.70.990.990....</p></td>
          <td><p>交易成功</p></td>
          <td><p>2017-08-09 15:23:45</p></td>
        </tr>
        <tr>
          <td>
            <p>AP170818A244IP</p>
          </td>
          <td>
            <p>SSEAL-009881SEAL-0098...SEAL-009881SEAL-0098...SEAL-009881SEAL-0098...SEAL-009881SEAL-0098...SEAL-009881SEAL-0098...SEAL-009881SEAL-0098......</p>
          </td>
          <td>
            <p>0.990.990.990...</p>
          </td>
          <td>
            <p>SEAL-009881SEAL-0098...SEAL-009881SEAL-0098...SEAL-009881SEAL-0098...SEAL-009881SEAL-0098...SEAL-009881SEAL-0098...,,,</p>
          </td>
          <td><p>53.70.990.990....</p></td>
          <td><p>交易成功</p></td>
          <td><p>2017-08-09 15:23:45</p></td>
        </tr>
        <tr>
          <td>
            <p>AP170818A244IP</p>
          </td>
          <td>
            <p>SSEAL-009881SEAL-0098...SEAL-009881SEAL-0098...SEAL-009881SEAL-0098...SEAL-009881SEAL-0098...SEAL-009881SEAL-0098...SEAL-009881SEAL-0098......</p>
          </td>
          <td>
            <p>0.990.990.990...</p>
          </td>
          <td>
            <p>SEAL-009881SEAL-0098...SEAL-009881SEAL-0098...SEAL-009881SEAL-0098...SEAL-009881SEAL-0098...SEAL-009881SEAL-0098...,,,</p>
          </td>
          <td><p>53.70.990.990....</p></td>
          <td><p>交易成功</p></td>
          <td><p>2017-08-09 15:23:45</p></td>
        </tr>
        <tr>
          <td>
            <p>AP170818A244IP</p>
          </td>
          <td>
            <p>SSEAL-009881SEAL-0098...SEAL-009881SEAL-0098...SEAL-009881SEAL-0098...SEAL-009881SEAL-0098...SEAL-009881SEAL-0098...SEAL-009881SEAL-0098......</p>
          </td>
          <td>
            <p>0.990.990.990...</p>
          </td>
          <td>
            <p>SEAL-009881SEAL-0098...SEAL-009881SEAL-0098...SEAL-009881SEAL-0098...SEAL-009881SEAL-0098...SEAL-009881SEAL-0098...,,,</p>
          </td>
          <td><p>53.70.990.990....</p></td>
          <td><p>交易成功</p></td>
          <td><p>2017-08-09 15:23:45</p></td>
        </tr>
        <tr>
          <td>
            <p>AP170818A244IP</p>
          </td>
          <td>
            <p>SSEAL-009881SEAL-0098...SEAL-009881SEAL-0098...SEAL-009881SEAL-0098...SEAL-009881SEAL-0098...SEAL-009881SEAL-0098...SEAL-009881SEAL-0098......</p>
          </td>
          <td>
            <p>0.990.990.990...</p>
          </td>
          <td>
            <p>SEAL-009881SEAL-0098...SEAL-009881SEAL-0098...SEAL-009881SEAL-0098...SEAL-009881SEAL-0098...SEAL-009881SEAL-0098...,,,</p>
          </td>
          <td><p>53.70.990.990....</p></td>
          <td><p>交易成功</p></td>
          <td><p>2017-08-09 15:23:45</p></td>
        </tr>
        <tr>
          <td>
            <p>AP170818A244IP</p>
          </td>
          <td>
            <p>SSEAL-009881SEAL-0098...SEAL-009881SEAL-0098...SEAL-009881SEAL-0098...SEAL-009881SEAL-0098...SEAL-009881SEAL-0098...SEAL-009881SEAL-0098......</p>
          </td>
          <td>
            <p>0.990.990.990...</p>
          </td>
          <td>
            <p>SEAL-009881SEAL-0098...SEAL-009881SEAL-0098...SEAL-009881SEAL-0098...SEAL-009881SEAL-0098...SEAL-009881SEAL-0098...,,,</p>
          </td>
          <td><p>53.70.990.990....</p></td>
          <td><p>交易成功</p></td>
          <td><p>2017-08-09 15:23:45</p></td>
        </tr>
        <tr>
          <td>
            <p>AP170818A244IP</p>
          </td>
          <td>
            <p>SSEAL-009881SEAL-0098...SEAL-009881SEAL-0098...SEAL-009881SEAL-0098...SEAL-009881SEAL-0098...SEAL-009881SEAL-0098...SEAL-009881SEAL-0098......</p>
          </td>
          <td>
            <p>0.990.990.990...</p>
          </td>
          <td>
            <p>SEAL-009881SEAL-0098...SEAL-009881SEAL-0098...SEAL-009881SEAL-0098...SEAL-009881SEAL-0098...SEAL-009881SEAL-0098...,,,</p>
          </td>
          <td><p>53.70.990.990....</p></td>
          <td><p>交易成功</p></td>
          <td><p>2017-08-09 15:23:45</p></td>
        </tr>
        <tr>
          <td>
            <p>AP170818A244IP</p>
          </td>
          <td>
            <p>SSEAL-009881SEAL-0098...SEAL-009881SEAL-0098...SEAL-009881SEAL-0098...SEAL-009881SEAL-0098...SEAL-009881SEAL-0098...SEAL-009881SEAL-0098......</p>
          </td>
          <td>
            <p>0.990.990.990...</p>
          </td>
          <td>
            <p>SEAL-009881SEAL-0098...SEAL-009881SEAL-0098...SEAL-009881SEAL-0098...SEAL-009881SEAL-0098...SEAL-009881SEAL-0098...,,,</p>
          </td>
          <td><p>53.70.990.990....</p></td>
          <td><p>交易成功</p></td>
          <td><p>2017-08-09 15:23:45</p></td>
        </tr>
        </tbody>
      </table>
      <div class="mt-50 text-r">
        <Page :total="100" show-elevator class="mr-20"></Page>
      </div>
      <div class="mt-30"></div>
    </div>
    <!--充值记录-->
    <div v-else class="panel mt-10">
      <table class="table table-hover">
        <thead >
        <tr class="bg_f8f8f8">
          <td><img class="mr-5" src="../../assets/images/icons/i-42.png">支付/交易号</td>
          <td><img class="mr-5" src="../../assets/images/icons/i-43.png">充值金额</td>
          <td><img class="mr-5" src="../../assets/images/icons/i-47.png">方式</td>
          <td><img class="mr-5" src="../../assets/images/icons/i-45.png">账号余额</td>
          <td><img class="mr-5" src="../../assets/images/icons/i-46.png">交易状态</td>
          <td><img class="mr-5" src="../../assets/images/icons/i-40.png">时间</td>
        </tr>
        </thead>
        <tbody class="col-666">
        <tr>
          <td>
            <p>AP170818A244IP</p>
          </td>
          <td>
            <p>0.990.990.990...</p>
          </td>
          <td>
            <p>支付宝</p>
          </td>
          <td><p>53.70.990.990....</p></td>
          <td>
            <p>交易成功</p>
            <p hidden class="col-main">待确认</p>
            <p hidden class="col-666">交易关闭</p>
            <p hidden class="col-red">交易失败</p>
          </td>
          <td><p>2017-08-09 15:23:45</p></td>
        </tr>
        <tr>
          <td>
            <p>AP170818A244IP</p>
          </td>
          <td>
            <p>0.990.990.990...</p>
          </td>
          <td>
            <p>支付宝</p>
          </td>
          <td><p>53.70.990.990....</p></td>
          <td>
            <p hidden>交易成功</p>
            <p  class="col-main">待确认</p>
            <p hidden class="col-666">交易关闭</p>
            <p hidden class="col-red">交易失败</p>
          </td>
          <td><p>2017-08-09 15:23:45</p></td>
        </tr>
        <tr>
          <td>
            <p>AP170818A244IP</p>
          </td>
          <td>
            <p>0.990.990.990...</p>
          </td>
          <td>
            <p>支付宝</p>
          </td>
          <td><p>53.70.990.990....</p></td>
          <td>
            <p hidden>交易成功</p>
            <p hidden  class="col-main">待确认</p>
            <p  class="col-666">交易关闭</p>
            <p hidden class="col-red">交易失败</p>
          </td>
          <td><p>2017-08-09 15:23:45</p></td>
        </tr>
        <tr>
          <td>
            <p>AP170818A244IP</p>
          </td>
          <td>
            <p>0.990.990.990...</p>
          </td>
          <td>
            <p>支付宝</p>
          </td>
          <td><p>53.70.990.990....</p></td>
          <td>
            <p hidden>交易成功</p>
            <p hidden  class="col-main">待确认</p>
            <p  hidden class="col-666">交易关闭</p>
            <p  class="col-red">交易失败</p>
          </td>
          <td><p>2017-08-09 15:23:45</p></td>
        </tr>
        <tr>
          <td>
            <p>AP170818A244IP</p>
          </td>
          <td>
            <p>0.990.990.990...</p>
          </td>
          <td>
            <p>支付宝</p>
          </td>
          <td><p>53.70.990.990....</p></td>
          <td>
            <p>交易成功</p>
            <p hidden class="col-main">待确认</p>
            <p hidden class="col-666">交易关闭</p>
            <p hidden class="col-red">交易失败</p>
          </td>
          <td><p>2017-08-09 15:23:45</p></td>
        </tr>
        <tr>
          <td>
            <p>AP170818A244IP</p>
          </td>
          <td>
            <p>0.990.990.990...</p>
          </td>
          <td>
            <p>支付宝</p>
          </td>
          <td><p>53.70.990.990....</p></td>
          <td>
            <p hidden>交易成功</p>
            <p  class="col-main">待确认</p>
            <p hidden class="col-666">交易关闭</p>
            <p hidden class="col-red">交易失败</p>
          </td>
          <td><p>2017-08-09 15:23:45</p></td>
        </tr>
        <tr>
          <td>
            <p>AP170818A244IP</p>
          </td>
          <td>
            <p>0.990.990.990...</p>
          </td>
          <td>
            <p>支付宝</p>
          </td>
          <td><p>53.70.990.990....</p></td>
          <td>
            <p hidden>交易成功</p>
            <p hidden  class="col-main">待确认</p>
            <p  class="col-666">交易关闭</p>
            <p hidden class="col-red">交易失败</p>
          </td>
          <td><p>2017-08-09 15:23:45</p></td>
        </tr>
        <tr>
          <td>
            <p>AP170818A244IP</p>
          </td>
          <td>
            <p>0.990.990.990...</p>
          </td>
          <td>
            <p>支付宝</p>
          </td>
          <td><p>53.70.990.990....</p></td>
          <td>
            <p hidden>交易成功</p>
            <p hidden  class="col-main">待确认</p>
            <p  hidden class="col-666">交易关闭</p>
            <p  class="col-red">交易失败</p>
          </td>
          <td><p>2017-08-09 15:23:45</p></td>
        </tr>
        </tbody>
      </table>
      <div class="mt-50 text-r">
        <Page :total="100" show-elevator class="mr-20"></Page>
      </div>
      <div class="mt-30"></div>
    </div>
  </div>
</template>

<script>
  export  default {
    data(){
      return {
        type:0
      }
    },
    methods:{
      confirm () {
        this.$Modal.confirm({
          title: '是否删除该消息?',
          content: '<p>删除以后将不可恢复!</p>',
          onOk: () => {
            this.$Message.info('删除成功');
          },
          onCancel: () => {
            this.$Message.info('删除');
          }
        });
      },
      read(){
        this.$Message.info('操作成功!');
      }
    }
  }
</script>
