<template>
  <div class="personal-homepage">
    <Row>
      <i-Col span="16">
        <Row>
          <i-Col span="12">
            <div class="panel">
              <div class="panel-body">
                <div class="media">
                  <div class="media-left">
                    <img src="../../assets/images/list/head-3.png" width="120" height="120" style="width: 120px;height: 120px">
                  </div>
                  <div class="media-body text-c">
                    <div class="f-16 mt-30"><router-link :to="{name:'个人信息',path:'/personal_information/security_setting'}">Hi~Exons</router-link></div>
                    <div class="f-12 col-666 mt-10">欢迎回到吉凯基因分析平台！</div>
                  </div>
                </div>
              </div>
            </div>
          </i-Col>
          <i-Col span="12">
            <div class="panel ml-10">
              <div class="panel-body text-c">
                <div class="f-18 mt-30">账户余额：J$  820.00</div>
                <div class="mt-20 mb-15"><router-link to="/recharge" class="btn btn-main">立即充值</router-link></div>
              </div>
            </div>
          </i-Col>
        </Row>
        <div class="panel mt-10">
          <div class="panel-heading">
            <a class="rg" href="#">&gt;&gt;</a>
            <i class="icon i-58"></i>
            我的项目
          </div>
          <table class="table table-hover">
            <thead>
            <tr>
              <th>项目名称</th>
              <th>应用工具</th>
              <th>最新操作时间</th>
              <th>项目状态</th>
            </tr>
            </thead>
            <tbody>
            <tr>
              <td><p>项目一项目一项目一项目一项目...</p></td>
              <td><p>项目一项目一项目一项目一项目...</p></td>
              <td><p>2017-8-17  17:15</p></td>
              <td><p>新创建</p></td>
            </tr>
            <tr>
              <td><p>项目一项目一项目一项目一项目...</p></td>
              <td><p>项目一项目一项目一项目一项目...</p></td>
              <td><p>2017-8-17  17:15</p></td>
              <td><p>新创建</p></td>
            </tr>
            <tr>
              <td><p>项目一项目一项目一项目一项目...</p></td>
              <td><p>项目一项目一项目一项目一项目...</p></td>
              <td><p>2017-8-17  17:15</p></td>
              <td><p>新创建</p></td>
            </tr>
            <tr>
              <td><p>项目一项目一项目一项目一项目...</p></td>
              <td><p>项目一项目一项目一项目一项目...</p></td>
              <td><p>2017-8-17  17:15</p></td>
              <td><p>新创建</p></td>
            </tr>
            <tr>
              <td><p>项目一项目一项目一项目一项目...</p></td>
              <td><p>项目一项目一项目一项目一项目...</p></td>
              <td><p>2017-8-17  17:15</p></td>
              <td><p>新创建</p></td>
            </tr>
            </tbody>
          </table>
        </div>
        <div class="mt-10">
          <img class="img-responsive" src="../../assets/images/list/7.png" height="150" width="100%"/>
        </div>
        <div class="mt-10">
          <Row>
            <i-Col span="12">
              <div class="panel" style="min-height: 297px">
                <div class="panel-heading">
                  关于我们
                </div>
                <div class="panel-body">
                  <p>
                    进入正题，让我们来详细地了解一下盒子，盒子在不同的平台可能会有其他的名字，但无论是叫做box还是叫做view并无本质区别。本文使用android开发平台做演示，在android平台中这些盒子一般被称为view（视图）。本章主要讲解以下点，帮助大家更加全面、更加系统地了解盒式
                    模型。
                  </p>
                </div>
              </div>
            </i-Col>
            <i-Col span="12">
              <div class="panel ml-10" style="min-height: 297px">
                <div class="panel-heading">
                  <a href="#" class="rg">&gt;&gt;</a>
                  <i class="icon i-59"></i>最新消息
                </div>
                <table class="table table-hover">
                  <thead>
                  <tr>
                    <th>内容</th>
                    <th>发布者</th>
                    <th>时间</th>
                  </tr>
                  </thead>
                  <tbody>
                  <tr>
                    <td><p style="max-width: 80px">项目一项目一哈哈哈哈哈..</p></td>
                    <td><p style="max-width: 80px">平台内部消息...</p></td>
                    <td><p>2017-8-17</p></td>
                  </tr>
                  <tr>
                    <td><p style="max-width: 80px">项目一项目一哈哈哈哈哈..</p></td>
                    <td><p style="max-width: 80px">平台内部消息...</p></td>
                    <td><p>2017-8-17</p></td>
                  </tr>
                  <tr>
                    <td><p style="max-width: 80px">项目一项目一哈哈哈哈哈..</p></td>
                    <td><p style="max-width: 80px">平台内部消息...</p></td>
                    <td><p>2017-8-17</p></td>
                  </tr>
                  <tr>
                    <td><p style="max-width: 80px">项目一项目一哈哈哈哈哈..</p></td>
                    <td><p style="max-width: 80px">平台内部消息...</p></td>
                    <td><p>2017-8-17</p></td>
                  </tr>
                  </tbody>
                </table>
              </div>
            </i-Col>
          </Row>
        </div>
      </i-Col>
      <i-col span="8">
        <div class="panel ml-10">
          <div class="panel-heading">
            <a href="#"><i class="icon i-56"></i>热门应用</a>
            &nbsp;|&nbsp;
            <a class="col-666" href="#"><i class="icon i-57"></i>最新应用</a>
          </div>
          <table class="table table-hover">
            <thead>
            <tr>
              <th>应用名称 <a href="#" class="icon i-60"></a></th>
              <th>调用次数</th>
              <th>上线时间</th>
            </tr>
            </thead>
            <tbody>
            <tr>
              <td><p style="max-width: 120px">项目一项目一哈哈哈哈哈...</p></td>
              <td><p style="max-width: 80px">平台内部消息...</p></td>
              <td><p>2017-8-17</p></td>
            </tr>
            <tr>
              <td><p style="max-width: 120px">项目一项目一哈哈哈哈哈...</p></td>
              <td><p style="max-width: 80px">平台内部消息...</p></td>
              <td><p>2017-8-17</p></td>
            </tr>
            <tr>
              <td><p style="max-width: 120px">项目一项目一哈哈哈哈哈...</p></td>
              <td><p style="max-width: 80px">平台内部消息...</p></td>
              <td><p>2017-8-17</p></td>
            </tr>
            <tr>
              <td><p style="max-width: 120px">项目一项目一哈哈哈哈哈...</p></td>
              <td><p style="max-width: 80px">平台内部消息...</p></td>
              <td><p>2017-8-17</p></td>
            </tr>
            <tr>
              <td><p style="max-width: 120px">项目一项目一哈哈哈哈哈...</p></td>
              <td><p style="max-width: 80px">平台内部消息...</p></td>
              <td><p>2017-8-17</p></td>
            </tr>
            </tbody>
          </table>
        </div>
        <div class="panel mt-10 ml-10">
          <div class="panel-heading">
            <i class="icon i-61"></i>云空间使用情况
          </div>
          <div class="panel-body">
            <div class="text-c">
              <i-Circle
                :size="175"
                :trail-width="4"
                :stroke-width="5"
                :percent="75"
                stroke-linecap="square"
                stroke-color="#43a3fb">
                <div class="text-c">
                  <span class="col-666">已使用250MB</span>
                </div>
              </i-Circle>
            </div>
            <div class="col-666 mt-10 text-c">上次使用时间：2017-08-09   15:24:26 </div>
          </div>
        </div>
        <div class="ml-10 mt-10">
          <img class="img-responsive" src="../../assets/images/list/8.png" height="331" width="326"/>
        </div>
      </i-col>
    </Row>
  </div>
</template>
<script>
  export  default {

  }
</script>
