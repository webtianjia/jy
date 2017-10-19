<template>
  <div class="recharge">
    <div  class="container ">
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
    <v-footer></v-footer>
  </div>
</template>
<script>
  import  footer from "../comm/footer.vue"
    export default {
        data(){
            return {}
        },
        methods: {},
        components:{"v-footer":footer}
    }
</script>
