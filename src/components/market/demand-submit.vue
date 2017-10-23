<template>
  <div class="panel " style="min-height: 500px">
    <div class="panel-heading">
      提交成功
    </div>
    <div class="panel-body text-c">
      <div  class="mt-40">
        <img src="../../assets/images/icons/i-34.png">
      </div>
      <p class="mt-30">您的需求已提交，我们会在第一时间与您联系。</p>
      <div class="mt-20"><router-link class="btn btn-main" :to="{name:'应用市场',path:'/control_panel/market'}">确认</router-link></div>
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
