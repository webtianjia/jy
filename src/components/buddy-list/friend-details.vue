<template>
  <div>
    <div class="panel ">
      <div class="panel-body">
        <div class="media">
          <div class="media-left">
            <img src="../../assets/images/list/head-2.png" height="80" width="80"/>
          </div>
          <div class="media-body ">
            <div class="mt-10 ml-20">
              <span class="mr-20">我是一个用户名</span>
              <router-link class="btn btn-main" :to="{path:'/control_panel/send_message',id:1}"><img class="mr-5" src="../../assets/images/icons/icon_Email.png">站内信息</router-link>
            </div>
            <div class="mt-10 ml-20">
              <span class="col-666">长居地：上海    </span>
            </div>
            <div class="mt-10 ml-20">
              <span class="col-666">用户类型：科研工作者 </span>
            </div>
            <div class="mt-10 ml-20">
              <span class="col-666">加入时间：2017-09-09</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="panel mt-10 ">
      <div class="panel-heading">
        <a class="rg f-12 col-666" href="#">查看全部<Icon class="ml-5" type="ios-arrow-right" size="14"></Icon><Icon type="ios-arrow-right" size="14"></Icon></a>
        <i class="icon i-38"></i>清茶的应用(22)
      </div>
      <div class="panel-body application-list">
        <dl v-for=" i in 8">
          <dt>
            <img  src="../../assets/images/list/1.png" height="130" width="235"/>
            <div class="transition-info">
            <div class="info-text">房检查 乳腺病是危害女性身心健康
              的主要疾病,妇检是女性健康的一道
              己负责的表现,点击了解民生医己负责的表现,点击了解民生医己负责的表现,点击了解民生医...
            </div>
            <div class="mt-20">调用次数：365次</div>
          </div>
          </dt>
          <dd>
            <router-link :to="{path:'/control_panel/market/detail',id:1}" class="title">
              HOPLCE 肺癌基因检测HOPLCE 肺癌基因检测HOPLCE 肺癌基因检测HOPLCE 肺癌基因检测HOPLCE 肺癌基因检测
            </router-link>
            <div class="rg col-red mt-5">￥3.00/次</div>
            <div class="labels mt-5">
              <span>我是一个标签啊</span>
              <span>最搞笑</span>
            </div>
          </dd>
        </dl>
      </div>
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
