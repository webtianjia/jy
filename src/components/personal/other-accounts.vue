<template>
  <div class="panel text-c" style="min-height: 480px">
    <div class="panel-body mt-80">
      <Row>
        <i-Col span="8">
          <div class="i-68"></div>
          <div class="mt-20"><a class="btn btn-main">绑定QQ</a></div>
        </i-Col>
        <i-Col span="8">
          <div class="i-69"></div>
          <div class="mt-20"><a class="btn btn-main">绑定微信</a></div>
        </i-Col>
        <i-Col span="8">
          <div class="i-70 active"></div>
          <div class="mt-20"><a class="btn btn-outline" disabled>已绑定支付宝</a></div>
        </i-Col>
      </Row>
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
